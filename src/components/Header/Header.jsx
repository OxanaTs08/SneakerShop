import { AppBar, Box, Toolbar, styled, Badge } from "@mui/material"
import shoplogo from '../../../public/assets/shoplogo.svg'
import { NavLink } from "react-router-dom"

const StyledNavLink = styled(NavLink)(({theme}) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: theme.palette.primary.contrastText
  },
}))

const Header = ({count}) => {
  return (

    <AppBar
      position="static"
      sx={{
        width: '100%',
        backgroundColor: 'rgba(59, 60, 61, 1)',
        boxShadow: 'none',  
      }}
    >
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <img src={shoplogo} alt="logo" />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}>
          <StyledNavLink to="/">Main</StyledNavLink>
          <Badge badgeContent={count}> <StyledNavLink to="/cart">Cart</StyledNavLink> </Badge>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>

        </Box>
      </Toolbar>

    </AppBar>
    
  )
}

export default Header