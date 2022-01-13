window.addEventListener("load", function () {
  let modalWindow = document.getElementById("modal-wraper");
  document.addEventListener("click", function (e) {
    let element = e.target.id;
    if (
      element === "close" ||
      element === "show-btn" ||
      element === "modal-wraper"
    ) {
      toggleModal();
    }
  });
  function toggleModal() {
    modalWindow.classList.toggle("hide");
  }
});
