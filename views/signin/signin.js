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
    console.log(user);
    try {
        const response=await axios.post('http:localhost:5000/user/signin',user);
        console.log(response);
        if(response.status===200){
            alert('signin successful')
        }
    } catch (error) {
        console.log(error);
    }
}
