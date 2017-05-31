import React from 'react'
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

// Require NoMatch component style
require('./style.sass');

export default () => {
  return(
    <div id="no-match" className="nb-error">
      <Content style={{ padding: '0 50px' }}>
        <Row>
          <Col span={12} offset={6}>
            <Row type="flex" justify="center">
              <Col span={6}>
                <div>
                  <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" width="313" height="428" alt="Girl has dropped her ice cream."/>
                </div>
              </Col>
              <Col span={6} offset={4}>
                <div className="error-code">404</div>
                <h3 className="font-bold">We couldn't find the page..</h3>
                <div className="error-desc">
                  Sorry, but the page you are looking for was either not found or does not exist. <br/>
                  Try refreshing the page or click on the navigation bar buttons.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </div>
  )
};
