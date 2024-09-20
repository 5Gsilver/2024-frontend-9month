/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext

export const useTheme = () => useContext(ThemeContext)


function Themeprovider({Children}) {
	const value = {
		theme,
		setTheme
	}

	return <ThemeContext.Provider value={{value}}>{Children}</ThemeContext.Provider>
}

export default Themeprovider