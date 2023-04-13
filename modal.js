const popup = document.getElementById('myPopup');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

const modalup = document.getElementById('myPopup1');
const button = document.getElementById('myBtn1');
const close = document.getElementsByClassName('close1')[0];

const click = document.getElementById('myPopup2');
const open = document.getElementById('myBtn2');
const end = document.getElementsByClassName('close2')[0];

const page = document.getElementById('myPopup3');
const reveal = document.getElementById('myBtn3');
const conceal = document.getElementsByClassName('close3')[0];

btn.onclick = function () {
  popup.style.display = 'block';
};

span.onclick = function () {
  popup.style.display = 'none';
};

button.onclick = function () {
  modalup.style.display = 'block';
};

close.onclick = function () {
  modalup.style.display = 'none';
};

open.onclick = function () {
  click.style.display = 'block';
};

end.onclick = function () {
  click.style.display = 'none';
};

reveal.onclick = function () {
  page.style.display = 'block';
};

conceal.onclick = function () {
  page.style.display = 'none';
};
