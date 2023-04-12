const popup = document.getElementById('myPopup');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];
const modal = document.getElementById('myPopup1');
const button = document.getElementById('myBtn1');
const closeMenu = document.getElementsByClassName('close1')[0];
const popup2 = document.getElementById('myPopup2');
const btn2 = document.getElementById('myBtn2');
const span2 = document.getElementsByClassName('close2')[0];
const modalbuttons = document.querySelectorAll('.bluebutton');
modalbuttons();

function addPopupTrigger(btn2, popup2) {
  btn2.onclick = function () {
    popup2.style.display = 'block';

    span.onclick = function () {
      popup.style.display = 'none';
    };
  };
}

btn.onclick = function () {
  popup.style.display = 'block';
};

span.onclick = function () {
  popup.style.display = 'none';
};

popup2();

button.onclick = function () {
  modal.style.display = 'block';
};

closeMenu.onclick = function () {
  modal.style.display = 'none';
};

btn2();
span2();
addPopupTrigger('');