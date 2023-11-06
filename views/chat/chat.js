const msg=document.getElementById('message');
const send=document.getElementById('send')
const newMsg=document.getElementById('chat')
const token=localStorage.getItem('token') 

async function fetchAndDisplayMessages() {
    try {
        const response = await axios.get('http://localhost:5000/user/allchat', { headers: { authorization: token } });

        const messages = response.data.allChats;
console.log(message);
        newMsg.innerHTML = '';

        for (const chat of messages) {
            const newLi = document.createElement('li');
            newLi.textContent = chat.message;
            newMsg.appendChild(newLi);
            console.log("msg");
        }
    } catch (error) {
        console.error(error);
    }
}

// Call the fetchAndDisplayMessages function initially
fetchAndDisplayMessages();

// Set up a timer to fetch messages every 1 second
const fetchMessagesInterval = setInterval(fetchAndDisplayMessages, 5000);


send.addEventListener('click', () => {
    clearInterval(fetchMessagesInterval); // Clear the timer
    message(); // Call your message function
});

window.addEventListener('DOMContentLoaded',fetchMessage)


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

async function message(){

    let message=msg.value;
    const output=parseJwt(token)
    const id=output.userId
    try {
        const response=await axios.post(`http://localhost:5000/user/chat/${id}`,{message},{ headers: { authorization: token } })
  
        const newLi = document.createElement("li");
        newLi.textContent = response.data.message;
        newMsg.appendChild(newLi)
    } catch (error) {
        console.log(error);
    }
   

}

async function fetchMessage(){

    const response=await axios.get('http://localhost:5000/user/allchat',{headers:{authorization:token}})
    try {
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }
}