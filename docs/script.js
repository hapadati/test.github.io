// スライドショー用画像とメッセージのリスト
const album = [
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY! MANO!　作成者 HeltezNor' },
  { src: 'aya.jpg', msg: 'Happy  birthday!!\nいつも楽しい配信ありがとう!!\nいろんな事を一緒にもっともーっと楽しんでいこうね!!作成者 妖月' },
  { src: 'kanata.jpg', msg: 'まのママ、誕生日おめでとう🎉\n初めて出会った時はまさかここまで深い関係なるとは思わんかったな\nでも、色々助けてくれてありがとう\nまだまだ未熟なオレだけど、またこれからも仲良くしてくれると嬉しいな\nこれからもよろしくな！！！ 作成者 鎌鼬叶多' },
  { src: 'suama.jpg', msg: 'お誕生日おめでとうございます！\nささやかながらお花を贈らせていただきます。作成者　すあま'}
];

let currentIndex = 0;

// <header> 内の画像とメッセージ要素を取得
const headerImage = document.querySelector('header img');
const photoMessage = document.getElementById('photo-message');

// スライドショーの実行
setInterval(() => {
  currentIndex = (currentIndex + 1) % album.length;

  // フェードアウト
  headerImage.classList.add('fade-out');
  photoMessage.classList.add('fade-out');

  setTimeout(() => {
    // 画像とメッセージを切り替え
    headerImage.src = album[currentIndex].src;
    headerImage.alt = album[currentIndex].msg;
    photoMessage.textContent = album[currentIndex].msg;

    // フェードイン
    headerImage.classList.remove('fade-out');
    photoMessage.classList.remove('fade-out');
  }, 2000); // フェード時間
}, 7000); // スライド間隔
