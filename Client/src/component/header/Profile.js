import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { setAccount, useEcommerceContexController } from "../../contex/contex";
import { useState } from "react";
import styled from "@emotion/styled";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const MenuComponent = styled(Menu)({
  marginTop: "25px",
});

export function Profile({ account }) {
  const [controller, dispatch] = useEcommerceContexController();
  const { darkMode } = controller;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const logout = () => {
    setAccount(dispatch, "");
  };
  return (
    <>
      <Box
        onClick={(e) => handleOpen(e)}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Typography style={{ marginTop: "2px", cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>

      <MenuComponent
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        // open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon color="action" fontSize="small" />

          <Typography style={{ fontSize: "14px", marginLeft: "20px" }}>
            Logout
          </Typography>
        </MenuItem>
      </MenuComponent>
    </>
  );
}
