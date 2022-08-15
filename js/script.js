
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

let fig = document.querySelectorAll('figure');

fig.forEach(object=>{
    object.addEventListener('click',(event)=>{
        if(event.target.tagName == 'IMG'){
            myFunction(event.target);
        }
    })
})