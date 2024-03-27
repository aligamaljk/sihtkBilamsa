import React from 'react';
import './Btn.scss';
import { Link } from 'react-router-dom';

interface BtnPropsType {
  children: React.ReactNode;
  to?: string;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  size?: 'sm' | 'md' | 'lg';
  styles?: { [key: string]: string };
}

function Btn({
  children,
  onClick,
  to,
  size = 'md',
  styles
}: BtnPropsType) {
  const sizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
  };

  const btnStyles = {
    border: '2px solid white',
    color: 'white',
    ...styles
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`btn ${sizes[size]}`}
        style={btnStyles}
      >
        {' '}
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`btn ${sizes[size]}`}
      style={btnStyles}
    >
      {children}
    </button>
  );
}

export default Btn;
