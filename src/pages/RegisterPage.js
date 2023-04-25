import { useHistory } from 'react-router-dom';
const RegisterPage = () => {
    
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, username, password } = event.target.elements;
        try {
            const response = await registerUser(email.value, username.value, password.value);
            console.log(response);
            history.push('/login');
        } catch (error) {
            alert(error);
        }
    };    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Enter Email" />
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </div>
    )
}

const registerUser = async (email, username, password) => {
    
    
      const response = await fetch('http://127.0.0.1:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({'email':email, 'password':password, 'username':username})
      });
      console.log(JSON.stringify({'email':email, 'password':password, 'username':username}))
      const data = await response.json();
      console.log(data);
   
    
  }

export default RegisterPage