$(document).ready(function() {
  var z, i, elmnt, file, page_id;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      page_id = elmnt.getAttribute("page-id");
      elmnt.removeAttribute("include-html");
      $(elmnt).load(file, function() {
        if (page_id) {
          $("#" + page_id).addClass("active");
        };
      });
      return;
    };
  };
});
