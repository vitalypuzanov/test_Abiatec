import Button from '../Button';
import {useCallback} from 'react';

import React from 'react';

const FetchMoreButton = ({showDetail}) => {
  const onSubmit = useCallback(() => showDetail(), [showDetail]);
  return <Button onClick={onSubmit}>Get more</Button>;
};

export default FetchMoreButton;
