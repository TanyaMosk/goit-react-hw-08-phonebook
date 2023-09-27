import { useAuth } from "hooks";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();    
    
    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div>
            <h2>Welcome, {user.name} </h2>
            <button type="button" onClick={handleLogOut}>Logout</button>
        </div>
    )
};