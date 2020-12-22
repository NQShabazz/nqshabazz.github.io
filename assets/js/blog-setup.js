window.onload = function () {
  document.body.classList.add("loaded");

  let anchorArray = document.getElementsByTagName("a");
  var index = anchorArray.length;

  console.log(anchorArray);
  while (index--) {
    let anchorTarget = anchorArray[index].getAttribute("href");

    if (anchorTarget && anchorTarget.startsWith("#")) {
      let anch = anchorArray[index];

      anch.addEventListener("click", function (event) {
        event.preventDefault();
        smoothScroll(anchorTarget.substring(1));
      });
    }
  }

  if (location.hash) {
    setTimeout(function () {
      window.scrollTo(0, 0);
      smoothScroll(location.hash.substring(1))
    }, 1);
  }
};

function smoothScroll(target) {
  let elem = document.getElementById(target);

  if (elem)
    $('html, body').animate({ scrollTop: elem.offsetTop }, 750);
}