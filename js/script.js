window.onload = () => {
     let x = document.querySelector("#nav");
     document.querySelector("#burger").onclick = function () {
          x.classList.toggle('responsive');
     };
};



$('.slider').slick({
     slidesToShow: 1,
     dots: true,
     responsive: [{
          breakpoint: 768,
          settings: {
               slidesToShow: 1,
               arrows: false
          }
     }]
});