import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Icon from "../../Images/icons.png";
import { Search } from "./Search";
// import VishwaGrow from '../../Images/Vishw_Grow'
import { CustomeButton } from "./CustomeButton";

const HeaderStyle = styled(AppBar)({
  background: "#4caf50",
  position: "static",
  height: "75px",
});

const Component = styled(Typography)({
  marginLeft: "400px",
  lineHeight: "0",
});

const LoginComponent = styled(Box)({
margin:'0 5% 0 auto',
})
export function Header() {
  return (
    <>
      <HeaderStyle>
        <Toolbar>
          <Component>
            <img src={Icon} alt="logo" style={{ width: "55px", marginTop:'15px' }} />
            <Box>
              <Typography style={{ fontSize: "15px", fontStyle: "italic", display:'flex'}}>
                Explore &nbsp;&nbsp;
                <Typography component="span" style={{ color: "#FFE500" }}>
                  More
                </Typography>
              </Typography>
            </Box>
          </Component>
          <Search />
          <LoginComponent>
            <CustomeButton />
          </LoginComponent>
        </Toolbar>
      </HeaderStyle>
    </>
  );
}
