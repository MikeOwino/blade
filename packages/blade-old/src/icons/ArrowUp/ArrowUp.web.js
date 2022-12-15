import React from 'react';
import Icon, { IconPropTypes } from '../../atoms/Icon';

function ArrowUp(props) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L11 6.41421V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V6.41421L17.2929 10.7071C17.6834 11.0976 18.3166 11.0976 18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289L12.7071 3.29289Z" />
    </Icon>
  );
}

ArrowUp.propTypes = IconPropTypes;

ArrowUp.defaultProps = {
  size: 'medium',
  fill: 'sapphire.800',
};

export default ArrowUp;