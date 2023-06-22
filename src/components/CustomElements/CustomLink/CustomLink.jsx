import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = (props) => {
  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} {...props}>
      {props.children}
    </Link>
  );
};

export default CustomLink;
