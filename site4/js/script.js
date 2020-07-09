// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    function sayHello(event) {
      console.log(event);
      this.textContent = "Said it";
      // body...
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";

      // document.getElementById("content").textContent = message;
      document.getElementById("content").innerHTML = message;

      if(name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
      }
    }

    // document.querySelector("button").onclick = sayHello;
    // Unobstrusive event binding
    document.querySelector("button").addEventListener("click", sayHello);

    // print out x, y coordinates if shift is pressed
    document.querySelector("body").addEventListener("mousemove", 
      function(event) {
        // event shiftKey is true if shift is pressed
        if(event.shiftKey == true){
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
        }
      }
    );

  }
);
// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);




