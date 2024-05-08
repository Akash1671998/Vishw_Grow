import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

const MainBox = styled(Box)({
  display: "flex",
  height: "70vh",
  width: "90vh",
  padding: "0",
  paddingTop: "0",
});

const Images = styled(Box)({
  background: "#009688",
  width: "78px",
  height: "100%",
  padding: "55px 55px",
  '& > p , & > h5':{
    color:'#fff',
    fontWeight:'600'
  }
});

const Wrapper = styled(Box)({
  padding: "25px 35px",
  display: "flex",
  flex: "1",
  overflow: "auto",
  flexDirection: "column",
  "& > div , & > button , & > p ": {
    marginTop: "20px",
  },
});
const LoginButton = styled(Button)({
  textTransform: "none",
  background: "#009688",
  color: "red",
  height: "35px",
  borderRadius: "2px",
  boxShadow:'0 2px 4px 0'
});

const RequestOTP = styled(Button)({
    textTransform:'none',
    background:'#009688',
    color:'red',
    height:'35px',
    borderRadius:'2px',
    boxShadow:'0 2px 4px 0'

})
   
const CreateAccount = styled(Typography)({
    textAlign:'center',
    color:'#2874f0',
    fontWeight:'600',
    fontSize:'14px',
    cursor:'pointer',
})
   // margin: auto 0 5px 0;
  

   const loginDefaultValue ={
    login:{
        view:'/login'
    },
    signup:{
        view:'/signup'
    }
   }
export function Login({ open, setOpen }) {
    const [login,setlogin]=useState(loginDefaultValue.login)
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{sx:{maxWidth:'unset'}}}
      >
        <MainBox>
          <Box style={{ display: "flex", height: "100%" }}>
            <Images>
              <Typography variant="h5">Login</Typography>
              <Typography style={{ marginTop: 10 }}>
                Get Access To Your Order
              </Typography>
            </Images>
{login.view=== '/login' ?
            <Wrapper>
              <TextField id="name" label="Enter Number" variant="standard" />
              <TextField
                id="password"
                label="Enter Password"
                variant="standard"
              />
              <Typography style={{fontSize:'12px' ,color:'#878787'}}>
                By continuing, you agree to Terms of Use and Privacy Policy.
              </Typography>

              <LoginButton>Login</LoginButton>
              <Typography style={{textAlign:'center'}}>Or</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount>New To Create an Account</CreateAccount>
            </Wrapper> : 
            <Wrapper>
              <TextField id="firstname" label="Enter First Name" variant="standard" />
              <TextField
                id="lastname"
                label="Enter Last Name"
                variant="standard"
              />
              <TextField id="name" label="User Name" variant="standard" />
              <TextField
                id="username"
                label="Enter User Email"
                variant="standard"
              />
               <TextField
                id="email"
                label="Enter User Email"
                variant="standard"
              />
              <TextField
                id="password"
                label="Enter Password"
                variant="standard"
              />
              <TextField
                id="phone"
                label="Enter Phone"
                variant="standard"
              />
 <LoginButton>Continue</LoginButton>
            </Wrapper>
             }
          </Box>
        </MainBox>
      </Dialog>
    </>
  );
}
