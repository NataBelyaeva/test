button=document.getElementById('buttonLoad');

$(document).ready(function() { 

	// Global variable 
	var element = $("#html-content-holder"); 

	// Global variable 
	var getCanvas; 


	button.onclick=function(){
		html2canvas(element, { 
			onrendered: function(canvas) { 
				$("#previewImage").append(canvas); 
				getCanvas = canvas; 
			} 
		}); 
		document.getElementById("buttonLoad").disabled = true; 
	}

	$("#btn-Convert-Html2Image").on('click', function() { 
		var imgageData = 
			getCanvas.toDataURL("image/png"); 

		var newData = imgageData.replace( 
		/^data:image\/png/, "data:application/octet-stream"); 
	
		$("#btn-Convert-Html2Image").attr( 
		"download", "Mem.png").attr( 
		"href", newData); 
	}); 
});

