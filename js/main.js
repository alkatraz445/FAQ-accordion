let accordion = new Accordion({
  element: "accordion",
  oneOpen: true,
});

const changeStyle = (elem) => {
  const button = document.getElementsByTagName("button");
  for (i = 0; i < button.length; i++) {
    button[i].classList.remove("active");
  }
  elem.classList.add("active");
};
