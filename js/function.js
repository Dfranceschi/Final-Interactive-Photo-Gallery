/*Name this external file gallery.js*/

function upDate(previewPic){
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
  document.getElementById('image').style.backgroundImage = "url('')";
document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	var flowers = ["Lillies","Tulips","Orchids","Sunflowers"];
  function loadFlowers(){
    document.getElementById("flowers").innerHTML = flowers;
}
function myFunction(){
  var flower = prompt("What is your favorite flowers! ");
  flowers[flowers.length] = flower;
  document.getElementById("flowers").innerHTML = flowers;
}

function message(msg){
  document.getElementById("output").innerHTML = msg + "event";  
}
function pickImages(){
  options = ["picsresized2/yellowcactusflower4.jpeg", "picsresized2/redleavesinabowl3.jpeg", "picsresized2/yellowlemon5.jpeg", "picsresized2/whitelily.jpg", "picsresized2/pinkflowers2.jpeg", "picsresized2/puertoricanflags6.jpeg"];
  randomImg = "images/" + options[Math.random() * options.length)];
  img = document.querySelector("#header_img");
  img.setAttribute("src", randomImg);
  img.setAttribute("alt","");
}
