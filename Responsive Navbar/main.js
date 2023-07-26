let showMenu = document.getElementsByClassName('toogle-close');
let hamburger = document.getElementsByClassName('hamburger-menu');
// const newLocal = showMenu[0].style.display = 'block';

hamburger[0].addEventListener('click',()=>{
    // showMenu[0].style.height = '1rem';
document.getElementsByClassName('toogle-close')[0].style.display = 'flex'
    //  showMenu[0].className = 'toogle-menu';
    // showMenu[0].classList.toggle('toogle-close');
    // 
if(showMenu[0].style.display == 'flex'){
    console.log("true");
    showMenu[0].style.display == 'none'
}
    // if(newLocal){
    //     showMenu[0].style.display = 'none';
    // }else if( showMenu[0].style.display = 'none'){
    //     showMenu[0].style.display = 'block';
    // }
});


