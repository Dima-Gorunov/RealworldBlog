import React from 'react';
import { v4 as uuid } from 'uuid';

import ListContainer from '../List/ListContainer';

const Lists = (props) => {
  const Lists = props.Lists?.map((list, index) => <ListContainer List={list} key={uuid()} />) || <div>no data</div>;

  return Lists || 'no data';
};

export default Lists;
