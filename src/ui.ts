import { Howl } from 'howler';

// DOM要素の取得
export const elements = {
  portraitMode: document.getElementById('portrait-mode') as HTMLDivElement,
  landscapeMode: document.getElementById('landscape-mode') as HTMLDivElement,
  pcWarning: document.getElementById('pc-warning') as HTMLDivElement,
  georgeImage: document.getElementById('george-image') as HTMLImageElement,
  sidebar: document.getElementById('sidebar') as HTMLDivElement,
  buttonDisplay: document.getElementById('button-display') as HTMLDivElement,
  buttonGrid: document.getElementById('button-grid') as HTMLDivElement,
  currentCategory: document.getElementById('current-category') as HTMLSpanElement,
  bgmSelect: document.getElementById('bgm-select') as HTMLSelectElement,
  bgmPlay: document.getElementById('bgm-play') as HTMLButtonElement,
  bgmPause: document.getElementById('bgm-pause') as HTMLButtonElement,
  bgmStop: document.getElementById('bgm-stop') as HTMLButtonElement,
  currentBgm: document.getElementById('current-bgm') as HTMLSpanElement,
};

// ボタンカテゴリの定義
export const buttonCategories = {
  1: [
    { id: 1, text: 'スポーツ経験がない男', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/portrait/スポーツ経験がない男.mp3' },
    { id: 2, text: 'いままであんまり運動の経験がない男', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/portrait/いままであんまり運動の経験がない男.mp3' },
    { id: 3, text: '部活に入った経験のない男', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/portrait/部活に入った経験のない男.mp3' },
    { id: 4, text: 'ガチで危機感持った方がいいと思う', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/portrait/ガチで危機感持った方がいいと思う.mp3' },
    { id: 5, text: '◎△＄♪×￥●＆％＃？！', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/portrait/◎△＄♪×￥●＆％＃？！.mp3' },
    { id: 6, text: 'テストステロン', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/portrait/テストステロン.mp3' },
    { id: 7, text: '必要な分だけ生成される', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/portrait/必要な分だけ生成される.mp3' },
    { id: 8, text: '落ち着けって', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/portrait/落ち着けって.mp3' }
  ],
  2: [
    { id: 9, text: 'やばい', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/やばい.mp3' },
    { id: 10, text: 'でぇ', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/でぇ.mp3' },
    { id: 11, text: 'マジでぇ', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/マジでぇ.mp3' },
    { id: 12, text: '確実に', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/確実に.mp3' },
    { id: 13, text: 'だから', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/だから.mp3' },
    { id: 14, text: '反対にぃ', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/反対にぃ.mp3' },
    { id: 15, text: '最後にぃ', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/最後にぃ.mp3' },
    { id: 16, text: 'お前さぁ', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/お前さぁ.mp3' }
  ],
  3: [
    { id: 17, text: '危機感がないから', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/危機感がないから.mp3' },
    { id: 18, text: '危機感に…かけすぎてる', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/危機感に…かけすぎてる.mp3' },
    { id: 19, text: '危機感を持ってた', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/危機感を持ってた.mp3' },
    { id: 20, text: 'モチベーションがないですぅ', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/モチベーションがないですぅ.mp3' },
    { id: 21, text: '頑張れないですぅ', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/頑張れないですぅ.mp3' },
    { id: 22, text: 'やらなきゃやばいから', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/やらなきゃやばいから.mp3' },
    { id: 23, text: 'やろうと思ってもできない理由', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/やろうと思ってもできない理由.mp3' }
  ],
  4: [
    { id: 24, text: 'その時の状況思い出せって', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/その時の状況思い出せって.mp3' },
    { id: 25, text: '思い出せって', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/思い出せって.mp3' },
    { id: 26, text: 'よーく思い出せって', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/よーく思い出せって.mp3' },
    { id: 27, text: 'も一回思い出せって', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/も一回思い出せって.mp3' },
    { id: 28, text: '何かに対して頑張ったのいつ', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/何かに対して頑張ったのいつ.mp3' },
    { id: 29, text: 'その状況において', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/その状況において.mp3' }
  ],
  5: [
    { id: 30, text: 'メンタルが弱い', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/メンタルが弱い.mp3' },
    { id: 31, text: '肉体的にも弱い', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/肉体的にも弱い.mp3' },
    { id: 32, text: '楽して生きていけるから', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/楽して生きていけるから.mp3' },
    { id: 33, text: '欲しい物なんでも手に入るから', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/欲しい物なんでも手に入るから.mp3' },
    { id: 34, text: 'シコって満足できる', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/シコって満足できる.mp3' },
    { id: 35, text: '瞬間の快楽に浸ってる', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/瞬間の快楽に浸ってる.mp3' }
  ],
  6: [
    { id: 36, text: '教えて', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/教えて.mp3' },
    { id: 37, text: '何か理由ある？', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/何か理由ある？.mp3' },
    { id: 38, text: 'でも少なくとも', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/でも少なくとも.mp3' },
    { id: 39, text: 'もうちょっと伸びてからでいいよ', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/もうちょっと伸びてからでいいよ.mp3' },
    { id: 40, text: '言えることは', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/言えることは.mp3' },
    { id: 41, text: 'そうじゃないの', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/そうじゃないの.mp3' }
  ],
  7: [
    { id: 42, text: '男として強くなかったら', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/男として強くなかったら.mp3' },
    { id: 43, text: '昔の男たちは違った', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/昔の男たちは違った.mp3' },
    { id: 44, text: '一人でイギリス行ったし', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/一人でイギリス行ったし.mp3' },
    { id: 45, text: 'イブラヒモヴィッチ', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/イブラヒモヴィッチ.mp3' },
    { id: 46, text: 'ケツに火をつけろって', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/ケツに火をつけろって.mp3' },
    { id: 47, text: 'しぬほど', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/しぬほど.mp3' }
  ],
  8: [
    { id: 48, text: '家族守れなかったんだよ', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/家族守れなかったんだよ.mp3' },
    { id: 49, text: '人生に一度は', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/人生に一度は.mp3' },
    { id: 50, text: '敵に攻められて', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/敵に攻められて.mp3' },
    { id: 51, text: '好きってところ', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/好きってところ.mp3' },
    { id: 52, text: '気持ちよく', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/気持ちよく.mp3' },
    { id: 53, text: 'ドーパミン', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/ドーパミン.mp3' },
    { id: 54, text: 'もうもはや', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/もうもはや.mp3' },
    { id: 55, text: '間違い無いでしょ', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/間違い無いでしょ.mp3' },
    { id: 56, text: '努力が出来ません', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/努力が出来ません.mp3' }
  ]
};

// デバイス判定
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isLandscape = (): boolean => {
  return window.innerWidth > window.innerHeight;
};

// モード切り替え
export const switchToPortraitMode = (): void => {
  elements.portraitMode.classList.remove('hidden');
  elements.landscapeMode.classList.add('hidden');
};

export const switchToLandscapeMode = (): void => {
  elements.portraitMode.classList.add('hidden');
  elements.landscapeMode.classList.remove('hidden');
  setupLandscapeMode();
};

// ランドスケープモードの初期化
export const setupLandscapeMode = (): void => {
  setupSidebarButtons();
  setupBgmControls();
  updateButtonGrid(1); // デフォルトでカテゴリ1を表示
};

// サイドバーボタンの設定
export const setupSidebarButtons = (): void => {
  const sidebarButtons = document.querySelectorAll('.sidebar-btn');
  sidebarButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      const category = parseInt(target.dataset.category || '1');
      updateButtonGrid(category);
      updateCurrentCategory(category);
      
      // アクティブ状態の更新
      sidebarButtons.forEach(btn => btn.classList.remove('ring-2', 'ring-yellow-400'));
      target.classList.add('ring-2', 'ring-yellow-400');
    });
  });
  
  // デフォルトでカテゴリ1をアクティブにする
  const firstButton = document.querySelector('.sidebar-btn') as HTMLButtonElement;
  if (firstButton) {
    firstButton.classList.add('ring-2', 'ring-yellow-400');
  }
};

// ボタングリッドの更新
export const updateButtonGrid = (category: number): void => {
  const buttons = buttonCategories[category as keyof typeof buttonCategories] || [];
  elements.buttonGrid.innerHTML = '';
  
  buttons.forEach(buttonData => {
    const button = document.createElement('button');
    button.className = `landscape-button ${buttonData.color} ${buttonData.hoverColor}`;
    button.textContent = buttonData.text;
    button.dataset.audio = buttonData.audio;
    button.dataset.buttonId = buttonData.id.toString();
    
    // ボタンクリックイベント
    button.addEventListener('click', () => {
      handleButtonClick(buttonData);
    });
    
    elements.buttonGrid.appendChild(button);
  });
};

// ボタンクリックの処理
export const handleButtonClick = (buttonData: any): void => {
  console.log('Button clicked:', buttonData);
  // グローバルなハンドラーが設定されている場合は呼び出し
  if ((window as any).handleLandscapeButtonClick) {
    (window as any).handleLandscapeButtonClick(buttonData);
  }
};

// 現在のカテゴリの更新
export const updateCurrentCategory = (category: number): void => {
  if (elements.currentCategory) {
    elements.currentCategory.textContent = category.toString();
  }
};

// BGMコントロールの設定
export const setupBgmControls = (): void => {
  if (elements.bgmPlay) {
    elements.bgmPlay.addEventListener('click', () => {
      console.log('BGM Play clicked');
      // BGM再生の処理（main.tsで実装）
    });
  }
  
  if (elements.bgmPause) {
    elements.bgmPause.addEventListener('click', () => {
      console.log('BGM Pause clicked');
      // BGM一時停止の処理（main.tsで実装）
    });
  }
  
  if (elements.bgmStop) {
    elements.bgmStop.addEventListener('click', () => {
      console.log('BGM Stop clicked');
      // BGM停止の処理（main.tsで実装）
    });
  }
};

// BGM選択ドロップダウンの設定
export const setupBgmSelect = (bgmList: { name: string; path: string; displayName: string }[]): void => {
  console.log('setupBgmSelect called with:', bgmList);
  if (elements.bgmSelect) {
    console.log('BGM Select element found, setting up options...');
    // 既存のオプションをクリア（最初の「BGMを選択」オプションは残す）
    elements.bgmSelect.innerHTML = '<option value="">BGMを選択</option>';
    
    // BGMリストからオプションを追加
    bgmList.forEach(bgm => {
      console.log('Adding BGM option:', bgm);
      const option = document.createElement('option');
      option.value = bgm.name;
      option.textContent = bgm.displayName;
      elements.bgmSelect.appendChild(option);
    });

    // 初期状態で再生ボタンを無効化
    const playButton = document.getElementById('bgm-play') as HTMLButtonElement;
    if (playButton) {
      playButton.disabled = true;
      playButton.classList.add('opacity-50', 'cursor-not-allowed');
    }

    // BGM選択時のイベントリスナーを追加
    elements.bgmSelect.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      if (target.value) {
        console.log('BGM selected:', target.value);
        // BGMが選択されたら再生ボタンを有効化
        const playButton = document.getElementById('bgm-play') as HTMLButtonElement;
        if (playButton) {
          playButton.disabled = false;
          playButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }
      } else {
        // BGMが選択されていない場合は再生ボタンを無効化
        const playButton = document.getElementById('bgm-play') as HTMLButtonElement;
        if (playButton) {
          playButton.disabled = true;
          playButton.classList.add('opacity-50', 'cursor-not-allowed');
        }
      }
    });
  }
};

// PC警告の表示/非表示
export const showPCWarning = (): void => {
  elements.pcWarning.classList.remove('hidden');
};

export const hidePCWarning = (): void => {
  elements.pcWarning.classList.add('hidden');
};

// ボタンの無効化/有効化
export const disableButton = (button: HTMLButtonElement): void => {
  button.disabled = true;
  button.classList.add('opacity-50', 'cursor-not-allowed');
};

export const enableButton = (button: HTMLButtonElement): void => {
  button.disabled = false;
  button.classList.remove('opacity-50', 'cursor-not-allowed');
};

// 画面向きの監視
export const setupOrientationListener = (onOrientationChange: (isLandscape: boolean) => void): void => {
  const handleOrientationChange = (): void => {
    const landscape = isLandscape();
    onOrientationChange(landscape);
  };

  window.addEventListener('resize', handleOrientationChange);
  window.addEventListener('orientationchange', handleOrientationChange);
  
  // 初期状態の設定
  handleOrientationChange();
};

// デバイス判定の監視
export const setupDeviceCheck = (): void => {
  if (!isMobile()) {
    showPCWarning();
  } else {
    hidePCWarning();
  }
}; 