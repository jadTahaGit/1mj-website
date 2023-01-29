/** @jsxImportSource theme-ui */
//import { Image } from 'theme-ui';
import NextImage from './next-image';
import { Link } from './link';
import logo from '../assets/logos/the-logo.svg';

export default function Logo({ ...rest }) {
  return (
    <Link
      isNotScrollable={true}
      path="/"
      sx={{
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        width: 90,
      }}
      {...rest}
    >
      <NextImage src={logo} alt="Kaidezen logo" />
    </Link>
  );
}
