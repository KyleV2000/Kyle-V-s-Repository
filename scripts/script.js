/* 
	Name: Kyle Viveiros
	File name: script.js
	Date: 11/12/2020
 */
 
 //Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}