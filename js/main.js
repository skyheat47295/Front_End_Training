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
modal.addEventListener('keydown', function(event) {
    if (event.key == 'Tab') {
        document.getElementById("closeBtn").focus();
      alert('what');
    }
    });

// Function to open modal
function openModal() {
    modal.style.display = 'block';
    //ally.maintain.tabFocus({
    //    filter: 'simpleModal'});
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

