document.addEventListener('DOMContentLoaded', (event) => {
    const socket = io();

    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    socket.on('message', (msg) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg;
        chatBox.appendChild(messageElement);
    });

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        socket.emit('message', message);
        messageInput.value = '';
    });
});
