
// 3 Variables and User Interaction

function openingQuestions() {
    let person = prompt("Hello, What is your name?", "Please enter your name here.");
    let reason = prompt("What brought you here today?", "I came to...");
    let compType = prompt("What device are you using to view this site?", "Please enter your device here.");
    
    let welcomeMessage = `Welcome, ${person}! I'm pleased you've stopped by to ${reason} . I hope you enjoy this site on your ${compType}`;

    document.getElementById("welcome-modal-message").innerHTML = welcomeMessage;

    displayWelcomeMsg();

};

// Welcome Modal

function displayWelcomeMsg() {
    let welcomeModal = document.getElementById("welcome-modal-1");
    welcomeModal.style.display = "block";

    let span = document.getElementsByClassName("close")[0];

    span.onclick = closeModal() {
        welcomeModal.style.display = "none";
    };

    window.onclick = exitModal(event) {
        if (event.target == welcomeModal) {
            welcomeModal.style.display = "none";
        }
    } 
};



(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 70)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict