window.addEventListener("mousemove", cursor);
const pointer = document.querySelector(" .sec .cursor");
const section = document.querySelector(".sec");
function cursor(e) {
  pointer.style.top = e.pageY + "px";
  pointer.style.left = e.pageX + "px";
  console.log(e.pageX);
  console.log(e.pageY);
}
pointer.addEventListener("click", () => {
  pointer.classList.toggle("active");
  section.classList.toggle("active");
});
