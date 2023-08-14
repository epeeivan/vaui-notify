export default class Notif {
  constructor() {
    this.type = "success";
    this.message = "notification";
    // this.start_delai = 5;
    this.duration = 5000;
  }
  notify(type, text) {
    var notif = document.createElement("div");
    notif.setAttribute("class","notif "+type);
    notif.innerHTML = text;
    notif.style.left = window.innerWidth - (window.innerWidth * 35) / 100 + "px";
    document.querySelector("body").before(notif);
    notif.style.top = window.innerHeight - (notif.offsetHeight + 30) + "px";
    var op = 0;
    var it = setInterval(function () {
      op = op + 0.01;
      notif.style.opacity = op;
      // console.log(notif)
      if (op > 0.9) {
        clearInterval(it);
      }
    }, 1);

    setTimeout(function () {
      var op = 1;
      var it = setInterval(function () {
        op = op - 0.01;
        notif.style.opacity = op;
        // console.log(notif)
        if (op < 0.01) {
          notif.remove();
          clearInterval(it);
        }
      }, 5);
    }, 5000);
  }
}
// alert()
