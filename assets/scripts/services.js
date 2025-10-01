const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalTitle = document.getElementById("modal-title");
const closeModal = document.getElementById("close-modal");

document.querySelectorAll(".card-button").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    modalTitle.textContent = `Contact ${name}`;
    modalText.textContent = `${name} will be available shortly. Please leave your contact info.`;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
