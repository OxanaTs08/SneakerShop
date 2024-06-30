import { Typography } from "@mui/material"
import { useEffect, useState, useCallback } from "react"
import axios from "axios"
import CartList from "./CartList/CartList"
import CartSummary from "./CartSummary/CartSummary"
import { connect } from "react-redux"
import { saveCartList } from "../../redux/actions"
import { Stack, Box } from '@mui/system' 



const Cart = ({cartListState, saveCartList, updateCount}) => {
  const requestUrl = 'https://667c514a3c30891b865c3656.mockapi.io/shop/cartdata'
  const [loading, setloading] = useState(true)

  const fetchDataAsync = useCallback( async () => {
   try {
    setloading(true)
    const response = await axios.get(requestUrl)
    console.log(response.data)
    saveCartList(response.data)
   }
   catch (error) {
    console.log(error)
   }
   finally {
    setloading(false)
   }
  }, [requestUrl] )

  useEffect(() => {
    fetchDataAsync()
  }, [])

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Box padding={8}>
      <Typography variant='h3'>Cart List</Typography>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <CartList cartList={cartListState} updateCount={updateCount} />
        <CartSummary cartList={cartListState} />
      </Stack>
    </Box>
  )
}

const mapDispatchToProps = {
  saveCartList,
}

const mapStateToProps = (state) => {
  return {
    cartListState: state.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
