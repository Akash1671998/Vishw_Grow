import { Typography, Box } from "@mui/material";
import { navData } from "../staticData/StaticData";
import styled from "@emotion/styled";

const MainBox = styled(Box)({
  display: "flex",
  margin:'55px, 130px , 0 , 130px',
  justifyContent:'space-around',
});


const DataBox = styled(Box)({
    padding:'12px,8px',
   alignItems:'center',
})

const Text=styled(Typography)({
    fontSize:'14px',
    fontFamily:'inherit'     

})
export function Navbar() {
  return (
    <>
      <MainBox>
        {navData.map(item => {
            return(
                <>
                  <DataBox>
              <img src={item.url} alt="now" style={{width:'74px'}} />
              <Text>{item.text}</Text>
            </DataBox>
                </>
            )
          
          })}
      </MainBox>
    </>
  );
}
