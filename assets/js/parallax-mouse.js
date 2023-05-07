// добавить разные value = "2"
// добавить класс .par-effect

function parallax(event) {
    this.querySelectorAll(".par-effect").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
  
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  
  document.addEventListener("mousemove", parallax);