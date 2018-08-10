// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  console.log("testing connection for user singing in");

  $("#login-user").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var login = {
      freshlogin: $("#inputUserName")
        .val()
        .trim()
    };
    console.log("\nUser logging in: " + login.freshlogin);
    // Send the POST request.
    $.ajax("/", {
      // url: "/",
      type: "POST",
      data: login
    }).then(function() {
      console.log("user logged");
      // Reload the page to get the updated list
      //location.reload();
    });
  });
});
