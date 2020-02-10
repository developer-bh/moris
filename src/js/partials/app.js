$( document ).ready(function() {

    // Home banner slider

        var activeClass = 'slick-active',
            ariaAttribute = 'aria-hidden';
        $( '.slider-wrapper' )
            .on( 'init', function() {
                $( '.custom-dots--banner li:first-of-type' ).addClass( activeClass ).attr( ariaAttribute, false );
            } )
            .on( 'afterChange', function( event, slick, currentSlide ) {
                var $dots = $( '.custom-dots--banner' );
                $( 'li', $dots ).removeClass( activeClass ).attr( ariaAttribute, true );
                $dots.each( function() {
                    $( 'li', $( this ) ).eq( currentSlide ).addClass( activeClass ).attr( ariaAttribute, false );
                } );
            } );

        $('.slider-wrapper').on('init', function(event, slick){
                $('.current-count--banner').append('1');
            });
            $('.slider-wrapper').slick({
                draggable: false,
                dots: true,
                arrows: false,
                appendDots: $('.custom-dots--banner'),
            });
            $('.slider-wrapper')
                .on('afterChange', function(event, slick, currentSlide, nextSlide){
                    // finally let's do this after changing slides
                    $('.current-count--banner').html(currentSlide+1);
            });

        // Navigation

        $('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-wrapper',
            dots: false,
            arrows: false,
        });

        // Custom arrows

        jQuery('.slider-nav .slick-left').on('click', function(){
            jQuery('.slider-nav').slick("slickPrev");
        });
        jQuery('.slider-nav .slick-right').on('click', function(){
            jQuery('.slider-nav').slick("slickNext");
        });

    // Achievement slider

        var activeClass = 'slick-active',
            ariaAttribute = 'aria-hidden';
        $( '.achievement-slider' )
            .on( 'init', function() {
                $( '.custom-dots li:first-of-type' ).addClass( activeClass ).attr( ariaAttribute, false );
            } )
            .on( 'afterChange', function( event, slick, currentSlide ) {
                var $dots = $( '.custom-dots' );
                $( 'li', $dots ).removeClass( activeClass ).attr( ariaAttribute, true );
                $dots.each( function() {
                    $( 'li', $( this ) ).eq( currentSlide ).addClass( activeClass ).attr( ariaAttribute, false );
                } );
            } );

        $('.achievement-slider').on('init', function(event, slick){
            $('.current-count--ach').append('1');
        });
        $('.achievement-slider').slick({
            draggable: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            speed: 1000,
            appendDots: $('.custom-dots'),
        });
        $('.achievement-slider')
            .on('afterChange', function(event, slick, currentSlide, nextSlide){
                // finally let's do this after changing slides
                $('.current-count--ach').html(currentSlide+1);
            });

        // Custom arrows

        jQuery('.achievement-slider .slick-left').on('click', function(){
            jQuery('.achievement-slider').slick("slickPrev");
        });
        jQuery('.achievement-slider .slick-right').on('click', function(){
            jQuery('.achievement-slider').slick("slickNext");
        });

        // Total slides count

        var achievementTotalSlides = jQuery('.achievement-slider .slick-slide:not(.slick-cloned)').length;

        $('.total_count').append(achievementTotalSlides);​

        // Current slide number

    // Clients slider

        $('.clients-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            cssEase: 'ease',
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1000,
            zIndex: 1000
        });

    // Practices

        $('.practices-nav li:first-of-type a').addClass('active');
        $('.practices-wrapper:first-of-type').show();

        $('.practices-nav a').on( "click", function(e) {
            e.preventDefault();
            $('.practices-nav a').removeClass('active');
            $(this).addClass('active');
            var id = $(this).attr('value');
            $(".practices-wrapper").each(function(){
                $(this).hide();
                if($(this).attr('data-filter') == id) {
                    $(this).show();
                }
            });
        });

    // Team tabs

        $('#filters a').on('click', function() {
            $('#filters a').removeClass('active');
            $(this).addClass('active');
            var optionSelected = $(this).attr("value");
            $('.team-item').hide();
            $('.team-item[data-filter*="' + optionSelected + '"]').show();
        }).change();

        $('#filters a[value="all"]').on('click', function () {
            $('.team-item').show();
        });

});


