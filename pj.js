document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-container img");
    const radios = document.querySelectorAll("input[name='imageSelect']");

    // Image slider handling
    radios.forEach((radio, index) => {
        radio.addEventListener("change", () => {
            images.forEach(img => img.style.display = "none"); 
            images[index].style.display = "block"; 
        });
    });

    // Form submission handling
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const domain = document.getElementById('domain').value;

        // Redirect based on domain selection
        switch (domain) {
            case 'doctor':
                window.location.href = 'https://example.com/doctor';
                break;
            case 'engineering':
                window.location.href = 'https://example.com/engineering';
                break;
            case 'dancing':
                window.location.href = 'https://example.com/dancing';
                break;
            case 'cooking':
                window.location.href = 'https://example.com/cooking';
                break;
            case 'civil_servant':
                window.location.href = 'https://example.com/civil-servant';
                break;
            default:
                alert('Please select a valid domain');
        }
    });
});



