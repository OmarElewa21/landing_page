/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function style_active_link(element){
    // Style the active link to make distinguished
    Object.entries(document.getElementsByClassName("navbar_link")).map(item => {
        item[1].className = "navbar_link";
        item[1].parentElement.className = "navbar_item";
      });
    
    element.className = "navbar_link current_nav_anchor";
    element.parentElement.className = "navbar_item current_nav_link";
}


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.getElementById("navbar__list").innerHTML = 
        `<li class="navbar_item">
        <a href="#section1" class="navbar_link" onclick="style_active_link(this)">Section 1</a>
        </li>
        <li class="navbar_item">
        <a href="#section2" class="navbar_link" onclick="style_active_link(this)">Section 2</a>
        </li>
        <li class="navbar_item">
        <a href="#section3" class="navbar_link" onclick="style_active_link(this)">Section 3</a>
        </li>
        <li class="navbar_item">
        <a href="#section4" class="navbar_link" onclick="style_active_link(this)">Section 4</a>
        </li>
        `;



// Set sections as active
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

document.addEventListener('scroll', function () {
  if(isInViewport(section1)){
    let doc = document.getElementsByClassName('landing__container')[0];
    doc.style.fontSize   = "large";

    document.getElementsByClassName('landing__container')[1].style.fontSize = "medium";
    document.getElementsByClassName('landing__container')[2].style.fontSize = "medium";
    document.getElementsByClassName('landing__container')[3].style.fontSize = "medium";
  }
  else if(isInViewport(section2)){
    let doc = document.getElementsByClassName('landing__container')[1];
    doc.style.fontSize   = "large";

    document.getElementsByClassName('landing__container')[0].style.fontSize = "medium";
    document.getElementsByClassName('landing__container')[2].style.fontSize = "medium";
    document.getElementsByClassName('landing__container')[3].style.fontSize = "medium";
  }
  else if(isInViewport(section3)){
    let doc = document.getElementsByClassName('landing__container')[2];
    doc.style.fontSize   = "large";

    document.getElementsByClassName('landing__container')[0].style.fontSize = "medium";
    document.getElementsByClassName('landing__container')[1].style.fontSize = "medium";
    document.getElementsByClassName('landing__container')[3].style.fontSize = "medium";
  }
  else if(isInViewport(section4)){
    let doc = document.getElementsByClassName('landing__container')[3];
    doc.style.fontSize   = "large";

    document.getElementsByClassName('landing__container')[0].style.fontSize = "medium";
    document.getElementsByClassName('landing__container')[1].style.fontSize = "medium";
    document.getElementsByClassName('landing__container')[2].style.fontSize = "medium";
  }
});

