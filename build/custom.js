var fewSeconds = 3; $(".comment-form .submit").click(function(){ var btn = $(this); btn.prop("disabled", true); setTimeout(function(){ btn.prop("disabled", false); }, fewSeconds*1000); });
