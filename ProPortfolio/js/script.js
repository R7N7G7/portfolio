var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        },
    }
  });


var item = document.querySelectorAll(".timeline li");

  function isElementInViewport(el){
      var rect = el.getBoundingClientRect();
    return(
      rect.top >= 0 && 
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for(var i = 0; i < item.length; i++){
        if(isElementInViewport(item[i])){
           if(!item[i].classList.contains("in-view")){
               item[i].classList.add("in-view");
            }
        } else if(item[i].classList.contains("in-view")){
            item[i].classList.remove("in-view");
        }
    }  
  }
   window .addEventListener("load",callbackFunc);
   window.addEventListener("scroll",callbackFunc);