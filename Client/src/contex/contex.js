import { createContext, useContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";

// Create Context MailContex
const EcommerceContex = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "ACCOUNT": {
      return { ...state, account: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Contex Provider Function
function EcommerceProvider({ children }) {
  const initialState = {
    account:('')
  };
  const [controller, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
  return (
    <EcommerceContex.Provider value={value}>
      {children}
    </EcommerceContex.Provider>
  );
}

function useEcommerceContexController() {
  const context = useContext(EcommerceContex);
  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }
  return context;
}

EcommerceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions

const setAccount = (dispatch, value) => {
  dispatch({ type: "ACCOUNT", value });
};

export { EcommerceProvider, useEcommerceContexController, setAccount };
