$(document).ready(function(){
	var count = 0;
	var arr = [];
	$("#add").on('click', function(event){
	  //$("input#item").on('keypress', function(e){
		var itemAdded = $("input#item").val();
		var searchInput = $('input#item');
		// The focus method will keep the cursor in the input box
		searchInput.focus();
		//if (e.keyCode == '13'){
		  $("input#item").val("");
		  $('<li>'+itemAdded+'</li>').append(" <span class='check'>&#10004;</span>"+" <span class='delete'>&#x2716;</span>").appendTo("ul#list").hide().slideDown();
		  arr.push(count);
		  count++;
		
		  $(".quant").text(count);
		
		  $('.check').off('click').on('click', function(){
			
			$(this).closest("li").html("<strike>"+$(this).closest("li").html()+"</strike>");
			//the above code is a better method of striking through the list items. As opposed
			//to using the wrap method, the above will remove all strikes once deleted.
		});

		//}

		$('.delete').off('click').on('click', function(){
			arr.pop();
			$(this).closest("li").fadeOut(300, function() { $(this).remove().slideUp() });
			if(arr.length > 0){
				$(".quant").text(arr.length);
			}
			else{
				$(".quant").text(0);
			}
		});
		
		$("#cross").off('click').on('click', function(){
			
			$("#list").find("li").each(function(){
				$(this).html("<strike>"+$(this).html()+"</strike>");
			});

		});


		$("#remove").off('click').on('click', function(){
			$("#list").find("li").fadeOut(300, function() { $(this).remove().slideUp() });
			count = 0;
			$(".quant").text(count);

		});
		
	});
	event.preventDefault();
});

