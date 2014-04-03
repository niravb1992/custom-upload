prettyupload
============

A jquery plugin to customize the HTML file upload button

Setup
============
```
<!-- Include jQuery -->
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<!-- Include prettyupload -->
<script src="prettyupload.js"></script>
```

Usage
============
```
<script type="text/javascript">
	$(function(){
		$('#original').prettyupload('#yourCustomButton', function(files){
			// A callback to determine what happens when files get selected.
			// files is a list of files that have been selected.
		});
	});
</script>
```
