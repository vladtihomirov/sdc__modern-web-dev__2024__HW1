import {useMemo} from "react";
import {INavigationItem} from "../@types/INavigationItem.ts";
import {useLocation} from "react-router-dom";

export function useActiveMenuItem(navigationItems: INavigationItem[]) {
  const location = useLocation();

  return useMemo(() => {
    return navigationItems.find(item => location.pathname.startsWith(item.base)) || null;
  }, [location.pathname, navigationItems]);
}
