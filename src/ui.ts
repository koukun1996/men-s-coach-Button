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
    { id: 8, text: '落ち着けって', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/portrait/落ち着けって.mp3' },
    { id: 9, text: 'カスタム1', color: 'bg-gray-600', hoverColor: 'hover:bg-gray-700', audio: './audio/portrait/テストステロン.mp3' }
  ],
  2: [
    { id: 10, text: 'カテゴリ2-1', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/カテゴリ2-1.mp3' },
    { id: 11, text: 'カテゴリ2-2', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/カテゴリ2-2.mp3' },
    { id: 12, text: 'カテゴリ2-3', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/カテゴリ2-3.mp3' },
    { id: 13, text: 'カテゴリ2-4', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/カテゴリ2-4.mp3' },
    { id: 14, text: 'カテゴリ2-5', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/カテゴリ2-5.mp3' },
    { id: 15, text: 'カテゴリ2-6', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/カテゴリ2-6.mp3' },
    { id: 16, text: 'カテゴリ2-7', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/カテゴリ2-7.mp3' },
    { id: 17, text: 'カテゴリ2-8', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/カテゴリ2-8.mp3' },
    { id: 18, text: 'カテゴリ2-9', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/カテゴリ2-9.mp3' }
  ],
  3: [
    { id: 19, text: 'カテゴリ3-1', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/カテゴリ3-1.mp3' },
    { id: 20, text: 'カテゴリ3-2', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/カテゴリ3-2.mp3' },
    { id: 21, text: 'カテゴリ3-3', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/カテゴリ3-3.mp3' },
    { id: 22, text: 'カテゴリ3-4', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/カテゴリ3-4.mp3' },
    { id: 23, text: 'カテゴリ3-5', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/カテゴリ3-5.mp3' },
    { id: 24, text: 'カテゴリ3-6', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/カテゴリ3-6.mp3' },
    { id: 25, text: 'カテゴリ3-7', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/カテゴリ3-7.mp3' },
    { id: 26, text: 'カテゴリ3-8', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/カテゴリ3-8.mp3' },
    { id: 27, text: 'カテゴリ3-9', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/カテゴリ3-9.mp3' }
  ],
  4: [
    { id: 28, text: 'カテゴリ4-1', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/カテゴリ4-1.mp3' },
    { id: 29, text: 'カテゴリ4-2', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/カテゴリ4-2.mp3' },
    { id: 30, text: 'カテゴリ4-3', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/カテゴリ4-3.mp3' },
    { id: 31, text: 'カテゴリ4-4', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/カテゴリ4-4.mp3' },
    { id: 32, text: 'カテゴリ4-5', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/カテゴリ4-5.mp3' },
    { id: 33, text: 'カテゴリ4-6', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/カテゴリ4-6.mp3' },
    { id: 34, text: 'カテゴリ4-7', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/カテゴリ4-7.mp3' },
    { id: 35, text: 'カテゴリ4-8', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/カテゴリ4-8.mp3' },
    { id: 36, text: 'カテゴリ4-9', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/カテゴリ4-9.mp3' }
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

    // BGM選択時のイベントリスナーを追加
    elements.bgmSelect.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      if (target.value) {
        // BGMが選択されたら自動的に再生ボタンをクリック
        const playButton = document.getElementById('bgm-play') as HTMLButtonElement;
        if (playButton) {
          // 少し遅延を入れてから再生ボタンをクリック（UIの安定性のため）
          setTimeout(() => {
            playButton.click();
          }, 150);
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