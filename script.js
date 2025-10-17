const imageRows = document.querySelectorAll(".image-row");

let offset = 0;
for(const row of imageRows)
{
  for(const image of row.children)
  {
    let delay = offset * 0.04;
    image.classList.add("fade");
    image.style.setProperty("--delayOffset", delay.toString() + "s");
    offset++;
  }
}
