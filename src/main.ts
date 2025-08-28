import './styles.css';
import { Howl } from 'howler';
import {
  elements,
  switchToPortraitMode,
  switchToLandscapeMode,
  setupOrientationListener,
  setupDeviceCheck,
  disableButton,
  enableButton,
  buttonCategories,
  handleButtonClick,
  setupBgmSelect
} from './ui';

// 音声管理クラス
class AudioManager {
  private bgm: Howl | null = null;
  private phraseButtons: Howl[];
  private currentBgmName: string = 'なし';
  private bgmList: { name: string; path: string; displayName: string }[] = [
    { name: 'how-to-get-high-legally', path: './audio/bgm/How to Get High Legally(Instrumental).mp3', displayName: 'How to Get High Legally' },
    { name: 'how-many-boogie', path: './audio/bgm/How Many Boogie(Instrumental).mp3', displayName: 'How Many Boogie' },
    { name: 'lose-yourself', path: './audio/bgm/Lose Yourself (Instrumental).mp3', displayName: 'Lose Yourself' },
    { name: 'still-dre', path: './audio/bgm/Still D.R.E. (Instrumental).mp3', displayName: 'Still D.R.E.' },
    { name: 'human-power-plant', path: './audio/bgm/human power plant Instrumental.mp3', displayName: 'Human Power Plant' }
  ];

  constructor() {
    // ポートレートモード用のセリフボタン音声の初期化
    this.phraseButtons = [
      new Howl({
        src: ['./audio/portrait/スポーツ経験がない男.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/portrait/いままであんまり運動の経験がない男.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/portrait/部活に入った経験のない男.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/portrait/ガチで危機感持った方がいいと思う.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/portrait/◎△＄♪×￥●＆％＃？！.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/portrait/テストステロン.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/portrait/必要な分だけ生成される.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/portrait/落ち着けって.mp3'],
        volume: 1.0,
        preload: true
      })
    ];
  }

  // セリフボタン再生（ポートレートモード用）
  playPhraseButton(index: number): void {
    console.log('Phrase button state:', this.phraseButtons[index]?.state());
    if (this.phraseButtons[index]) {
      const buttonId = `phrase-btn-${index + 1}`;
      const button = document.getElementById(buttonId) as HTMLButtonElement;
      
      if (button) {
        disableButton(button);
        this.phraseButtons[index].play();
        
        this.phraseButtons[index].once('end', () => {
          enableButton(button);
        });
      }
    }
  }

  // ランドスケープモード用のボタン再生
  playLandscapeButton(buttonData: any): void {
    console.log('Playing landscape button:', buttonData);
    
    // 音声ファイル名からインデックスを取得
    const audioIndex = this.getAudioIndex(buttonData.audio);
    if (audioIndex >= 0 && this.phraseButtons[audioIndex]) {
      this.phraseButtons[audioIndex].play();
    }
  }

  // 音声ファイル名からインデックスを取得
  private getAudioIndex(audioFileName: string): number {
    // ファイル名からベース名を抽出
    const baseFileName = audioFileName.split('/').pop() || '';
    
    const audioFiles = [
      'スポーツ経験がない男.mp3',
      'いままであんまり運動の経験がない男.mp3',
      '部活に入った経験のない男.mp3',
      'ガチで危機感持った方がいいと思う.mp3',
      '◎△＄♪×￥●＆％＃？！.mp3',
      'テストステロン.mp3',
      '必要な分だけ生成される.mp3',
      '落ち着けって.mp3'
    ];
    return audioFiles.indexOf(baseFileName);
  }

  // BGM再生
  playBGM(bgmName: string): void {
    if (this.bgm) {
      this.bgm.stop();
    }
    
    // BGMリストから選択されたBGMを探す
    const selectedBgm = this.bgmList.find(bgm => bgm.name === bgmName);
    if (selectedBgm) {
      this.bgm = new Howl({
        src: [selectedBgm.path],
        volume: 0.7,
        loop: true,
        preload: true,
        onloaderror: (id, error) => {
          console.error('BGM読み込みエラー:', error);
          this.currentBgmName = '読み込みエラー';
          this.updateBgmInfo();
        },
        onplayerror: (id, error) => {
          console.error('BGM再生エラー:', error);
          this.currentBgmName = '再生エラー';
          this.updateBgmInfo();
        }
      });
      
      this.bgm.play();
      this.currentBgmName = selectedBgm.displayName;
      this.updateBgmInfo();
    }
  }

  // BGMリストの取得
  getBgmList(): { name: string; path: string; displayName: string }[] {
    return this.bgmList;
  }

  // BGM一時停止
  pauseBGM(): void {
    if (this.bgm) {
      this.bgm.pause();
    }
  }

  // BGM停止
  stopBGM(): void {
    if (this.bgm) {
      this.bgm.stop();
      this.currentBgmName = 'なし';
      this.updateBgmInfo();
    }
  }

  // BGM情報の更新
  private updateBgmInfo(): void {
    if (elements.currentBgm) {
      elements.currentBgm.textContent = this.currentBgmName;
    }
  }

  // 音声のプリロード
  preloadAll(): void {
    this.phraseButtons.forEach(phrase => phrase.load());
  }
}

// アプリケーションクラス
class GeorgeVoiceApp {
  private audioManager: AudioManager;
  private isLandscapeMode: boolean = false;

  constructor() {
    this.audioManager = new AudioManager();
    this.initialize();
  }

  private initialize(): void {
    // デバイスチェック
    setupDeviceCheck();

    // 画面向きの監視
    setupOrientationListener((isLandscape) => {
      this.handleOrientationChange(isLandscape);
    });

    // ポートレートモード用のセリフボタンのイベントリスナー
    for (let i = 1; i <= 8; i++) {
      const button = document.getElementById(`phrase-btn-${i}`) as HTMLButtonElement;
      if (button) {
        button.addEventListener('click', () => {
          this.audioManager.playPhraseButton(i - 1);
        });
      }
    }

      // ランドスケープモード用のBGMコントロール
  this.setupBgmControls();
  
  // BGM選択ドロップダウンの設定
  const bgmList = this.audioManager.getBgmList();
  console.log('BGM List:', bgmList);
  console.log('BGM Select Element:', elements.bgmSelect);
  setupBgmSelect(bgmList);

    // 音声のプリロード
    this.audioManager.preloadAll();

    // サービスワーカーの登録
    this.registerServiceWorker();
  }

  // BGMコントロールの設定
  private setupBgmControls(): void {
    if (elements.bgmPlay) {
      elements.bgmPlay.addEventListener('click', () => {
        const selectedBgm = elements.bgmSelect?.value;
        if (selectedBgm) {
          this.audioManager.playBGM(selectedBgm);
        } else {
          // BGMが選択されていない場合は最初のBGMを再生
          this.audioManager.playBGM('how-many-boogie');
        }
      });
    }
    
    if (elements.bgmPause) {
      elements.bgmPause.addEventListener('click', () => {
        this.audioManager.pauseBGM();
      });
    }
    
    if (elements.bgmStop) {
      elements.bgmStop.addEventListener('click', () => {
        this.audioManager.stopBGM();
        // 停止後、BGM選択をリセット
        if (elements.bgmSelect) {
          elements.bgmSelect.value = '';
        }
      });
    }
  }

  private handleOrientationChange(isLandscape: boolean): void {
    if (isLandscape && !this.isLandscapeMode) {
      this.enterLandscapeMode();
    } else if (!isLandscape && this.isLandscapeMode) {
      this.exitLandscapeMode();
    }
  }

  private enterLandscapeMode(): void {
    this.isLandscapeMode = true;
    switchToLandscapeMode();
    
    // ランドスケープモード用のボタンクリック処理を設定
    this.setupLandscapeButtonHandlers();
  }

  private exitLandscapeMode(): void {
    this.isLandscapeMode = false;
    switchToPortraitMode();
  }

  // ランドスケープモード用のボタンハンドラー設定
  private setupLandscapeButtonHandlers(): void {
    // 既存のhandleButtonClickをオーバーライド
    const originalHandleButtonClick = handleButtonClick;
    
    // グローバルなhandleButtonClickを再定義
    (window as any).handleLandscapeButtonClick = (buttonData: any) => {
      this.audioManager.playLandscapeButton(buttonData);
    };
  }

  private async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully');
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
  new GeorgeVoiceApp();
});