$(document).ready(function(){

  $(".pbs-video img").click(function() {
    $('.pbs-video img').hide();
    $('.pbs-video .the-pbs-video').show();

    $('.pbs-video .the-pbs-video video').get(0).play();
  });

  $(".pbs-video .the-pbs-video i").click(function() {
    $('.pbs-video .the-pbs-video video').get(0).pause();
    $('.pbs-video .the-pbs-video video').get(0).currentTime = 0;

    $('.pbs-video .the-pbs-video').hide();
    $('.pbs-video img').show();
  });

  top_image_size();
  resize_blocks();

  function top_image_size() {
    if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {

    } else {
      var the_size = $(window).height() - 14;
          the_size = the_size+"px";

      $('.project .top-image').css( "height", the_size );
    }

  }

  function resize_blocks() {
    if (window.location.pathname == "/viral-memes.html") {

    } else {
      $('.the-intro .show-it').css({
        // "width": $('.the-intro  .say-it').width()+"px",
        "height": $('.the-intro  .say-it').height()+"px"
      });
    }

    // the-backend
    $('.the-backend .make-grow').css({
      "height": $('.the-backend .grow-from').height()+"px"
    });
  }

  $(window).resize(function() {
    top_image_size();
    resize_blocks();
  });


  $("#slides").slidesjs({
    width: 626,
    height: 535,
    navigation: {
      active: false
    },
    pagination: {
      active: true
    },
    play: {
      active: true,
      effect: "slide",
      interval: 7000,
      auto: true,
      swap: false,
      pauseOnHover: true,
      restartDelay: 2500
    },
    effect: {
      slide: {
        speed: 1300
      }
    }
  });

});