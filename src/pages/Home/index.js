import React  from 'react'
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

// Require Home style
require('./style.sass');

export default () => {
  return(
    <div id="home">
      <Content>
        <Row>
          <Col span={12} offset={6}>
            <h1>Home Page</h1>
          </Col>
        </Row>
      </Content>
    </div>
  )
};
