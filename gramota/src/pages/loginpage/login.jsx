import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // код для отправки данных на сервер и проверки авторизации
  };

  function auth(){
    axios.post('http://localhost:5555/auth', {
        'login':username,
        'pass':password
    })
            .then(response => {
                if(response.data.error === "error") alert("ИДИ НАХУЙ ДОЛБАЁБ")
                else navigate('/')
                console.log(response)
            })
            .catch(err => {
                console.log(err.response)
            })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Имя пользователя"
        variant="outlined"
        value={username}
        onChange={handleUsernameChange}
      />
      <TextField
        label="Пароль"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button onClick={auth} variant="contained" type="submit">
        Войти
      </Button>
    </form>
  );
}

export default Login;