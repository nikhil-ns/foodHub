// function loader(){
//     document.querySelector('.reloading').classList.add('fade-out')
// }
// function fadeout(){
//     setInterval(loader, 3);
// }

// window.onload = fadeout;

const swiper = new Swiper('.swiper',{
    loop:true,

    pagination:{
        el: '.swiper-pagination',
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

})