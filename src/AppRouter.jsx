import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import { ThemeProvider, createTheme } from '@mui/material'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import ContactsPage from './components/ContactsPage/ContactsPage'
import { useState } from 'react'
import {Box, styled} from "@mui/material"



const theme = createTheme ({
  palette: {
    primary: {
      main: '#3B3C3D',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: 'rgb(255, 255, 255, 0.7)',
    }
  },
  typography: {
    color: '#000',
  }
})

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Content = styled(Box)({
  flex: '1 0 auto',
});

const AppRouter = () => {
  const [count, setCount] = useState(0)
  const updateCount = () => setCount(prevCount => prevCount - 1)

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header count={count}/>
        <Content>
          <Routes>
            <Route path="/" element={<ProductList setCount={setCount} />} />
            <Route path="/cart" element={<Cart updateCount={updateCount}/>} />
            <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </Content>
        <Footer />
      </MainContainer>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default AppRouter
  
