import React from 'react';
import { Menu, Icon, Row, Col} from 'antd';

const menuData = [
    { 'key': '0', 'disabled': false, 'icon': 'appstore', 'content': 'React开发' },
    { 'key': '1', 'disabled': false, 'icon': 'mail', 'content': 'Java开发' },
    { 'key': '2', 'disabled': false, 'icon': 'ie', 'content': 'Web开发' },
    { 'key': '3', 'disabled': false, 'icon': 'solution', 'content': 'IOS开发' },
];

class LJMenu extends React.Component {
  static navArray;
  constructor(props) {
      super(props);
      this.state = {
          current: '0'
      // navArray: {},
      };
      this.initMenu();
      this.handleClick = this.handleClick.bind(this);
  }
  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //       menuList: newProps.menuList
  //   });
  //   console.log('this.props.menuList');
  //   console.log(newProps.menuList);
  // }

  initMenu = () => {
      this.navArray = menuData.map((item) =>
          <Menu.Item key={item.key} disabled={item.disabled}>
              <Icon type={item.icon} />{item.content}
          </Menu.Item>);
  }

  handleClick = (e) => {
      // console.log('click ', e);
      this.setState({
          current: e.key,
      });
      this.props.callback(e.key);
  }
  render() {
      return (
          <div>
              <Row type="flex" align="middle" style={{height:'100%'}}>
                  <Col style={{marginLeft:'180px', marginTop:'3px'}}> 
                      <img className='logo' src={require('./../../res/images/mylogo.png')} alt='加载失败'></img>
                  </Col>
                  <Col span={17}>         
                      <Menu
                          onClick={this.handleClick}
                          selectedKeys={[this.state.current]}
                          mode="horizontal"  //vertical  horizontal
                      >
                          {this.navArray} 
                      </Menu>
                  </Col>
              </Row>
          </div>);
  }
}

export { LJMenu };