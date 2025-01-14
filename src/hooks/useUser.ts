import React from "react";
import {AuthContext} from "../contexts/AuthContext.tsx";


export const useUser = () => React.useContext(AuthContext);