import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();


export default function RegistrationForm() {


    let user =
    {
        login: '',
        firstName: '',
        middleName: '',
        surName: '',
        phone: '',
        email: '',
        password: '',
    }



    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'login':
                user.login = value;
                break
            case 'firstName':
                user.firstName = value;
                break
            case 'middleName':
                user.middleName = value;
                break
            case 'lastName':
                user.surName = value;
                break
            case 'phone':
                user.phone = value;
                break
            case 'password':
                user.password = value;
                break

            default: break
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }
    
    function usercreate ()  {
        // let human = CircularJSON.stringify(user);
        console.log(user);
        axios.post('http://localhost:5555/register', user)
            .then(response => {
                console.log(response)
            })
    }

    return (
        <ThemeProvider theme={theme} >
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Login"
                    name="login"
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    label="First Name"
                    name="firstName"
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    label="Middle name"
                    name="middleName"
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    label="Phone"
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" onClick={usercreate} color="primary">Зарегистрироваться</Button>
            </form>
        </ThemeProvider>
    );
}