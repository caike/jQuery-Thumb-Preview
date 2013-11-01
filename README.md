#jQuery Thumb Preview


This is a jQuery plugin that provides a thumbnail preview effect controlled by mousemove events.


##Installation

Just download the file and make sure you are using jQuery.

If you are using Rails and the Asset Pipeline, copy the [thumbPreview.js](https://raw.github.com/caike/jQuery-Thumb-Preview/master/thumbPreview.js) file to the **vendor/assets/javascript** directory and reference it from your JavaScript Manifest file, which will typically be **app/assets/javascripts/application.js**

```javascript
//= require thumbPreview
```

##Examples

To activate the plugin just call the `.thumbPreview()` function on the image element: 

`$('.list img').thumbPreview();`

The plugin will look for thumbnails on the `data-images` data attribute of that element.

```
<img src="/path/to/default_image.jpg"
  data-images='["/path/to/thumb_1.jpg", "/path/to/thumb_2.jpg", "/path/to/thumb_3.jpg"]' />
```

