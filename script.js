function highlightLabel(radioButtonId) {
    var labelElement = document.querySelector('label[for="' + radioButtonId + '"]');

    // Check if the radio button is checked
    if (labelElement && labelElement.querySelector('input').checked) {
        labelElement.classList.add('highlight'); // Add the 'highlight' class
    } else if (labelElement) {
        labelElement.classList.remove('highlight'); // Remove the 'highlight' class
    }
}

// Add event listeners for each radio button after the window has loaded
window.onload = function() {
    document.getElementById('radio-1').addEventListener('click', function () {
        highlightLabel('radio-1');
    });

    document.getElementById('radio-2').addEventListener('click', function () {
        highlightLabel('radio-2');
    });
};