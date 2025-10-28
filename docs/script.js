const album = [
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY! MANO!　作成者 HeltezNor' },
  { src: 'aya.jpg', msg: `Happy birthday!!
いつも楽しい配信ありがとう!!
いろんな事を一緒にもっともーっと楽しんでいこうね!! 作成者 妖月` },
  { src: 'kanata.jpg', msg: `まのママ、誕生日おめでとう🎉
初めて出会った時はまさかここまで深い関係なるとは思わんかったな
でも、色々助けてくれてありがとう
まだまだ未熟なオレだけど、またこれからも仲良くしてくれると嬉しいな
これからもよろしくな！！！ 作成者 鎌鼬叶多` },
  { src: 'suama.jpg', msg: `お誕生日おめでとうございます！
ささやかながらお花を贈らせていただきます。作成者　すあま` }
];

let currentIndex = 0;

const headerImage = document.querySelector('header img');
const photoMessage = document.getElementById('photo-message');

setInterval(() => {
  currentIndex = (currentIndex + 1) % album.length;

  headerImage.classList.add('fade-out');
  photoMessage.classList.add('fade-out');

  setTimeout(() => {
    headerImage.src = album[currentIndex].src;
    headerImage.alt = album[currentIndex].msg;
    // 改行を反映
    photoMessage.innerHTML = album[currentIndex].msg.replace(/\n/g, '<br>');

    headerImage.classList.remove('fade-out');
    photoMessage.classList.remove('fade-out');
  }, 2000);
}, 7000);
