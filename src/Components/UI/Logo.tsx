// import { TeactComponent as Logo } from '../../assets/logo.svg?react';
import logo from '../../assets/logo.svg';

function Logo({ height = 45 }: { height?: number }) {
  return (
    <img
      src={logo}
      alt='logo'
      height={height}
      style={{ maxWidth: 'unset' }}
    />
  );
}

export default Logo;
