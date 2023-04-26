import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/slices/AvatarCartSlice';

export default function Cart() {
  const data = useSelector((state) => state.AvatarCart.items)
  const dispatch = useDispatch()

  const removeCartHandler = (item) => {
    dispatch(removeItem(item.id))
  }

  return (
    <div style={{ background: "#F8F8F8", padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>Shopping Cart</Typography>
      {data.map((item) => (
        <Card  sx={{display: 'flex', marginBottom: "20px"}} key={item.id}>
          <CardMedia
            sx={{ width: 100,height: 100,margin: '10px'}}
            image={item.image}
            title={item.name}
          />
          <div  sx={{display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>
            <CardContent sx={{ flex: '1 0 auto'}}>
              <Typography component="h5" variant="h5">
                {item.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: "10px" }}>
                {item.smallName} | {item.gender} | {item.system}
              </Typography>
              <Typography sx={{ fontWeight: 'bold', marginBottom: "10px" }}>
                ${item.price}
              </Typography>
              <Typography variant="subtitle2" style={{ marginBottom: "10px" }}>
                {item.description}
              </Typography>
              <Typography variant="subtitle2">
                {item.starsandLikes}
              </Typography>
            </CardContent>
            <div>
              <Button size="small" color="secondary" onClick={()=>{removeCartHandler(item)}}>
                Remove
              </Button>
            </div>
          </div>
        </Card>
      ))}
      {data.length === 0 && (
        <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
          Your cart is empty.
        </Typography>
      )}
      {/* {data.length > 0 && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>${totalPrice}</Typography>
        </div>
      )} */}
    </div>
  );
}
