document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('guestbookForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const xhr = new XMLHttpRequest();
        console.log("xhr create:", xhr)
        xhr.open('POST', 'submit.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        console.log("xhr create:", xhr)
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('responseMessage').innerText = xhr.responseText;
                console.log(xhr.responseText)
                loadMessages();
            }
        };

        console.log("name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(message))
        xhr.send("name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(message));
    });

    function loadMessages() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'get_messages.php', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const messages = JSON.parse(xhr.responseText);
                const messagesDiv = document.getElementById('messages');
                messagesDiv.innerHTML = '';

                messages.forEach(function (message) {
                    const messageDiv = document.createElement('div');
                    messageDiv.classList.add('message');
                    messageDiv.innerHTML = `<strong>${message.name}</strong><br>${message.message}<br><small>${message.created_at}</small>`;
                    messagesDiv.appendChild(messageDiv);
                });
            }
        };

        xhr.send();
    }

    loadMessages();
});
