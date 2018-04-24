
$(document).ready(function() {
  // $(".nav-mobile").on("click",topMenuManipulation);
  // function topMenuManipulation(){
  //   $(".header-top__menu-mobile").toggleClass("active-mob");
  //   $(".nav-mobile").toggleClass("active");
  // }

  //   $(".mymenu").on("click","a", function (event) {
  //     //отменяем стандартную обработку нажатия по ссылке
  //     event.preventDefault();
  //     //забираем идентификатор бока с атрибута href
  //     var id  = $(this).attr('href'),
  //     //узнаем высоту от начала страницы до блока на который ссылается якорь
  //       top = $(id).offset().top;
  //     //анимируем переход на расстояние - top за 1500 мс
  //     $('body,html').animate({scrollTop: top}, 1500);
  //   });


  //$.fancybox('http://localhost:3000/img/halls/hall1/Foto-3-Interer-zala.jpg')
    $(".open_fancybox1").click(function() {
    
      $.fancybox.open([
        {
          src: 'img/halls/hall1/google1.jpg',
          title: 'manual 1st title'
        },
        {
          src: 'img/halls/hall1/google2.jpg',
          title: '2nd title'
        },
        {
          src: 'img/halls/hall1/google3.jpg',
          title: '3rd title'
        }
      ], {
          nextEffect : 'none',
          prevEffect : 'none',
          padding    : 0,
          helpers    : {
              title : {
                  type: 'over'  
              },
              thumbs : {
                  width  : 75,
                  height : 50,
                  // source : function( item ) {
                  //     return item.href.replace('_b.jpg', '_s.jpg');
                  // }
              }
          }
      });
      
      return false;
  });

  $(".open_fancybox2").click(function() {
    
    $.fancybox.open([
      {
        src: 'img/halls/hall2/18.jpg',
        title: 'manual 1st title'
      },
      {
        src: 'img/halls/hall2/17-1.jpg',
        title: '2nd title'
      },
      {
        src: 'img/halls/hall2/16.jpg',
        title: '3rd title'
      },
      {
        src: 'img/halls/hall2/19.jpg',
        title: '4rd title'
      }
    ], {
        nextEffect : 'none',
        prevEffect : 'none',
        padding    : 0,
        helpers    : {
            title : {
                type: 'over'  
            },
            thumbs : {
                width  : 75,
                height : 50,
                // source : function( item ) {
                //     return item.href.replace('_b.jpg', '_s.jpg');
                // }
            }
        }
    });
    
    return false;
});

$(".open_fancybox3").click(function() {
    
  $.fancybox.open([
    {
      src: "img/halls/hall3/fb1.jpg",
      title: 'manual 1st title'
    },
    {
      src: "img/halls/hall3/fb2.jpg",
      title: '2nd title'
    },
    {
      src: "img/halls/hall3/fb3.jpg",
      title: '3rd title'
    },
    {
      src: "img/halls/hall3/fb4.jpg",
      title: '4rd title'
    }
  ], {
      nextEffect : 'none',
      prevEffect : 'none',
      padding    : 0,
      helpers    : {
          title : {
              type: 'over'  
          },
          thumbs : {
              width  : 75,
              height : 50,
              // source : function( item ) {
              //     return item.href.replace('_b.jpg', '_s.jpg');
              // }
          }
      }
  });
  
  return false;
});
    


  // $(".topBtn__link").fancybox({
  //     type: "iframe",
  //     width : 380, // or whatever
  //     height: 280
  // }).trigger("click");

  new WOW().init();
});


