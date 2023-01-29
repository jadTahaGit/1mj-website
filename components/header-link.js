/** @jsxImportSource theme-ui */
import { NavLink as MenuLink, Link as A } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <MenuLink {...rest}>{children ? children : label}</MenuLink>
    </NextLink>
  );
}

export function HeaderLink({ path, label, children, i, isNotScrollable, ...rest }) {
  return (
    <>
    {isNotScrollable ?
    <A href={path}>
      {children ? children : label}
    </A>
    :
    <ScrollLink {...rest}>
      {children ? children : label}
    </ScrollLink>}
    </>
  );
}
