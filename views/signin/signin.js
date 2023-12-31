const emailOrPhone=document.getElementById('emailOrPhone');
const password=document.getElementById('password');
const submit=document.getElementById('submit');

submit.addEventListener('click',signin);

async function signin(e){
    e.preventDefault();

    const user={
        emailOrPhone:emailOrPhone.value,
        password:password.value
    }
    emailOrPhone.value="";
    password.value="";
    try {
        const response=await axios.post('http://localhost:5000/user/signin',user);
        console.log(response.status);
        console.log(response);
        console.log(response.data.token);
        localStorage.setItem('token',response.data.token)
        if(response.status===200){
            alert('signin successful')
            window.location.href='../chat/chat.html'
        }else if(response.status == 404) {
            alert('User not found')
        }
    } catch (error) {
        console.log(error);
    }
}
