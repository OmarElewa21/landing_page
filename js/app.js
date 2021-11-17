/**
 * Global Variables
 */

const sections = [].slice.call(document.getElementsByTagName('section'));                  // Array of sections
const navBar = document.getElementById("navbar__list");                                    // Ul object
const sectionHeaders = [].slice.call(document.getElementsByClassName('section_header'));   // Section sectionHeaders



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Style the active navigation link
 * 
 * @param {*} element
 * 
 */
function styleActiveLink(element){
    // Adding essential class names to each span nav
    Object.entries(document.getElementsByClassName("navbar_link")).map(item => {
        item[1].className = "navbar_link"; 
        item[1].parentElement.className = "navbar_item";
    });

    element.className = "navbar_link current_nav_anchor";   // Adding current_nav_anchor class name to active span nav
    element.parentElement.className = "navbar_item current_nav_link";   // Adding current_nav_link class name to active nav li
}


/**
 * Navigate to the Target Section
 * 
 * @param {*} element 
 */
function navToSection(element){
    elementIndex = [].slice.call(navBar.children).indexOf(element.parentElement);   // get nav element index
    sections[elementIndex].scrollIntoView();        // scroll to secion with the same index
}


/**
 * Check if element is inside viewport
 * 
 * @param {*} element
 * @returns Boolean
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();   // Get element boundaries
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
for(let [index, section] of sections.entries()){
    // Append a nabar bar anchor to each section element
    let newNavLink = document.createElement("li");
    newNavLink.classList.add("navbar_item");
    newNavLink.innerHTML = `<span class="navbar_link">Section ${index+1}</span>`;
    navBar.appendChild(newNavLink);

    // Add EventListeners to each nav anchor
    newNavLink.firstChild.addEventListener('click', ($this)=> {
        styleActiveLink($this.target);  // Style the anchor when active
        navToSection($this.target);     // Nav to targeted section when clicking the anchor
    })
}

// Styling Active Section
document.addEventListener('scroll', ()=> {
    for(let [index, section] of sections.entries()){
        if(isInViewport(sectionHeaders[index])){
            // Style only the active section
            sectionHeaders.forEach(element => {
                element.parentElement.style.fontStyle = "normal";     // All containers set font Style to normal
                element.parentElement.style.fontSize  = "medium";     // All containers set font Size to medium
            });
            sectionHeaders[index].parentElement.style.fontStyle  = "italic";      // Set font Style of the View Port Container to italic
            sectionHeaders[index].parentElement.style.fontSize   = "larger";      // Set font Size of the View Port Container to larger
        }
    }
});
/**
 * End Main Functions
 * Begin Events
 * 
*/