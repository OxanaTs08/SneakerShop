import { AppBar, Box, Toolbar, styled, Typography, Link, Input } from "@mui/material"
import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js';

const StyledLink = styled(Link)(({theme}) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: theme.palette.primary.contrastText
  },
}))

const StyledInput = styled(Input)(({theme}) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: theme.palette.primary.contrastText
  },
}))

const StyledTypography = styled(Typography)(({theme}) => ({
  color: theme.palette.secondary.main,
}))



const Footer = () => {
  return (

    <AppBar
      position="static"
      sx={{
        width: '100%',
        backgroundColor: 'rgba(59, 60, 61, 1)',
        boxShadow: 'none',
        top: 'auto',
        bottom: 0,
        padding: '70px 70px',
        mt: 'auto',
      }}
    >
      <Toolbar  sx={{justifyContent: 'space-between', paddingLeft: '0'}}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '20px',
        }}>
          <Typography> Contacts </Typography>
          <Box>
            <StyledTypography> 8 800 000 00 00 </StyledTypography>
            <StyledTypography> emailexample@email.com </StyledTypography>
          </Box>
          <Box>
            <StyledTypography> 2024 Сникер-магазин. Все права защищены </StyledTypography>
          </Box>  
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '60px',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            }}>
              <StyledLink> <Icon href='#' sx={{'&hover': {cursor: 'pointer'}}} path={mdiFacebook} size={1} /></StyledLink>
              <StyledLink> <Icon path={mdiTwitter} size={1} /></StyledLink>
              <StyledLink> <Icon path={mdiInstagram} size={1} /></StyledLink>
           </Box>
          <Box>
            <StyledInput placeholder="Enter your email:"></StyledInput>
          </Box> 
        </Box>
      </Toolbar>

    </AppBar>
    
  )
}

export default Footer