import React from 'react';
import { Grid, TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Login = () => {

const navigate = useNavigate()
    
const handleSubmit = (event) => {
    event.preventDefault();


    const data = {
        email: event.target.email.value,
        password: event.target.password.value,
    }
    console.log(data);

    axios
        .post('/url_web/login', data)
        .then((response) => {
            setTimeout(() => {
                navigate("/")
            }, 4000);//tras 4000 mili segundos navega a login
        })
        .catch((err) => {
          console.log(err.response.data);
        })
}


return (
    <StyledGrid container justifyContent="center">
      <StyledGridContainer item xs={10} md={9} lg={7}>
        <StyledTitle variant="h4">Inicio de sesión</StyledTitle> {/* Titulo del Formulario */}
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextField
            name="email"
            type="email"
            label="Correo electrónico"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <StyledTextField
            name="password"
            type="password"
            label="Contraseña"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <StyledButtonWrapper>
            <StyledButton type="submit" variant="contained">
              Iniciar Sesión
            </StyledButton>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledGridContainer>
    </StyledGrid>
  );
};

export default Login;

const StyledGrid = styled(Grid)`
  margin-top: 2rem;
`;

//contenedor del form
const StyledGridContainer = styled(Grid)`
  background-color: #fcdecfff;//el color
  border-radius: 0.5rem;
  padding: 2rem;
`;

//form ( de posicion dentro del grid)
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//titulo
const StyledTitle = styled(Typography)`
  && {
    text-align: center;
    margin-bottom: 1rem;
}
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 1rem;
  }
`;

const StyledButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #0070f3;
    color: #fff;
    &:hover {
      background-color: #0057cb;
    }
  }
`;
