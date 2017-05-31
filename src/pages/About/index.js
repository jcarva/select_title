import React from 'react'
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

// Require About component style
require('./style.sass');

export default () => {
  return(
    <div id="about">
      <Content style={{ padding: '0 50px' }}>
        <Row>
          <Col span={12} offset={6}>
            <Row type="flex" justify="center">
              <h1>
                A simple project to fecthData from an api and show the informations as a sortable and filterable list.
                Using cutting-edge tecnologies you can use the skeleton of the repository to make great applications.
              </h1>
              <h1 id="source">You can check the source code <a href="https://github.com/jcarva/select_title">here</a>.</h1>
            </Row>
          </Col>
        </Row>
      </Content>
    </div>
  )
};
