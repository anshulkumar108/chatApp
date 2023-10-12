const names=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

document.getElementById('submit').addEventListener('click',async(e)=>{
    e.preventDefault();
        const user={
            name:names,
            phone:phone,
            email:email,
            password:password,
        }
        clearInput()
        try {
            const response = await axios.post('http://localhost:5000/user', user)
            console.log(response);
           
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