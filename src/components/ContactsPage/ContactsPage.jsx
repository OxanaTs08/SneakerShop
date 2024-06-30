import { Box, Typography, TextField, Button, Divider, styled, Container, Paper, Link } from "@mui/material"
import Ghost from "../../../public/assets/Ghost.svg"
import Facebook from "../../../public/assets/Facebook.svg"
import x_icon from "../../../public/assets/x_icon.svg"
import { useState } from "react"


const StyledTypography = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main,
}))

const ContactsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [nameError, setNameError] = useState(false);
  

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!/^[A-Za-z ]+$/.test(value)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nameError ) {
      setSubmittedData({name, email, message})
      setName("")
      setEmail("")
      setMessage("")
    }  
  }
    
  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '50px', padding: '70px 70px'}}> 
      <Typography variant='h3'>Contacts</Typography>
      <Divider />
      <Box>
        <StyledTypography> 8 800 000 00 00 </StyledTypography>
        <StyledTypography> emailexample@email.com </StyledTypography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box>
        {!submittedData ? (
          <form onSubmit={handleSubmit}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px'}}>
              <TextField
                variant="filled"
                label="Enter Your Name"
                fullWidth
                margin="normal"
                value={name}
                type="text"
                inputProps={{
                  pattern: "[A-Za-z ]+",
                }}
                error={nameError}
                helperText= {nameError? "Your name must contain only letters" : ''}
                onChange={handleNameChange}
              />
              <TextField
                variant="filled"
                label="Enter Your Email"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <TextField
              variant="filled"
              label="Enter Your Message"
              fullWidth
              margin="normal"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!name || !email || !message}
              >Send</Button>
            </Box>
          </form>
          ) : (
              <Paper elevation={3} sx={{padding: 2}}>
                <Typography variant="h5">Your message was sent: </Typography>
                <Typography>Name: {submittedData.name}</Typography>
                <Typography>Email: {submittedData.email}</Typography>
                <Typography>Message: {submittedData.message}</Typography>
              </Paper>
          )}
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}> Find Us : </Typography>
          <Box sx={{display: 'flex', gap: '50px'}}>
            <Link href='#'><img src={Ghost} alt="ghost" /></Link>
            <Link href='#'><img src={Facebook} alt="facebook" /></Link>
            <Link href='#'><img src={x_icon} alt="xicons" /></Link>
            
          </Box>
        </Box>
      </Box>

       
    </Container>
      
  )
}

export default ContactsPage