$(document).ready(function(){
	
	$('#parallax').stellar({
		horizontalOffset: 50,
  		verticalOffset: 0
	});


	$('.image-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
            return '';
            }
        }
    });

    $("#mobile-gallery").owlCarousel({
        navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          center: true,
          navigationText: ['<i class="fa fa-chevron-circle-left"></i>', '<i class="fa fa-chevron-circle-right"></i>']
    });


    $('#contact-form').on('submit', function(e){
      e.preventDefault();

      var postdata = $('#contact-form').serialize();
      $.ajax({
            type: 'POST',
            url: 'subscribe.php',
            data: postdata,
            error: function(jqXHR, textStatus, errorMessage) {
              $('#form-message').removeClass('hidden');
              $('#form-message').addClass('error');
              $('#form-message').html('Something went wrong. Please try again!');
               // console.log(errorMessage); 
            },
            success: function(data) {
              console.log(data);
              $('#form-message').removeClass('hidden');
              $('#form-message').addClass('success');
              $('#form-message').html('Thank you! We\'ll get back to you shortly');
            }
        });
    });

});