const addItemButton = document.getElementById("add-button");
const modalOverlay = document.getElementById("modal-overlay");
const closeIcon = document.getElementById("close-icon");
const form = document.getElementById("form")
const nameOfItem = document.getElementById("name-of-item");
const linkToItem = document.getElementById("link-to-item");
const descriptionOfItem = document.getElementById("description-of-item");


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


// Collect and handle form data
