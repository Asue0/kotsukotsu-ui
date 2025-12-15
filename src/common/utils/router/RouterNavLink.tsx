import { forwardRef } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

// ListItemButton 오류 문구 해결을 위한 컴포넌트
const RouterNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function RouterNavLink(props, ref) {
    return <NavLink ref={ref} {...props} />;
  }
);

export default RouterNavLink;
