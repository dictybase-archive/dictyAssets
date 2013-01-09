
$(document).ready(function() {
	
	$('.btn-group').button(); 

	bootstrap_alert = function() {}
	bootstrap_alert.warning = function(message) {
		$('#alert_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
	}
	
	var selected = null;
	$(".btn-group > button.btn").on("click", function(){
		    selected = this.innerHTML;
			bootstrap_alert.warning(selected)
	});

});
