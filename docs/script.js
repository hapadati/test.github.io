// スライドショー用画像とメッセージのリスト
const album = [
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY! MANO!　作成者 HeltezNor' },
  { src: 'Aya.jpg', msg: '作成者 妖月' },
  { src: 'kanata.jpg', msg: '作成者 鎌鼬叶多' }
  { src: 'suama.jpg', msg: '作成者　すあま'}
];

let currentIndex = 0;

// <header> 内の画像を取得
const headerImage = document.querySelector('header img');

// スライドショーの実行
setInterval(() => {
  currentIndex = (currentIndex + 1) % album.length;

  headerImage.classList.add('fade-out');

  setTimeout(() => {
    headerImage.src = album[currentIndex].src;
    headerImage.alt = album[currentIndex].msg;
    headerImage.classList.remove('fade-out');
  }, 2000); // フェード時間
}, 7000); // スライド間隔
