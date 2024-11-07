document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chatForm");
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("userInput");

    chatForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const userMessage = userInput.value;
        if (userMessage.trim() === "") return;

        addMessage("User", userMessage);
        userInput.value = "";

        // Show loading indicator
        const loadingMessage = addMessage("ChatBot", "Thinking...");
        chatBox.scrollTop = chatBox.scrollHeight;

        fetch('chatbot.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        })
            .then(response => response.json())
            .then(data => {
                // Remove loading indicator
                chatBox.removeChild(loadingMessage);
                addMessage("ChatBot", data.reply);
            })
            .catch(error => {
                console.error('Error:', error);
                chatBox.removeChild(loadingMessage);
                addMessage("ChatBot", "Sorry, I couldn't process your request.");
            });
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.textContent = `${sender}: ${message}`;
        
        // Style based on sender
        if (sender === "User") {
            messageElement.style.color = "#c90526"; // User color
            messageElement.style.textAlign = "right"; // Align to right
        } else {
            messageElement.style.color = "#007BFF"; // ChatBot color
            messageElement.style.textAlign = "left"; // Align to left
        }

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;

        return messageElement; // Return for loading indicator
    }

    // Allow pressing 'Enter' to send message
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            chatForm.dispatchEvent(new Event("submit"));
        }
    });
});
