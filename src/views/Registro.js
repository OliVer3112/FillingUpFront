import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Registro = () => {

const navigate = useNavigate()

const [isAdmin, setIsAdmin] = useState(false);//estado isadmin (True/False)
const [rolPassword, setRolPassword] = useState('');//contraseña de rol
  
    
const handleSubmit = (event) => {
    event.preventDefault();


    const data = {
        email: event.target.email.value,
        password: event.target.password.value,
        role: isAdmin ? (rolPassword === 'admin123' ? 'admin' : 'standard') : 'standard'
        //isadmin es booleana si es falsoe entonces = estandar sino entra dentro del operador ternario
        //operador ternario indica que si introducen admin123 se trata admin => rol = admin (se puede guardar como variable de entorno)
    }
    console.log(data);

    axios
        .post('/url_web/registro', data)
        .then((response) => {
            setTimeout(() => {
                navigate("/login")
            }, 4000);//tras 4000 mili segundos navega a login
        })
        .catch((err) => {
          console.log(err.response.data);
        })
}

const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);//isadmin se vuelve true cuando click al checkbox
}

const handleRolPasswordChange = (event) => {
    setRolPassword(event.target.value);//guarda el valor del campo de texto al cambio
}


return (
    <StyledGrid container justifyContent="center">
      <StyledGridContainer item xs={10} md={9} lg={7}>
        <StyledTitle variant="h4">Registro</StyledTitle> {/* Titulo del Formulario */}
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
          <StyledFormControlLabel
            control={<StyledCheckbox onChange={handleCheckboxChange} />}
            label="Usuario Administrador"
          />{/**cuando activas el checkbox */}
          {isAdmin && (
            <StyledTextField
              name="rolPassword"
              type="password"
              label="Contraseña de rol"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={rolPassword}
              onChange={handleRolPasswordChange}
            />
          )}
          <StyledButtonWrapper>
            <StyledButton type="submit" variant="contained">
              Registrarse
            </StyledButton>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledGridContainer>
    </StyledGrid>
  );
};

export default Registro;

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

//cajas de texto
const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 1rem;
  }
`;

//checkbox
const StyledFormControlLabel = styled(({ className, ...props }) => (
    <FormControlLabel className={className} {...props} />
  ))`
    && {
      margin-bottom: 1rem;
    }
 `;
  
const StyledCheckbox = styled(Checkbox)`
    && {
    color: #1976d2;
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
