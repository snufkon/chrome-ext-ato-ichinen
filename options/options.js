$(document).ready(function() {
    $(".alert").hide();
    setInputValidation();
    restoreOptions();

    function restoreOptions() {
	var num = localStorage['periodNum'] ? localStorage['periodNum'] : '1';
	$("#periodNum").val(num);

	var name = localStorage['periodName'] ? localStorage['periodName'] : '年';
	$("#period").val(name);
    }

    function saveOptions() {
	localStorage['periodNum'] = $("#periodNum").val();
	localStorage['periodName'] = $("#period").val();
    }

    function setInputValidation() {
	$.extend(jQuery.validator.messages, {
	    required: "必須項目です",
            range: jQuery.format(" {0} から {1} までの値を入力してください")
	});
	$('#setting-form').validate({
	    rules: {
		periodNum: {
		    required: true,
		    range: [1, 9999]
		}
	    },
	    highlight: function(element) {
		$(element).closest('.control-group').removeClass('success');
		$(element).closest('.control-group').addClass('error');
		$(".alert").hide();
	    },
	    unhighlight: function(element) {
		$(element).closest('.control-group').removeClass('error');
		$(element).closest('.control-group').addClass('success');
	    },
	    success: function(label) {
		label.addClass('valid').text("OK");
	    },
	    submitHandler: function(form) {
		$(".alert").show();
		saveOptions();
		chrome.extension.getBackgroundPage().iconManager.setPeriodNumBadge();
		if (chrome.extension.getBackgroundPage().statusManager.getStatus()) {
		    chrome.extension.getBackgroundPage().iconManager.drawOnIcon();
		} else {
		    chrome.extension.getBackgroundPage().iconManager.drawOffIcon();
		}
	    }
	});
    }
});