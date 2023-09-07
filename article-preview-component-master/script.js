// const shareButton = document.querySelector(".share-button");
// const shareContainer = document.querySelector(".share-component-container");
// const mainBody = document.querySelector(".main-container");
// // let clicked;

// // Add a click event listener to the share button
// shareButton.addEventListener("click", function () {
//   // if (clicked) {
//     shareContainer.classList.toggle("show-share-container");
//   // } 
// });

// // mainBody.addEventListener(("click"),function(){
// //   if (clicked) {
// //     shareContainer.classList.toggle("show-share-container");
// //   }
// // });

const shareButton = document.querySelector(".share-button");
const shareContainer = document.querySelector(".share-component-container");
const mainBody = document.querySelector(".main-container");

// Add a click event listener to the share button
shareButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent propagation to the document click handler
  shareContainer.classList.toggle("show-share-container");
});

// Add a click event listener to the document body
document.body.addEventListener("click", function (event) {
  if (shareContainer.classList.contains("show-share-container")) {
    // Check if the share container is open
    const isClickInsideShareContainer = shareContainer.contains(event.target);
    if (!isClickInsideShareContainer) {
      // If the click is outside of the share container, close it
      shareContainer.classList.remove("show-share-container");
    }
  }
});

// Prevent clicks inside the share container from closing it
shareContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

