import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { authenticatedSignin, authenticatedSignup } from "../services/Services";
import { useEcommerceContexController, setAccount } from "../../contex/contex";

const MainBox = styled(Box)({
  display: "flex",
  height: "80vh",
  width: "90vh",
  padding: "0",
  paddingTop: "0",
});

const Images = styled(Box)({
  background: "#009688",
  width: "98px",
  height: "90%",
  padding: "55px 55px",
  alignItems: "center",
  "& > p , & > h5": {
    color: "#fff",
    fontWeight: "600",
  },
});

const Wrapper = styled(Box)({
  padding: "25px 35px",
  display: "flex",
  flex: "1",
  //   overflow: "auto",
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
  boxShadow: "0 2px 4px 0",
});

const RequestOTP = styled(Button)({
  textTransform: "none",
  background: "#009688",
  color: "red",
  height: "35px",
  borderRadius: "2px",
  boxShadow: "0 2px 4px 0",
});

const CreateAccount = styled(Typography)({
  textAlign: "center",
  color: "#2874f0",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer",
});
// margin: auto 0 5px 0;

const loginDefaultValue = {
  login: {
    view: "/login",
    heding: "Login User",
    subheading: " Get Access To Your Order",
  },
  signup: {
    view: "/signup",
    heding: "Signup User",
    subheading: "  Create a new account for New User",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};
export function Login({ open, setOpen }) {
  const [controller, dispatch] = useEcommerceContexController();
  const { darkMode } = controller;
  const [login, setlogin] = useState(loginDefaultValue.login);
  const [signupUser, setSignupUser] = useState(signupInitialValues);
  const [loguser, setLogUser] = useState(loginInitialValues);

  const handleClose = () => {
    setOpen(false);
    setlogin(loginDefaultValue.login);
  };

  const signup = () => {
    setlogin(loginDefaultValue.signup);
  };

  const MoveToLogin = () => {
    setlogin(loginDefaultValue.login);
  };

  const handleSignup = (e) => {
    setSignupUser({ ...signupUser, [e.target.name]: e.target.value });
  };

  const createUser = async () => {
    let response = await authenticatedSignup(signupUser);
    if (response) {
      setAccount(dispatch, signupUser.firstname);
      setSignupUser("");
      setOpen(false);
    }
  };

  const handleLogin = (e) => {
    setLogUser({ ...loguser, [e.target.name]: e.target.value });
  };
  const loginuser = async () => {
    const response = await authenticatedSignin(loguser);
    if (response.status === 200) {
      setAccount(dispatch, response.data.data.firstname);
      setOpen(false);
      setLogUser();
    }
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <MainBox>
          <Box style={{ display: "flex", height: "100%" }}>
            {login.view === "/login" ? (
              <Images>
                <Typography variant="h5">{login.heding}</Typography>
                <Typography style={{ marginTop: 10 }}>
                  {login.subheading}
                </Typography>
              </Images>
            ) : (
              <Images>
                <Typography variant="h5">
                  {loginDefaultValue.signup.heding}
                </Typography>
                <Typography style={{ marginTop: 10 }}>
                  {loginDefaultValue.signup.subheading}
                </Typography>
                {/* <img src={Createaccount} alt="create_account"  style={{width:'100px' ,height:'90px'}}/> */}
              </Images>
            )}

            {login.view === "/login" ? (
              <Wrapper>
                <TextField
                  name="username"
                  label="Enter UserName"
                  variant="standard"
                  onChange={(e) => handleLogin(e)}
                />
                <TextField
                  name="password"
                  label="Enter Password"
                  variant="standard"
                  onChange={(e) => handleLogin(e)}
                />
                <Typography style={{ fontSize: "12px", color: "#878787" }}>
                  By continuing, you agree to Terms of Use and Privacy Policy.
                </Typography>

                <LoginButton onClick={() => loginuser()}> Login</LoginButton>
                <Typography style={{ textAlign: "center" }}>Or</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={() => signup()}>
                  New To Create an Account
                </CreateAccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField
                  variant="standard"
                  onChange={(e) => handleSignup(e)}
                  name="firstname"
                  label="Enter Firstname"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => handleSignup(e)}
                  name="lastname"
                  label="Enter Lastname"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => handleSignup(e)}
                  name="username"
                  label="Enter Username"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => handleSignup(e)}
                  name="email"
                  label="Enter Email"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => handleSignup(e)}
                  name="password"
                  label="Enter Password"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => handleSignup(e)}
                  name="phone"
                  label="Enter Phone"
                />
                <LoginButton onClick={() => createUser()}>Continue</LoginButton>
                <CreateAccount onClick={() => MoveToLogin()}>
                  Existing User? Log in
                </CreateAccount>
              </Wrapper>
            )}
          </Box>
        </MainBox>
      </Dialog>
    </>
  );
}
