$(document).ready(function () {

     // Your web app's Firebase configuration
     var firebaseConfig = {
        apiKey: "AIzaSyAv-gQAsrvqsR4TJYS7rMFZbYb_gzrSdqk",
        authDomain: "fir-intro-81eaf.firebaseapp.com",
        databaseURL: "https://fir-intro-81eaf.firebaseio.com",
        projectId: "fir-intro-81eaf",
        storageBucket: "",
        messagingSenderId: "641109107416",
        appId: "1:641109107416:web:e9d800f1b02eb46f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Create a variable to reference the database.
    var database = firebase.database();

    var name = "";
    var role = "";
    var day;
    var months;
    var salary = "";
    var billed;

    $("#submit").on("click", function () {
        event.preventDefault();

        name = $("#name").val().trim();
        role = $("#role").val().trim();
        date = $("#date").val().trim();
        salary = $("#salary").val().trim();

        database.ref().push({
            name: name,
            role: role,
            date: date,
            salary: salary,
          });

    });

});