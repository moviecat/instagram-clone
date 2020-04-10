// myfeed

let setting = document.querySelector('.btn_setting');
let modal2 = document.querySelector('.modal2');
let overlay2 = modal2.querySelector('.md_overlay2');
let btn = modal2.querySelector('.btn_close2');
// console.log(btn);

let openModal2 = () => {
    modal2.classList.remove('hidden2');
}

let closeModal2 = () => {
    modal2.classList.add('hidden2');
}
// myfeed
setting.addEventListener("click", openModal2);
overlay2.addEventListener("click", closeModal2);
btn.addEventListener("click", closeModal2);
