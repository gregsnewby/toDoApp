// Check off specific to-do by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Remove specific to-do by clicking X
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// add new to-do
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-edit").click(function() {
	$("input[type='text']").fadeToggle();
});