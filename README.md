About
============

custom-upload is a very simple [jQuery](https://jquery.com/) plugin to customize the HTML file upload button. With prettyupload, you can change the way the file upload button looks and add your own functionality for when files are selected.

Setup
============
```
<!-- Include jQuery -->
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<!-- Include prettyupload -->
<script src="prettyupload.js"></script>
```

Usage Example
=============

1. In your html, create a div having two elements:

   ```
   <div id="myuploader">
    <input type="file" class="prettyupload-uploader"/>
    <input type="button" class="prettyupload-trigger" value="Select files" />
   </div>
   ```

2. In your javascript, in jquery's dom-ready function, add the following code:

   ```
    $(function(){
      $('#myuploader').prettyupload();
    });
   ```

**With the above code, when you click 'Select files', a file chooser will open, but nothing will happen when you
select files. You can change that by adding the onChangeCallback option, as shown in the Options section below.**

Options
========

There are several options you can pass to prettyupload:

```
$(function(){
	$('#myuploader').prettyupload({
	
		/* 
		This is the selector for the <input type="file"/> element 
		inside your #myuploader element. By default, this is assumed 
		to be '.prettyupload-uploader'. 
		*/
		actualButton: '#uploader',
		
		/* 
		This is the selector for the element inside your #myuploader 
		element that is clicked to open the file chooser. By default,
		this is assumed to be '.prettyupload-trigger'.
		*/
		visibleButton: '#trigger',
		
		/*
		This is the function that will be called when files have been chosen. 
		The files parameter is an HTML5 FileList object, consisting of all 
		the files you've selected.
		*/
		onChangeCallback: function(files){
			// code
		} 
		
	});
});
```

