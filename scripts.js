var marker = document.querySelector('#marker');
var items=document.querySelectorAll('.collapse li');
var toHide=document.getElementsByClassName(".hidden");
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
element.addEventListener("onclick", function() {
    element.innerHTML = "Generate NFT";
	toHide.classList.add('hide');
	frame.classList.add('show');

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
