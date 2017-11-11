

jQuery(document).ready(function(){
	
	jQuery(document).on("click", ".deleteMember", function(){
		var memberId = $(this).data("memberid"),
			hitURL = baseURL + "deleteMember",
			currentRow = $(this);
		
		var confirmation = confirm("Are you sure to delete this member ?");
		
		if(confirmation)
		{
			jQuery.ajax({
			type : "POST",
			dataType : "json",
			url : hitURL,
			data : { memberId : memberId } 
			}).done(function(data){
				console.log(data);
				currentRow.parents('tr').remove();
				if(data.status = true) { alert("Member successfully deleted"); }
				else if(data.status = false) { alert("Member deletion failed"); }
				else { alert("Access denied..!"); }
			});
		}
	});
	
	
	jQuery(document).on("click", ".searchList", function(){
		
	});
	
});
