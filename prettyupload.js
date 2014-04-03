
$.fn.prettyupload = function(uploadTrigger, onChangeCallback){
	$(this).each(function(){
		$(this).hide();
		$(this).on('change',function(event){
			onChangeCallback(event.target.files);
		});
		var original = $(this);
		$(uploadTrigger).on('click', function(){
			original.trigger('click');
		});
	});
}