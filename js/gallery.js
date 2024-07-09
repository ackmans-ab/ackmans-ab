const selectedContainer =
  document.getElementsByClassName("selected-container")[0];

const selectedImage = document.getElementsByClassName("selected-image")[0];
const closeButton = document.getElementById("close-image");

const imageList = document.getElementsByClassName("gallery-item");

for (let i = 0; i < imageList.length; i++) {
  imageList[i].addEventListener("click", () => {
    selectedImage.src = `img/galleri/galleri-${i + 1}.jpg`;
    selectedContainer.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
}

function closeButtonClicked() {
  selectedContainer.style.display = "none";
  document.body.style.overflow = "auto";
}
