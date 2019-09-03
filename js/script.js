//animation
var wow = new WOW(
     {
          boxClass:     'wow',      
          animateClass: 'animated', 
          offset:       0,          
          mobile:       true,     
          live:         true,      
          callback:     function(box) {
          },
          scrollContainer: null 
       }
     );
     wow.init();
  


     
window.onload = () => {
     let x = document.querySelector("#nav");
    document.querySelector("#burger").onclick =  () => {
          x.classList.toggle('responsive');
     };
};




function spanText(text) {
     let string = text.innerText;
     let spaned = '';
     for (let i = 0; i < string.length; i++) {
       if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
       else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
     }
     text.innerHTML = spaned;
   }
   
   let headline = document.querySelector("h2");
   
   spanText(headline);
 







//SlickSlider

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