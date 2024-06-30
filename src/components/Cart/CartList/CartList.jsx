import { Box, Typography } from "@mui/material"
import PropTypes from 'prop-types'
import CartItem from "../CartItem/CartItem"

const CartList = ({cartList, updateCount}) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      {cartList.length === 0 ? (
        <Typography variant="h6">Your Cart is empty</Typography>
        ) : (
      cartList.map((item) => (
        <CartItem key={item.id} 
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  updateCount={updateCount}
                   />
      )))}
    </Box>
  )
} 
CartList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })).isRequired,
  updateCount: PropTypes.func.isRequired

}
export default CartList