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
    getUser(login);
  });

  $("#createUser").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newUser = {
      freshlogin: $("#inputNewUser")
        .val()
        .trim()
    };
    console.log("\nUser creating and logging in: " + newUser.freshlogin);
    createUser(newUser);
  });
});

//functions to create users
function createUser(newUser) {
  $.ajax({
    url: "/api/player",
    type: "Post",
    data: newUser.freshlogin
  }).then(function() {
    console.log("user logged");
    // Reload the page to get the updated list
    //location.reload();
  });
}

function getUser(login) {
  // Send the POST request. id is the username in this case
  $.ajax({
    url: "/api/player/" + login.freshlogin,
    type: "GET",
    data: login
  }).then(function() {
    console.log("user logged");
    // Reload the page to get the updated list
    //location.reload();
  });
}
