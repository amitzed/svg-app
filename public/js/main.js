const btns = document.querySelectorAll(".buttons button"); //so in html go inside the ".buttons" DIV and select any "buttons".

const ghost = document.getElementsByClassName("ghost")[0];
// Above "ghost" refers to html SVG Class="ghost"

// Setup Event Handling for all of the buttons so that when they get clicked, something is done in response:
  // Loop throught the collection of all of the buttons using a FOR loop:
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", manageGhostClasses);
}

  //Below create function for manageCatClasses written above:
  function manageGhostClasses() {
    // alert("testing 123"); //to test if buttons are working
    if (this.getAttribute("data-add")) {
      ghost.classList.add(this.getAttribute("data-add"));
    } // for removing:
    if (this.getAttribute("data-remove")) {
      ghost.classList.remove(this.getAttribute("data-remove"));
    }
  }
