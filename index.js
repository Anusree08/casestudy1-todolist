
  function login() {
    if ($("#usernames").val() == "admin" && $("#passwords").val() == "12345") {
      window.alert("You are a valid user");
    setTimeout(function() {window.location = "todo.html" });
    } 
    else {
      window.alert("You are not a valid user");
    }
  }
  
  