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


