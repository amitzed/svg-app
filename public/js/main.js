const btns = document.querySelectorAll(".buttons button"); //so in html go inside the ".buttons" DIV and select any "buttons".

const cat = document.getElementsByClassName("cat")[0];
// Avove "cat" refers to html SVG Class="cat"

// Setup Event Handling for all of the buttons so that when they get clicked, something is done in response:
  // Loop throught the collection of all of the buttons using a FOR loop:
 for (i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", manageCatClasses);
 }

  //Below create function for manageCatClasses written above:
  function manageCatClasses() {
    // alert("testing 123"); //to test if buttons are working
    if (this.getAttribute("data-add")) {
      cat.classList.add(this.getAttribute("data-add"));
    }
    if (this.getAttribute("data-remove")) {
      cat.classList.remove(this.getAttribute("data-remove"));
    }

  }
