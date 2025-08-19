// スライドショー用画像とメッセージのリスト
const album = [
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY! MANO!' },
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY!' },
  { src: 'HBDImage.jpg', msg: 'YOU ARE AMAZING!' }
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
}, 15000); // スライド間隔
