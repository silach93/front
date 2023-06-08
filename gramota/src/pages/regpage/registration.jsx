import axios from 'axios';
import { TextField, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#6ccaa8'
        },
        // primary: {
        //     main:
        // }
    }
});


export default function RegistrationForm() {

        const[alert,set_Alert] = useState(false);

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

    let confirmPassword;

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
            case 'confirmPassword':
                confirmPassword = value;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(user);
    }

    function usercreate() {
        if (user.password === confirmPassword) {
            console.log(user);
            axios.post('http://localhost:5555/register', user)
                .then(response => {
                    console.log(response)
                })
            
        }
        else {set_Alert=true}
    }

    return (
        <>
            <div className='warp warp__login'>
                <form onSubmit={handleSubmit} className='form-login'>
                    <div className='card card__login'>
                        <ThemeProvider theme={theme}>
                            <TextField
                                label="Логин"
                                name="login"
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Имя"
                                name="firstName"
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Фамилия"
                                name="middleName"
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Отчество"
                                name="lastName"
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Телефон"
                                type="tel"
                                name="phone"
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Пароль"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Повтор пароля"
                                type="password"
                                name="confirmPassword"
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <Button type="submit" variant="contained" onClick={usercreate} color="secondary">Зарегистрироваться</Button>
                            <Alert action={alert?true:false} color='warning'/>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
        </>
    );
}