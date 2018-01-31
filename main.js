var h1 = document.getElementById("text")


setInterval(function(){
  if (h1.style.color == "blue")
    {
      h1.style.color = "orange";
    }
  else
    h1.style.color = "blue";
}, 100)
