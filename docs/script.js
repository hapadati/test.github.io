let album = [
  {src 'HBDImage.jpg', msg: HAPPYBIRTHDAY!MANO!},
  {src 'HBDImage.jpg', msg: HAPPYBIRTHDAY!},
  {src 'HBDImage.jpg', msg: HAPPYBIRTHDAY!MANO!},
  {src 'HBDImage.jpg', msg: HAPPYBIRTHDAY!},
  {src 'HBDImage.jpg', msg: HAPPYBIRTHDAY!MANO!},
  {src 'HBDImage.jpg', msg: HAPPYBIRTHDAY!},
];

let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.CreateElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(maiMsg, null);

let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});

