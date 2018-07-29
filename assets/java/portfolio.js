
$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDL0-U9RJOCw8ZwvO3lw-itY5mMxr6BTEw",
    authDomain: "timeline-72515.firebaseapp.com",
    databaseURL: "https://timeline-72515.firebaseio.com",
    projectId: "timeline-72515",
    storageBucket: "timeline-72515.appspot.com",
    messagingSenderId: "452269232978"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  console.log("hi there");
  $("#submit1").on("click",function(event){
    event.preventDefault();
    console.log("hi");
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#msg").val().trim();
    console.log(name);
    console.log(email);
    console.log(message);
    
    database.ref().push({
        name: name,
        email: email,
        messages: message
    });

    $("#name").val("");
    $("#email").val("");
    $("#msg").val("");
  });
  database.ref().on("child_added", function(snapshot){
    var name = snapshot.val().name;
    var  email = snapshot.val().email;
    var  message = snapshot.val().message;
  });

  // $(".media-object").on({
  //   mouseenter: function(){
  //     $(this).animate({width:"200px",hieght:"200px"});
  //   }, 
  //   mouseleave: function(){
  //     $(this).animate({width:"150px",hieght:"150px"});
  //   }
  
  // });

$(".img-circle").on({
  mouseenter: function(){
    $(this).animate({width:"240px"}).css("background-color", "lightgray");
  }, 
  mouseleave: function(){
    $(this).animate({width:"200px"}).css("background-color", "lightblue");
  } 
});

});
