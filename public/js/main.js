      $(function() {
        $('#nav li a').click(function() {
          $('#nav li').removeClass();
          $($(this).attr('href')).addClass('active');
        });
      });

      // loader
      var loader = function () {
        setTimeout(function () {
          if ($("#loader").length > 0) {
            $("#loader").removeClass("show");
          }
        }, 1);
      };
      loader();
       
       // Get the 'to top' button element by ID
       var toTopButton = document.getElementById("to-top-button");

       // Check if the button exists
       if (toTopButton) {

           // On scroll event, toggle button visibility based on scroll position
           window.onscroll = function () {
               if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                   toTopButton.classList.remove("hidden");
               } else {
                   toTopButton.classList.add("hidden");
               }
           };

           // Function to scroll to the top of the page smoothly
           window.goToTop = function () {
               window.scrollTo({
                   top: 0,
                   behavior: 'smooth'
               });
           };
       }

       $('.responsive').slick({
        infinite: true,
        speed: 300,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    arrow: false,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    arrow: false,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrow: false,
                    centerPadding: '0px',
                    centerMode: true,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $('.center').slick({
        centerMode: true,
        centerPadding : '60px',
        arrow : true,
        autoplay: true,
        autoplaySpeed: 800,
        speed: 1000,
        infinite: true,
        touchMove: false,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              arrows: false,
              autoplay: true,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              touchMove : true,
              autoplay: true,
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
      });

      $('.single-item').slick();

