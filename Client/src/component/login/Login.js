
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';


const MainBox = styled(Box)({
    display: 'flex',
    height:'70vh',
    width:'90vh',
    padding:'0',
    paddingTop:'0'
})

const Images =styled(Box)({
    background: '#009688',
    width:'48px',
    height: '100%',
    padding: '45px 35px'
})

export function Login({ open, setOpen }) {


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
            >
                <MainBox>
                    <Box style={{display:'flex' ,height:'100px'}}>
                    <Box>
                        <Images>
                        <Typography variant='h3'>Login</Typography>
                        <Typography style={{marginTop:'20px'}}>Get Access To Your Order</Typography>

                        </Images>
                    </Box>

                    <Box>

                        <TextField id="name" label="Enter Number" variant="standard" />
                        <TextField id="password" label="Enter Password" variant="standard" />
                        <TextField id="name" label="Enter Number" variant="standard" />
                        <TextField id="password" label="By continuing, you agree to  Terms of Use and Privacy Policy." variant="standard" />
                        <Button>Login</Button>
                        <Typography>Or</Typography>
                        <Button>Request OTP</Button>
                        <Typography>New To Create an Account</Typography>
                    </Box>
                    </Box>
                </MainBox>
            </Dialog>
        </>
    )
}