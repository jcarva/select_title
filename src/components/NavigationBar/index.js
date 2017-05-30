import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

// Require NavigationBar component style
require('./style.sass');


class NavigationBar extends React.Component {
  state = {
    current: 'mail'
  };
  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Header className="header">
        <Menu
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="home">
            <NavLink to="/home">Select Title Project</NavLink>
          </Menu.Item>
          <Menu.Item key="about">
            <NavLink to="/about">About</NavLink>
          </Menu.Item>
          <Menu.Item key="noMatch">
            <NavLink to="/gag3ahlapndfns73">No Match</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default NavigationBar;
