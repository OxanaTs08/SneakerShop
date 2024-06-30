import { Typography, Paper, Stack , styled, Divider} from "@mui/material"

const StyledPaper = styled(Paper)({
  padding: '20px', 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '20px',
  alignSelf: 'flex-start'
})

const CartSummary = ({cartList}) => {
  const totalPrice =
       cartList.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)

  return (
    <>
    {cartList.length > 0 && (
      <StyledPaper>
        <Stack spacing={2} >
          <Typography variant='h5'>Cart Summary</Typography>
          {cartList.map((item) => (
            <Typography key={item.id}>{item.name}  - ${item.price} </Typography>
         ))}
        </Stack>
        <Divider />
        <Typography variant='h3'>Total price: ${totalPrice}</Typography>
      </StyledPaper>
    )}
    </>
 )
}

export default CartSummary;