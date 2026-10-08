/*Name this external file gallery.js*/

function upDate(previewPic){
  console.log("Mouse over the image");
const imageDiv = document.getElementById("image");imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
imageDiv.textContent = previewPic.alt;
  
}
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  
	

	function unDo(){
    console.log("Mouse out of the image");
  document.getElementById('image').style.backgroundImage = "url('')";
document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	var flowers = [""];

function loadFlowers() {
  console.log("Loading flowers");
  document.getElementById("flowers").textContent = flowers.join(", ");
}
function myFunction(){
  console.log("Button clicked");
  var flower = prompt("What is your favorite flowers! ");
  flowers[flowers.length] = flower;
  document.getElementById("flowers").innerHTML = flowers;
}


function setImages() {
  const options = [
    "picsresized2/cactusflowers1.JPG",
    "picsresized2/pinkflowers2.jpeg",
    "picsresized2/puertoricanflags6.jpeg",
    "picsresized2/redleavesinabowl3.jpeg",
    "picsresized2/whitelily.jpg",
    "picsresized2/yellowcactusflower4.jpeg",
    "picsresized2/yellowlemon5.jpeg"
  ];

  const currentImages = document.querySelectorAll(".flex img");
  currentImages.forEach((img) => {
    console.log("Image" + isSecureContext)
    const randomImg = options[Math.floor(Math.random() * options.length)];
    img.src = randomImg;
    img.setAttribute("tabindex", "0");
  });
}
const photo = document.getElementById("photo");
photo.addEventListener("mouseenter", () => {
  console.log("Mouse entered the photo");
    photo.style.filter = "blur(5px)";
  });
 photo.addEventListener("mouseleave", () => {
  console.log("Mouse left the photo");
    photo.style.filter = "blur(0)";
  });