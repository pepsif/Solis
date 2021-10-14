let themeButton = document.querySelector('.header-moon');
let link = document.getElementsByTagName("link")[2];

let themeCounter = 0;

console.log(link)
console.log(link.href)
console.log(themeCounter)

themeButton.onclick = function () {
themeCounter++;

themeCounter = themeCounter % 2;
console.log(themeCounter)

if (themeCounter === 0) {
    link.href = "";
    

}
if (themeCounter === 1) {
   link.href = "styles/darktheme.css";


}


}
