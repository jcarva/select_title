import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

// Require Footer component style
require('./style.sass');

export default (props) => {
  return (
    <div id="footer">
      <Footer>
        <p>Select Title ©2017 Created by <a href="https://github.com/jcarva">Jaelson Carvalho</a></p>
      </Footer>
    </div>
  )
};
