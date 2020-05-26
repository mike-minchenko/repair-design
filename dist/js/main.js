$(document).ready(function(){var e=$(".modal"),t=$("[data-togle=modal]"),n=$(".modal__close");t.on("click",function(){e.toggleClass("modal--visible")}),n.on("click",function(){e.toggleClass("modal--visible")}),$(document).click(function(t){t.target.classList.contains("modal")&&e.removeClass("modal--visible")}),$(document).keydown(function(t){"Escape"===t.key&&e.removeClass("modal--visible")});var i=$(".thanks");$(".thanks__button").on("click",function(){i.removeClass("thanks--visible")}),$(document).click(function(e){e.target.classList.contains("thanks")&&i.removeClass("thanks--visible")}),$(document).keydown(function(e){"Escape"===e.key&&i.removeClass("thanks--visible")}),$(window).scroll(function(){$(this).scrollTop()>100?$(".goTop").fadeIn():$(".goTop").fadeOut()}),$("a[href^='#']").click(function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top-87},1400),!1}),$(".goTop").click(function(){return $("html, body").animate({scrollTop:0},1400),!1});new Swiper(".projects__swiper-container",{loop:!0,pagination:{el:".projects__swiper-pagination",type:"bullets"},navigation:{nextEl:".projects__swiper-button-next",prevEl:".projects__swiper-button-prev"}});var o=$(".projects__swiper-button-next"),a=$(".projects__swiper-button-prev"),s=$(".swiper-pagination");o.css("left",a.width()+23+s.width()+23),s.css("left",a.width()+23);var l=new Swiper(".steps__swiperImg-container",{effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".steps__swiperImg-pagination",type:"fraction",renderFraction:function(e,t){return'<span class="'+e+'"></span>/<span class="'+t+'"></span>'}},navigation:{nextEl:".steps__swiperText-button-next",prevEl:".steps__swiperText-button-prev"}}),r=new Swiper(".steps__swiperText-container",{effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".steps__swiperText-pagination",type:"bullets"}}),c=$(".steps__swiperText-button-next"),d=$(".steps__swiperText-button-prev"),p=$(".steps__swiperText-pagination");c.css("left",d.width()+23+p.width()+23),p.css("left",d.width()+23),l.controller.control=r,r.controller.control=l,$(".steps-button-0").click(function(){l.slideTo(0)}),$(".steps-button-1").click(function(){l.slideTo(1)}),$(".steps-button-2").click(function(){l.slideTo(2)}),$(".steps-button-3").click(function(){l.slideTo(3)}),$(".steps-button-4").click(function(){l.slideTo(4)}),$(".steps-button-5").click(function(){l.slideTo(5)}),l.on("slideChange",function(){var e=".steps-button-"+l.realIndex,t=".steps-button-"+l.previousIndex;$(e).removeClass("shadow"),$(t).addClass("shadow")}),new WOW({boxClass:"wow",animateClass:"animate__animated",offset:0,mobile:!0,live:!0,callback:function(e){},scrollContainer:null,resetAnimation:!0}).init(),$(window).width(function(){$(this).width()<576?$(".policy__label--mobile").text("Я соглашаюсь на обработку данных"):$(".policy__label--mobile").text("Я соглашаюсь c обработкой данных")}),$(window).resize(function(){$(this).width()<576?$(".policy__label--mobile").text("Я соглашаюсь на обработку данных"):$(".policy__label--mobile").text("Я соглашаюсь c обработкой данных")}),$("form").each(function(){$(this).validate({errorElement:"div",errorClass:"invalid",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},userEmail:{required:!0,email:!0},userQuestion:{required:!0,minlength:10},policyCheckbox:"required"},messages:{userName:{required:"Заполните поле",minlength:"Имя должно быть не короче 2 букв",maxlength:"Имя должно быть не длинее 15 букв"},userPhone:{required:"Заполните поле",minlength:"Введите полный номер телефона"},userEmail:{required:"Заполните поле",email:"Введите корректный Email в формате name@domain.com"},userQuestion:{required:"Задайте Ваш вопрос",minlength:"Вопрос должен быть не короче 10 символов"},policyCheckbox:"Установите галочку на соглашении"},submitHandler:function(t){$.ajax({type:"POST",url:"send.php",data:$(t).serialize(),success:function(n){$(t)[0].reset(),e.removeClass("modal--visible"),i.addClass("thanks--visible")}})}})}),$("[type=tel]").mask("+7 (000) 000-00-00");var u=$(".map-container").children(".loader"),m=0;function f(){var e=new ymaps.Map("map",{center:[47.208901,39.631539],zoom:16},{searchControlProvider:"yandex#search"}),t=new ymaps.Placemark([47.208901,39.631539],{hintContent:"Наш офис",balloonContent:"Офис на 3 этаже"},{iconLayout:"default#imageWithContent",iconImageHref:"img/location.png",iconImageSize:[35,35],iconImageOffset:[-5,-38]});e.geoObjects.add(t),e.behaviors.disable("scrollZoom"),function(e){return new ymaps.vow.Promise(function(t,n){var i=function(e){for(var t in e)if(e.hasOwnProperty(t)&&(e[t]instanceof ymaps.layer.tileContainer.CanvasContainer||e[t]instanceof ymaps.layer.tileContainer.DomContainer))return e[t];return null}(e),o=!0;i.tiles.each(function(e,t){e.isReady()||(o=!1)}),o?t():i.events.once("ready",function(){t()})})}(e.layers.get(0).get(0)).then(function(){u.removeClass("is-active")})}var h=function(){$(".map-container").mouseenter(function(){var e,t,n;m||(m=!0,u.addClass("is-active"),e="https://api-maps.yandex.ru/2.1/?apikey=91aa17f6-4a8b-4b5b-bb3d-57cf3bd3c669&lang=ru_RU",t=function(){ymaps.load(f)},(n=document.createElement("script")).readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()},n.src=e,document.getElementsByTagName("head")[0].appendChild(n))})};function b(e){e.target.playVideo()}$(function(){h()}),$(".video__play").on("click",function(){new YT.Player("player",{height:"100%",width:"100%",videoId:"RHzzLqJWqHs",events:{onReady:b}})})});