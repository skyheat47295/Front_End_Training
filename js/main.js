// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
// Get close buttons
const closeBtn = document.getElementById('closeBtn');
const closeX = document.getElementById('closeX');

// Listen for click
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeX.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal)
        modal.style.display = 'none';
}