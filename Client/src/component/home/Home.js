import { Box } from "@mui/material";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import styled from "@emotion/styled";

const BannerBox = styled(Box)({
  padding: "20px,10px",
  background: "#F2F2F2",
});

export function Home() {
  return (
    <>
      <Navbar />
      <BannerBox>
        <Banner />
      </BannerBox>
    </>
  );
}
