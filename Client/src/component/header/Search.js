import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const InputComponent =styled(Box)({
    background:'#fff',
    width:'350px',
    borderRadius:'2px',
    marginLeft:'60px',
    display:'flex',
})
const SearchField = styled(InputBase)({
paddingLeft:'10px',
fontSize:'unset',  
display:'flex',
})
export function Search(){
    return(
        <>
        <InputComponent>
        <SearchField
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for Products,more..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Box>
      <SearchOutlinedIcon color="action" style={{padding:'10px'}}/>
      </Box>
     
        </InputComponent>
        </>
    )
}