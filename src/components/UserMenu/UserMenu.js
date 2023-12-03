import { Button, List, ListItem, Typography } from "@mui/material";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();    
    
    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <List sx={{
            display: "flex"
        }}>
            <ListItem>
                <Typography>Welcome, {user.email} </Typography>
                </ListItem>
            <ListItem>
                <Button type="button" onClick={handleLogOut} variant="contained">Logout</Button>                
            </ListItem>
        </List>
    )
};

export default UserMenu;