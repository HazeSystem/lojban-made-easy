function encodeValsiForWeb(v) {
  return encodeURIComponent(v).replace(/'/g, "\\'").trim();
}

document.addEventListener("DOMContentLoaded", function () {
  renderButtons();
});
document.addEventListener("popstate", function () {
  renderButtons();
});

function renderButtons() {
  var terms = Array.from(document.querySelectorAll(".guibutton"));
  for (var i = 0; i < terms.length; i++) {
    var Node = terms[i];
    var slug = encodeValsiForWeb(Node.innerText);
    var li =
      "<button class='tutci hide-for-print' onclick=\"(function (){var s=new Audio('https://la-lojban.github.io/sutysisku/sance/lerfu/" +
      slug +
      ".ogg');s.play()})()\">▶</button>";
    Node.parentNode.insertAdjacentHTML("beforeend", li);
  }
}
