$(document).ready(function(){

  $(".view-projects").click(function() {
    // disable the scroll
    $.fn.fullpage.setAllowScrolling(false);

    var the_section = $(this).data("section");
    var to_url = $(this).data("url");

    // make image bigger
    $(the_section+" .content").animate({
      'width': '98%',
      'height': '96%',
      'margin-top': '0px'
    }, 600);

    // change name color
    $('.header-menu .name').animate({
      'color': '#FFFFFF'
    }, 550);

    $('.menu .bar').hide();

    // $('.esto-dale').show();
    setTimeout(function() {
      window.location.href = "/"+to_url;
    }, 1000);

  });

  /* ---- particles.js config ---- */
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area":1000
        }
      },
      "color": {
        "value": ["#ccc"]
      },

      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ccc"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ccc",
        "opacity": 0.4,
        "width": 1
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // ----------------------
  particlesJS("particles-js-alt", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area":1000
        }
      },
      "color": {
        "value": ["#ccc"]
      },

      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ccc"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ccc",
        "opacity": 0.4,
        "width": 1
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

});