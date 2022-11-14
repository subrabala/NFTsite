var marker = document.querySelector('#marker');
var items=document.querySelectorAll('.collapse li');

const button_out=document.getElementById("btn_out");
var toHide=document.getElementsByClassName("hidden");
var frame=document.getElementsByClassName("frame");
function indicator(e){
marker.style.left = e.offsetLeft+"px";
marker.style.width = e.offsetWidth+"px";
}

items.forEach((item)=>{
item.addEventListener('click',(e)=>{
    indicator(e.target);
})
})

const element = document.getElementById("upload_file");
element.addEventListener("click", function() {
	console.log(toHide, frame);
    button_out.innerHTML = "Generate NFT";
	toHide[0].classList.add('hide');
	toHide[1].classList.add('hide');
	toHide[2].classList.add('hide');
	frame[0].classList.add('show');

});

const image_input = document.querySelector("#upload_file");

image_input.addEventListener("click", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
