function upDate(previewPic){
    console.log("Mouse over or focus triggered!");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

function unDo(){
    console.log("Mouse leave or blur triggered!");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

// Function to add tabindex and accessibility features
function enableKeyboardAccess() {
    console.log("Page loaded, enabling keyboard accessibility...");
    const images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");

        // Add focus and blur listeners
        images[i].addEventListener("focus", function () {
            upDate(this);
        });

        images[i].addEventListener("blur", function () {
            unDo();
        });
    }
}

// Add listener for onload
window.addEventListener("load", enableKeyboardAccess);
