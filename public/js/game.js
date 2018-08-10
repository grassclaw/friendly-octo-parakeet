$(document).ready(function () {


    
    console.log("testing connection for this game");
    //updating cell 1
    $("#cel1").on("click", function () {
        console.log("\n cell 1");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    //updating cell 2
    $("#cel2").on("click", function () {
        console.log("\n cell 2");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    //updating cell 3
    $("#cel3").on("click", function () {
        console.log("\n cell 3");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    //updating cell 4
    $("#cel4").on("click", function () {
        console.log("\n cell 4");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    //updating cell 5
    $("#cel5").on("click", function () {
        console.log("\n cell 5");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    //updating cell 6
    $("#cel6").on("click", function () {
        console.log("\n cell 6");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    //updating cell 7
    $("#cel7").on("click", function () {
        console.log("\n cell 7");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    //updating cell 8
    $("#cel8").on("click", function () {
        console.log("\n cell 8");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    //updating cell 9
    $("#cel9").on("click", function () {
        console.log("\n cell 9");
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });


});