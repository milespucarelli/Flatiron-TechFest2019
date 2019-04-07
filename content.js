const initText = "Welcome to Web Atlas. Hover over something to learn more about it."
const infoBox = document.createElement("div");
infoBox.innerHTML = initText;
infoBox.style.padding = "10px";
infoBox.style.fontSize = "18px";
infoBox.style.letterSpacing = "2px";
infoBox.style.zIndex = 9999999999999;
infoBox.style.backgroundColor = "white";
infoBox.style.margin = "15px";
infoBox.style.position = "fixed";
infoBox.style.display = "none";
document.body.prepend(infoBox);

function identifyElement(e, targetArray) {
  infoBox.style.left = e.clientX + "px";
  infoBox.style.top = e.clientY + "px";
  infoBox.style.display = "block";
  targetArray.find(function(t){
    if (t.includes("input") && !t.includes("button")) {
      console.log("this is the input and not the button")
      infoBox.innerHTML = "This is an input field, enter your information";
      e.target.style.border = "3px blue dotted";
    } else if (t.includes("nav")) {
      console.log("this is a nav")
      infoBox.innerHTML = "This is a navigation element. It helps you move around the website.";
      e.target.style.border = "3px purple dotted";
    } else if (t.includes("ads") || t.includes("promo")) {
      console.log("dont click on this!")
      infoBox.innerHTML = "This is an advertisement. You should ignore it."
      e.target.style.border = "3px red dotted";
    } else if (t.includes("button")) {
      console.log("this is a button")
      infoBox.innerHTML = "This is a button you can click."
      e.target.style.border = "3px green dotted";
    } else if (t === "a") {
      console.log("this is a link")
      infoBox.innerHTML = "This is a link. Clicking on this will redirect you."
      e.target.style.border = "3px yellow dotted";
    }
  })
}

function removeInfo() {
  setTimeout(function(){ infoBox.style.display = "none" }, 1000);
}


document.addEventListener("mouseover", function(e){
  console.log(e.clientX);
  let targetArray = [e.target.tagName.toLowerCase(), e.target.className, e.target.id]
  // console.log("this is what we will put into the identify function", targetArray)
  identifyElement(e, targetArray)
});


document.addEventListener("mouseout", function(e){
  infoBox.style.display = "none";
  e.target.style.border = "0px";
})
