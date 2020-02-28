import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const layout = props => (
  //   <React.Fragment> // Alternative to HOC Auxiliary component.
  <Auxiliary>
    <div>Toolbar, sideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Auxiliary>
);
export default layout;
