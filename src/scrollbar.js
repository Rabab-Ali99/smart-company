

$('.reports-container').slick({
    slidesToShow: 2,
    slidesToScroll:1,
    centerMode: false,
    centerPadding: '10px',
    arrows: true,
    prevArrow: $('.btn.prev'),
    nextArrow: $('.btn.next'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
        ,
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
      ]
  });