import React, {Component}  from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchData} from '../../utils/redux/home'
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

import List from '../../components/List'

// Require Home style
require('./style.sass');

class Home extends Component {

  componentWillMount () {
    this.props.fetchData()
  }

  render() {
    if(this.props.isFetching) {
      return(
        <div id="home">
          <Content>
            <Row>
              <Col span={12} offset={6}>
                <h1>Loading</h1>
              </Col>
            </Row>
          </Content>
        </div>
      )
    } else {
      return(
        <div id="home">
          <Content>
            <Row>
              <Col span={12} offset={6}>
                <List rows={this.props.rows}/>
              </Col>
            </Row>
          </Content>
        </div>
      )
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData}, dispatch)
};

const mapStateToProps = (state) => ({
  isFetching: state.home.isFetching,
  rows: state.home.rows
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
