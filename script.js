document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            document.querySelectorAll('label').forEach(function (label) {
                label.classList.remove("highlight");
            });

            if (radioButton.checked) {
                const label = radioButton.closest('label');
                if (label) {
                    label.classList.add("highlight");
                }
            }
        });
    });
});
