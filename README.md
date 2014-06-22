#jQuery Thumb Preview

This is a jQuery plugin that provides a thumbnail preview effect controlled by mousemove events.

![](https://raw.githubusercontent.com/caike/jQuery-Thumb-Preview/master/docs/preview.gif)

##Installation

Just download the file and make sure you are using jQuery.

If you are using Rails and the Asset Pipeline, copy the [jquery.thumb.preview.js](https://raw.github.com/caike/jQuery-Thumb-Preview/master/jquery.thumb.preview.js) file to the **vendor/assets/javascript** directory and reference it from your JavaScript Manifest file, typically found under **app/assets/javascripts/application.js**

```javascript
//= require jquery.thumb.preview
```

##Examples

To activate the plugin just call the `.thumbPreview()` function on the image element:

```javascript
$('.list img').thumbPreview();
```

The plugin will look for thumbnails on the `data-images` data attribute of that element.

```
<img src="/path/to/default_image.jpg"
  data-images='["/path/to/thumb_1.jpg", "/path/to/thumb_2.jpg", "/path/to/thumb_3.jpg"]' />
```

##Configuration

If you want to preload all images, use the `{preload: true}` option, like so:

```javascript
$('.list img').thumbPreview({preload: true});
```

