
$.fn.customUpload = function(options){
	var opt = $.extend({
		actualButton: '.custom-upload-uploader',
		visibleButton: '.custom-upload-trigger',
		onChangeCallback: function(files){}
	}, options);
	$(this).each(function(){
		$(this).find(opt.actualButton).hide();
		$(this).on('change', opt.actualButton, function(event){
			if(window.FileList){
				opt.onChangeCallback(event.target.files);
			}
		});
		var original = $(this).find(opt.actualButton);
		$(this).on('click',opt.visibleButton,function(){
			original.trigger('click');
		});
	});
}