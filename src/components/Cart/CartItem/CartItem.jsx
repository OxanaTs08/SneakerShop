import PropTypes from 'prop-types'
import { Button, Stack, Typography, Avatar, Paper } from "@mui/material"
import axios from "axios"
import { connect } from "react-redux"
import { deleteItem } from "../../../redux/actions"


const CartItem = ({id, image, name, price, deleteItem, updateCount}) => {
  const requestUrl = 'https://667c514a3c30891b865c3656.mockapi.io/shop/cartdata'


  const deleteItemApi = async (id) => {
    try {
      const response = await axios.delete(`${requestUrl}/${id}`)
      console.log(response.data)
      deleteItem(id)
      updateCount()
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
  //       <Button onClick={() => deleteItemApi(id)}>Remove</Button>
  //     </div>
  // )
  return (
    <Paper sx={{display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: '10px', 
              padding: '10px' }}>
      <Avatar src={image} alt={name} />
      <Typography>{name}</Typography>
      <Typography>{price}</Typography>
      <Button variant='outlined' onClick={() => deleteItemApi(id)}>Remove</Button>
      
    </Paper>
  )
}
CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateCount: PropTypes.func.isRequired
}
const mapDispatchToProps = {
  deleteItem,
}

export default connect(null, mapDispatchToProps)(CartItem)