$(document).ready(function(){
	var count = 0;
	$("#add").on('click', function(event){
	  //$("input#item").on('keypress', function(e){
		var itemAdded = $("input#item").val();
		var searchInput = $('input#item');
		// The focus method will keep the cursor in the input box
		searchInput.focus();
		//if (e.keyCode == '13'){
		  $("input#item").val("");
		  $('<li>'+itemAdded+'</li>').append(" <span class='check'>&#10004;</span>"+" <span class='delete'>&#x2716;</span>").appendTo("ul#list").hide().slideDown();
		  count++;
		
		  $(".quant").text(count);
		
		  

		//}

		
		
	});


	$("input#item").on('keypress', function(e){
			if (e.keyCode == '13'){
				$('#add').click();
			}
		});


	 $('ul').on('click','.check', function(){			
	   $(this).closest("li").toggleClass('strike');//For "Class" methods "." is not used for the class name. In this case ".strike"
			//the above code is a better method of striking through the list items. As opposed
			//to using the wrap method, the above will remove all strikes once deleted.
		});

	 $('ul#list').on('click','.delete', function(){
			count--
			$(this).closest("li").fadeOut(300, function() { $(this).remove().slideUp() });
			if(count > 0){
				$(".quant").text(count);
			}
			else{
				$(".quant").text(0);
			}
		});

		
		$("#cross").off('click').on('click', function(){
			$('ul#list li').toggleClass('strike');
		});


		$("#remove").off('click').on('click', function(){
			$("#list").find("li").fadeOut(300, function() { $(this).remove().slideUp() });
			count = 0;
			$(".quant").text(count);
	});
});

