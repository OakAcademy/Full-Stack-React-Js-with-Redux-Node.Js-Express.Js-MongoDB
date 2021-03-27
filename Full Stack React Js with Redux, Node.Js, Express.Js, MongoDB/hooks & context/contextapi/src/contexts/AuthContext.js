import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const changeAuthStatus = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return(
		<AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }} >
			{ props.children }
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;