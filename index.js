const addItemButton = document.getElementById("add-button");
const modalOverlay = document.getElementById("modal-overlay");
const nameOfItem = document.getElementById("name-of-item");
const closeIcon = document.getElementById("close-icon")


// Reveal and hide modal overlay

// Reveal
addItemButton.addEventListener("click", revealModalOverlay)

function revealModalOverlay() {
    modalOverlay.classList.remove("modal-overlay")
    modalOverlay.classList.add("modal-overlay-visible")
    nameOfItem.focus()

}

// close
closeIcon.addEventListener("click", closeMOdalOverlay)

function closeMOdalOverlay() {
    if (modalOverlay.classList.contains("modal-overlay-visible")) {

        modalOverlay.classList.remove("modal-overlay-visible")
        modalOverlay.classList.add("modal-overlay")

    }
}