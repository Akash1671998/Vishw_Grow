import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { setAccount, useEcommerceContexController } from "../../contex/contex";
import { useState } from "react";
import styled from "@emotion/styled";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



const MenuComponent = styled(Menu)({
    marginTop:'5px',
})

export function Profile({ account }) {
  const [controller, dispatch] = useEcommerceContexController();
  const { darkMode } = controller;
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout=()=>{
    setAccount("");
  }
  return (
    <>
      <Box onClick={() => handleOpen()}>
        <Typography style={{ marginTop: "2px", cursor:'pointer' }}>
          {account}
        </Typography>
      </Box>
      <MenuComponent
        id="basic-menu"
        // anchorEl={anchorEl}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose();logout();}}>
        <PowerSettingsNewIcon color="action" fontSize="small"/>

            <Typography style={{fontSize:'14px',marginLeft:'20px'}}>Logout</Typography>
        </MenuItem>
       
      </MenuComponent>
    </>
  );
}
