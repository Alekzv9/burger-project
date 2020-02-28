import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = props => (
  //   <React.Fragment> // Alternative to HOC Auxiliary component.
  <Auxiliary>
    <div>Toolbar, sideDrawer, Backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Auxiliary>
);
export default layout;
