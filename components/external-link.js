/** @jsxImportSource theme-ui */
import { Link as A } from 'theme-ui';

export function ExternalLink({ path, label, children, i, ...rest }) {
  return (
    <A {...rest} href={path} target="_blank" rel="noopener noreferrer">
      {children ? children : label}
    </A>
  );
}
