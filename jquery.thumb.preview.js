/**
 *  jQuery Thumb Preview Plugin
 *
 *  (c) 2013 Carlos Souza
 *  MIT licensed
 *
 *  Requires jQuery, not included in this file.
 *
 *
 *  Example:
 *
 *   Setting up the thumbnails:
 *
 *   <img src="/path/to/default_image.jpg"
 *      data-images='["/path/to/thumb_1.jpg", "/path/to/thumb_2.jpg", "/path/to/thumb_3.jpg"]' />
 *
 *   Activating preview:
 *
 *   $('.list img').thumbPreview();
 *
 */
(function($){

  var changeImage = function(img, allImages, positionX, sectionWidth){
    var imagesCount = allImages.length;
    var setDefault = true;

    for(var i=imagesCount-1; i>0; i--){
      if(positionX > (sectionWidth*i)){
        img.attr('src', allImages[i]);
        setDefault = false;
        break;
      }
    }

    if(setDefault){
      img.attr('src', allImages[0]);
    }
  }

  var preloadImages = function(imageElements){
    imageElements.each(function(i, img){
      $.each($(img).data('images'), function(i, imgSrc){
        $('<img/>').attr('src', imgSrc);
      })
    });
  }

  $.fn.thumbPreview = function(options){
    var options = options || {};

    if(options.preload){
      preloadImages(this);
    }

    this.on('mousemove', function(e){
      var target = $(e.target);
      var allImages = target.data('images');
      var sectionWidth = parseInt(target.css('width'), 10) / allImages.length;
      var positionX = e.clientX - $(this).offset().left;
      changeImage(target, allImages, positionX, sectionWidth)
    });

    return this;
  }
}(jQuery));

