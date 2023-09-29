import { List, ListItem, Typography } from "@mui/material";
import { useAuth } from "hooks"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <List sx={{
            display: 'flex',
            marginLeft: '30px',
        }}>
            <ListItem>
                <Typography>
                    <NavLink to="/">Home</NavLink>
                </Typography>
            </ListItem>
            <ListItem>
                {isLoggedIn && (
                    <Typography>
                        <NavLink to="contacts">Contacts</NavLink>
                    </Typography>)}
            </ListItem>
        </List>                
    )
};

export default Navigation;