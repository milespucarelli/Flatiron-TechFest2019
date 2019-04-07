const initText = "Welcome to Web Atlas. Hover over something to learn more about it."
const infoBox = document.createElement("div");
infoBox.innerHTML = initText;
infoBox.style.padding = "10px";
infoBox.style.fontSize = "18px";
infoBox.style.letterSpacing = "2px";
infoBox.style.zIndex = 9999999999999;
infoBox.style.backgroundColor = "white";
infoBox.style.margin = "15px";
infoBox.style.position = "absolute";
infoBox.style.display = "none";
document.body.prepend(infoBox);

function identifyElement(target, targetArray) {
  infoBox.style.display = "";
  targetArray.find(function(t){
    if (t.includes("input") && !t.includes("button")) {
      infoBox.innerHTML = "This is an input field, enter your information";
      target.style.border = "3px blue dotted";
    } else if (t.includes("nav")) {
      infoBox.innerHTML = "This is a navigation element. It helps you move around the website.";
      target.style.border = "3px purple dotted";
    } else if (t.includes("ads") || t.includes("promo")) {
      infoBox.innerHTML = "This is an advertisement. You should ignore it."
      target.style.border = "3px red dotted";
    } else if (t.includes("button")) {
      infoBox.innerHTML = "This is a button you can click."
      target.style.border = "3px green dotted";
    } else if (t === "a") {
      infoBox.innerHTML = "This is a link. Clicking on this will redirect you."
      target.style.border = "3px yellow dotted";
    }
  })
}


document.addEventListener("mouseover", function(e){
  let targetArray = [e.target.tagName.toLowerCase(), e.target.className, e.target.id]
  // console.log("this is what we will put into the identify function", targetArray)
  identifyElement(e.target, targetArray)
});


document.addEventListener("mouseout", function(e){
  infoBox.style.display = "none";
  e.target.style.border = "0px";
})
