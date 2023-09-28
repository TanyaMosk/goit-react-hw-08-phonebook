import { AuthNav } from "components/AuthNav/AuthNav"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useAuth } from "hooks";
import AppBar from '@mui/material/AppBar';
import { Box } from "@mui/material";

export const Bar = () => {
    const { isLoggedIn } = useAuth();  

    return (       
            <AppBar position="static">
                <Box sx={{       
                display: 'flex', 
                justifyContent: 'space-between',
                margin: '0',                
            }}  component={'div'}>               
                  <Navigation />                
                  {isLoggedIn ? <UserMenu /> : <AuthNav />}   
                </Box>
            </AppBar>
    );
};