import { useContext, createContext, useState } from "react";
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [globalVariable, setGlobalVariable] = useState(false);

    return (
        <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}

GlobalProvider.propTypes = {
    children: PropTypes.node
};
