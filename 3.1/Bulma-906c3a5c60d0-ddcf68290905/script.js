var btn = document.querySelector('#showModal');
var modalDlg = document.querySelector('#planning-modal');
var imageModalCloseBtn = document.querySelector('#planning-modal-close');
btn.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
});