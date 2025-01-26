import {useSelector} from "react-redux";
import { userSelector } from "../../../slices/AuthSlice";
import {Navigate, Outlet} from "react-router-dom";

export const AuthRoute = () => {
  const user = useSelector(userSelector);

  if (!user?.uid) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
};