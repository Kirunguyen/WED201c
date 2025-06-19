/*Name this external file gallery.js*/

function upDate(previewPic){
    // Check if event is triggering and log info
    console.log("Mouseover triggered!");
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    // Update the background image and text content of the #image div
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

function unDo(){
    // Reset the background image and text content of the #image div
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}
