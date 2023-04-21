import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
            <StyledToolbar> 
            <StyledTitle variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Filling Up
            </StyledTitle>
            <LinkList>
                <LinkListItem>
                    <StyledLink to="/">
                        <StyledText variant="h6">
                            Inicio
                        </StyledText>
                    </StyledLink>
                </LinkListItem>
                <LinkListItem>
                <StyledLink to="/login">
                        <StyledText variant="h6">
                            Login
                        </StyledText>
                    </StyledLink>
                </LinkListItem>
                <LinkListItem>
                    <StyledLink to="/register">
                        <StyledText variant="h6">
                            Registro
                        </StyledText>
                    </StyledLink>
                </LinkListItem>
            </LinkList>
            </StyledToolbar>
        </StyledAppBar>
        </Box>


        <Outlet />
    </>
  );
};

export default Nav;

const StyledAppBar = styled(AppBar)`
  background-color: #333;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const LinkListItem = styled.li`
  margin-right: 1rem;
  @media (max-width: 500px){
    margin-right: 0.6rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #ccc;
  }
`;
const StyledText = styled(Typography)`
    @media (max-width: 500px){
        font-size: 0.9rem !important;
    }
    
`

const StyledTitle = styled(Typography)`
    @media (max-width: 500px){
        font-size: 1.1rem !important;
    }
`
