document.addEventListener('DOMContentLoaded', function() {
  const board = document.querySelector(".board");
  const cross = document.querySelector(".cross");
  board.addEventListener("mousemove", function(e) {
      cross.style.left = e.pageX - 100 + "px";
      cross.style.top = e.pageY - 100 + "px";
  })
  setInterval(function() {
      const div = document.createElement("div");
      div.classList.add("zombie");
      const min = 20;
      const max = 250;
      const pos = Math.floor(Math.random() * (max - min + 1) + min);
      div.style.bottom = `${pos}px`;
      div.style.zIndex = max - pos;
      {
          const min = 5;
          const max = 8;
          const time = Math.floor(Math.random() * (max - min + 1) + min);
          div.style.animationDuration = `0.6s, ${time}s`;
      }
      board.appendChild(div);
      div.addEventListener("animationend", function() {
          this.remove();
      })
      div.addEventListener("mousedown", function() {
          this.remove();
      })
      //poprawianie dzialania animacji
      const zombies = document.querySelectorAll(".zombie");
      for (let el of zombies) {
          el.offsetLeft = el.offsetLeft;
      }
  }, 1000);
});