const msg=document.getElementById('message');
const send=document.getElementById('send')
const token=localStorage.getItem('token') 

send.addEventListener('click',message);

window.addEventListener('DOMContentLoaded',fetchMessage)
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

async function message(e){
    e.preventDefault();
    let message=msg.value;
    const output=parseJwt(token)
    const id=output.userId
    try {
        const response=await axios.post(`http://localhost:5000/user/chat/${id}`,{message},{ headers: { authorization: token } })
        console.log(response.data);
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