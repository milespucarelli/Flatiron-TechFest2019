const initText = "Welcome to Web Atlas. Hover over something to learn more about it."
const infoBox = document.createElement("div");
infoBox.innerHTML = initText;
infoBox.style.margins = "5px";
infoBox.style.padding = "10px";
infoBox.style.fontSize = "18px";
infoBox.style.letterSpacing = "2px";
document.body.insertBefore(infoBox, document.body.firstChild);


document.addEventListener("mouseover", function(e){
  switch(e.target.tagName.toLowerCase()){
    case "input":
      e.target.style.border = "20px red solid";
      e.target.classList.add("tooltip");
      infoBox.innerHTML = "This is an input field, enter your information";
      infoBox.style.display = "block";
    case "nav":

    default:
        return null;
  }
});


document.addEventListener("mouseout", function(e){
  switch(e.target.tagName.toLowerCase()){
    case "input":
        e.target.style.border = "0px";
        e.target.classList.remove("tooltip");
        infoBox.innerHTML = initText
    default:
        return null;
  }
})
