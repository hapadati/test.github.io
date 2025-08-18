let album = [
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY! MANO!' },
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY!' },
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY! MANO!' },
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY!' },
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY! MANO!' },
  { src: 'HBDImage.jpg', msg: 'HAPPY BIRTHDAY!' },
];

let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = album[0].msg;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.appendChild(mainImage);
mainFlame.appendChild(mainMsg);

let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.appendChild(thumbImage);
}

let currentIndex = 0;

// サムネイルクリックで切り替え
thumbFlame.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    let newIndex = Array.from(thumbFlame.children).indexOf(event.target);
    switchImage(newIndex);
  }
});

// スライドショー自動切替
setInterval(() => {
  let newIndex = (currentIndex + 1) % album.length;
  switchImage(newIndex);
}, 3000);

// フェードアニメーションで画像切替
function switchImage(newIndex) {
  mainImage.classList.add('fade-out');
  mainMsg.classList.add('fade-out');

  setTimeout(() => {
    mainImage.src = album[newIndex].src;
    mainImage.alt = album[newIndex].msg;
    mainMsg.innerText = album[newIndex].msg;

    mainImage.classList.remove('fade-out');
    mainMsg.classList.remove('fade-out');
    currentIndex = newIndex;
  }, 10000); // 10秒後に画像を切り替える
}
