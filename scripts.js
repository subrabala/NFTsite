var marker = document.querySelector('#marker');
var items=document.querySelectorAll('.collapse li');

function indicator(e){
marker.style.left = e.offsetLeft+"px";
marker.style.width = e.offsetWidth+"px";
}

items.forEach((item)=>{
item.addEventListener('click',(e)=>{
    indicator(e.target);
})
})


// const element = document.getElementById("upload_file");
// element.addEventListener("click", function() {
//     element.innerHTML = "Generate NFT";
// });

var btnUpload = $("#upload_file"),
		btnOuter = $(".button_outer");
	btnUpload.on("change", function(e){
		var ext = btnUpload.val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			$(".error_msg").text("Not an Image...");
		} else {
			$(".error_msg").text("");
			btnOuter.addClass("file_uploading");
			setTimeout(function(){
				btnOuter.addClass("file_uploaded");
			},3000);
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			setTimeout(function(){
				$("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
			},3500);
		}
	});
	$(".file_remove").on("click", function(e){
		$("#uploaded_view").removeClass("show");
		$("#uploaded_view").find("img").remove();
		btnOuter.removeClass("file_uploading");
		btnOuter.removeClass("file_uploaded");
	});