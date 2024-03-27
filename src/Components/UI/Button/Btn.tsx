import React from 'react';
import './Btn.scss';

interface BtnPropsType {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  styles?: { [key: string]: string };
}

function Btn({
  children,
  onClick,
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
