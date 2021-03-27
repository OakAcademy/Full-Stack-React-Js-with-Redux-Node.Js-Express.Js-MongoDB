import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => { 

	const [isLoggedIn, setIsloggedIn] = useState(false);

	const changeAuthStatus = () => {
		setIsloggedIn(!isLoggedIn);
	};

	return(
		<AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }} >
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider;