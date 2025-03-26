function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (userInput.trim() === "") return;

    let userMessage = `<p><strong>You:</strong> ${userInput}</p>`;
    chatbox.innerHTML += userMessage;

    setTimeout(() => {
        let botMessage = `<p><strong>ASK-E:</strong> Hello! How can I assist you?</p>`;
        chatbox.innerHTML += botMessage;
    }, 1000);

    document.getElementById("userInput").value = "";
}
