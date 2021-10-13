let themeButton = document.querySelector('.header-moon');
let link = document.getElementsByTagName("link")[2];

let themeCounter = 0;

console.log(link)
console.log(link.href)

themeButton.onclick = function () {
themeCounter++;
if (themeCounter === 2) {themeCounter = 0}

if (themeCounter === 1) {
   link.href = "styles/darktheme.css";
}
link.href = '';
}
