const modal = document.querySelector(".commission-modal");
const requestForm = document.querySelector(".request-form")
const emailButtons = document.querySelectorAll(".email-button");
const closeButton = document.querySelector(".close-button");

for(button of emailButtons)
{
  button.addEventListener("click", () =>
  {
    modal.style.display = "flex";
    modal.classList.remove("slide-out");
    modal.showModal();
  });
}

closeButton.addEventListener("click", () =>
{
  modal.close();
});

modal.addEventListener("close", () =>
{
  modal.classList.add("slide-out");
  modal.style.display = "none";
});
// requestForm.addEventListener("submit", (event) =>
// {
//   event.preventDefault();
// });
