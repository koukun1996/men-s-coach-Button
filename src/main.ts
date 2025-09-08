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
    { name: 'human-power-plant', path: './audio/bgm/human power plant Instrumental.mp3', displayName: 'Human Power Plant' },
    { name: 'escort', path: './audio/bgm/Escort.mp3', displayName: 'Escort' }
  ];

  constructor() {
    // すべての音声ファイルの初期化（カテゴリ順）
    this.phraseButtons = [
      // カテゴリ1（ポートレートモード）
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
      }),
      // カテゴリ2（短い言葉・感嘆詞）
      new Howl({
        src: ['./audio/landscape/やばい.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/でぇ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/マジでぇ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/確実に.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/だから.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/反対にぃ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/最後にぃ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/お前さぁ.mp3'],
        volume: 1.0,
        preload: true
      }),
      // カテゴリ3（危機感・モチベーション関連）
      new Howl({
        src: ['./audio/landscape/危機感がないから.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/危機感に…かけすぎてる.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/危機感を持ってた.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/モチベーションがないですぅ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/頑張れないですぅ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/やらなきゃやばいから.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/やろうと思ってもできない理由.mp3'],
        volume: 1.0,
        preload: true
      }),
      // カテゴリ4（思い出・記憶関連）
      new Howl({
        src: ['./audio/landscape/その時の状況思い出せって.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/思い出せって.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/よーく思い出せって.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/も一回思い出せって.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/何かに対して頑張ったのいつ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/その状況において.mp3'],
        volume: 1.0,
        preload: true
      }),
      // カテゴリ5（弱さ・問題点の指摘）
      new Howl({
        src: ['./audio/landscape/メンタルが弱い.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/肉体的にも弱い.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/楽して生きていけるから.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/欲しい物なんでも手に入るから.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/シコって満足できる.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/瞬間の快楽に浸ってる.mp3'],
        volume: 1.0,
        preload: true
      }),
      // カテゴリ6（質問・疑問形）
      new Howl({
        src: ['./audio/landscape/教えて.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/何か理由ある？.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/でも少なくとも.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/もうちょっと伸びてからでいいよ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/言えることは.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/そうじゃないの.mp3'],
        volume: 1.0,
        preload: true
      }),
      // カテゴリ7（強さ・男らしさ関連）
      new Howl({
        src: ['./audio/landscape/男として強くなかったら.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/昔の男たちは違った.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/一人でイギリス行ったし.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/イブラヒモヴィッチ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/ケツに火をつけろって.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/しぬほど.mp3'],
        volume: 1.0,
        preload: true
      }),
      // カテゴリ8（その他・長いセリフ）
      new Howl({
        src: ['./audio/landscape/家族守れなかったんだよ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/人生に一度は.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/敵に攻められて.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/好きってところ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/気持ちよく.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/ドーパミン.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/もうもはや.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/間違い無いでしょ.mp3'],
        volume: 1.0,
        preload: true
      }),
      new Howl({
        src: ['./audio/landscape/努力が出来ません.mp3'],
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
      // カテゴリ1（ポートレートモード）
      'スポーツ経験がない男.mp3',
      'いままであんまり運動の経験がない男.mp3',
      '部活に入った経験のない男.mp3',
      'ガチで危機感持った方がいいと思う.mp3',
      '◎△＄♪×￥●＆％＃？！.mp3',
      'テストステロン.mp3',
      '必要な分だけ生成される.mp3',
      '落ち着けって.mp3',
      // カテゴリ2（短い言葉・感嘆詞）
      'やばい.mp3',
      'でぇ.mp3',
      'マジでぇ.mp3',
      '確実に.mp3',
      'だから.mp3',
      '反対にぃ.mp3',
      '最後にぃ.mp3',
      'お前さぁ.mp3',
      // カテゴリ3（危機感・モチベーション関連）
      '危機感がないから.mp3',
      '危機感に…かけすぎてる.mp3',
      '危機感を持ってた.mp3',
      'モチベーションがないですぅ.mp3',
      '頑張れないですぅ.mp3',
      'やらなきゃやばいから.mp3',
      'やろうと思ってもできない理由.mp3',
      // カテゴリ4（思い出・記憶関連）
      'その時の状況思い出せって.mp3',
      '思い出せって.mp3',
      'よーく思い出せって.mp3',
      'も一回思い出せって.mp3',
      '何かに対して頑張ったのいつ.mp3',
      'その状況において.mp3',
      // カテゴリ5（弱さ・問題点の指摘）
      'メンタルが弱い.mp3',
      '肉体的にも弱い.mp3',
      '楽して生きていけるから.mp3',
      '欲しい物なんでも手に入るから.mp3',
      'シコって満足できる.mp3',
      '瞬間の快楽に浸ってる.mp3',
      // カテゴリ6（質問・疑問形）
      '教えて.mp3',
      '何か理由ある？.mp3',
      'でも少なくとも.mp3',
      'もうちょっと伸びてからでいいよ.mp3',
      '言えることは.mp3',
      'そうじゃないの.mp3',
      // カテゴリ7（強さ・男らしさ関連）
      '男として強くなかったら.mp3',
      '昔の男たちは違った.mp3',
      '一人でイギリス行ったし.mp3',
      'イブラヒモヴィッチ.mp3',
      'ケツに火をつけろって.mp3',
      'しぬほど.mp3',
      // カテゴリ8（その他・長いセリフ）
      '家族守れなかったんだよ.mp3',
      '人生に一度は.mp3',
      '敵に攻められて.mp3',
      '好きってところ.mp3',
      '気持ちよく.mp3',
      'ドーパミン.mp3',
      'もうもはや.mp3',
      '間違い無いでしょ.mp3',
      '努力が出来ません.mp3'
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