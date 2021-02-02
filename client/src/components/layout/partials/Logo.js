import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
        <Image
        src={require('./../../../assets/images/logo.svg')}
        alt="Open"
        width={32}
        height={32} />
    </div>
  );
}

export default Logo;