import { Typography, Stack, Grid, Box } from "@mui/material"
import { useEffect, useState, useCallback } from "react"
import ProductCard from "../ProductCard/ProductCard"
import axios from "axios"
import banner from "../../../public/assets/Banner.png"

const ProductList = ({setCount}) => {
  const requestUrl = 'https://667c514a3c30891b865c3656.mockapi.io/shop/productData'

  const [productData, setProductData] = useState(null)
  const [loading, setloading] = useState(true)

  const fetchDataAsync = useCallback( async () => {
   try {
    setloading(true)
    const response = await axios.get(requestUrl)
    setProductData(response.data)
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
    <Stack spacing={3} padding={8}>
      <img src={banner} alt="Banner" />
      <Typography variant='h3'>Product List</Typography>
      <Box>
      <Grid container spacing={3}>
      {productData && productData.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard 
                     id={product.id}
                     image={product.image}
                     name={product.name}
                     price={product.price}
                     setCount={setCount} />
                     
        </Grid>             
      ))}
      </Grid>
      </Box>
    </Stack>

  )
}

export default ProductList