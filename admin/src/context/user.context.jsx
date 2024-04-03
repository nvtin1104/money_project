import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';


const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const token = localStorage.getItem('token');
    useMemo(() => {
        if (token) {
            setUser(true);
        }
    }, [token]); 
 
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export { UserContext, UserProvider };
