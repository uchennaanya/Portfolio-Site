window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.padding = "0 4rem 0 0";
    document.getElementById("logo").style.width = "150px";
    document.getElementById("logo").style.height = "60px";
    document.getElementById("navbar").style.backgroundColor =
      "rgba(0, 0, 0, 0.8)";
  } else {
    document.getElementById("navbar").style.padding = "1rem 4rem 0 0";
    document.getElementById("logo").style.width = "200px";
    document.getElementById("logo").style.height = "60px";
    document.getElementById("navbar").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  }
}

let toggle = document.getElementById("toggle")
let show = document.getElementById("show")

toggle.addEventListener("click", () => {
  if(show.classList.contains("hide")) {
      show.classList.remove("hide")
      show.classList.add("show")
      // console.log("Hey I was clicked!")

  } else {
      show.classList.add("hide")
      show.classList.remove("show")
      console.log("Hey I was clicked!")

  }
  // console.log("Hey I was clicked!")

})

var ul = document.getElementById("ul");
var links = ul.getElementsByClassName("link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
