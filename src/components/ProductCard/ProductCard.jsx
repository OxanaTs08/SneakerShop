import PropTypes from 'prop-types'
import { Button, Paper, Typography, styled } from "@mui/material"
import axios from "axios"
import { Stack } from '@mui/system'


const StyledPaper = styled(Paper)({
  padding: '20px', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px'
})

const ProductImage = styled('img')({
  height: '100px',
  width: '100px',
  object: 'cover'
})

const StyledButton = styled(Button)({
  borderRadius: '8px',
  backgroundColor: 'rgba(59, 60, 61, 0.7)',
  color: 'white',
  padding: '2px 5px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(59, 60, 61, 1)'
  },
  '&:active': {
    transform: 'translateY(1px)'
  },

  
})

const ProductCard = ({id, image, name, price, setCount}) => {
  const requestUrl = 'https://667c514a3c30891b865c3656.mockapi.io/shop/cartdata'

  const addToCart = async (image, name, price) => {
    try {
      const response = await axios.post(requestUrl, {
        image,
        name,
        price
      })
      console.log(response.data)
      setCount(prevCount => prevCount + 1)
    }
    catch (error) {
      console.log(error)
    }
  }



  // return (
  //     <div>
  //       <img src={image} alt={name} />
  //       <h3>{name}</h3>
  //       <p>{price}</p>
  //       <Button onClick = {() => addToCart(image, name, price)}>Add to cart</Button>
  //     </div>
  // )
  return (
    <StyledPaper>
      <ProductImage src={image} alt={name} />
      <Stack direction='row' spacing={2}>
        <Typography >{id}</Typography>
        <Typography sx={{fontWeight: 'bold'}} >{name}</Typography>
      </Stack>
      <Stack direction='row' spacing={2} alignItems={'center'}>
        <Typography> Price: {price}</Typography>
        <StyledButton onClick = {() => addToCart(image, name, price)}>Add to Cart</StyledButton>
      </Stack>
    </StyledPaper>
  )
}
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  setCount: PropTypes.func.isRequired
}

export default ProductCard