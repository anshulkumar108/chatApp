const names=document.getElementById("name");
const phone=document.getElementById("phone");
const email=document.getElementById("email");
const password=document.getElementById("password");

document.getElementById('submit').addEventListener('click',async(e)=>{
    e.preventDefault();
        const user={
            name:names.value,
            phone:phone.value,
            email:email.value,
            password:password.value,
        }
        console.log(user);
        clearInput()
        try {
            const response = await axios.post('http://localhost:5000/user/signup', user)
            console.log(response);
            if(response.status===200){
                alert('Successfuly signed up');
                window.location.href='../signin/signin.html'
            }else if(response.status===501){
                alert('Email already exist');
            }
           
        } catch (error) {
            console.log(error);
            alert('failed to Register.email might be already registered');
        }
    }
)

function clearInput() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById("phone").value= "";
}