import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Login } from "../login/Login";
import { useState } from "react";
import { useEcommerceContexController } from "../../contex/contex";
import { Profile } from "./Profile";

const MainBox = styled(Box)({
  display: "flex",
  margin: "0 3% 0 auto",

  "& > button , & > p , & > div ": {
    marginLeft: "40px",
    fontSize: "15px",
    alignItems: "center",
  },
});

const LoginButton = styled(Button)({
  variant: "contained",
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  padding: "5px",
  borderRadius: "3px",
  boxShadow: "none",
  fontWeight: "600px",
  height: "32px",
});
export function CustomeButton() {
  const [controller, dispatch] = useEcommerceContexController();
  const { account } = controller;
  const [open, setOpen] = useState(false);
  console.log("//////////////////", account);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <MainBox>
        {account ? (
         <Profile account={account}/>
        ) : (
          <LoginButton variant="contained" onClick={() => handleOpen()}>
            Login
          </LoginButton>
        )}

        <Typography style={{ marginTop: "3px", width: "135px" }}>
          Seller
        </Typography>
        <Typography style={{ marginTop: "3px", width: "135px" }}>
          More
        </Typography>

        <Box style={{ display: "flex" }}>
          <ShoppingCartOutlinedIcon />
          <Typography>Cart</Typography>
          <Login open={open} setOpen={setOpen} />
        </Box>
      </MainBox>
    </>
  );
}
