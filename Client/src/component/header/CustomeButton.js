import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const MainBox = styled(Box)({
  display: "flex",
  margin: "0 3% 0 auto",

  '& > button , & > p , & > div ' :{
    marginLeft:'40px',
    fontSize:'15px',
    alignItems:'center'
  }
});

const LoginButton = styled(Button)({
    variant:'contained',
    color:'#2874f0',
    background:'#FFFFFF',
    textTransform:'none',
    padding:'5px',
    borderRadius:'3px',
    boxShadow:'none',
    fontWeight:'600px',
    height:'32px'

})
export function CustomeButton() {
  return (
    <>
      <MainBox>
        <LoginButton variant="contained">Login</LoginButton>
        <Typography style={{marginTop:'3px',width:'135px'}}>Seller</Typography>
        <Typography  style={{marginTop:'3px',width:'135px'}}>More</Typography>

        <Box style={{display:'flex'}}>
          <ShoppingCartOutlinedIcon />
          <Typography>Cart</Typography>
        </Box>
      </MainBox>
    </>
  );
}
