import React, { Component } from 'react';
import { Layout } from 'antd';

import NavigationBar from './../components/NavigationBar/index'
import FooterBar from './../components/Footer/index'

export default (props) => {
  return(
    <Layout className="layout">
      <NavigationBar/>
          {props.children}
      <FooterBar/>
    </Layout>
  )
};
