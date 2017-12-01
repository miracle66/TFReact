import React from 'react';
import { Menu, Icon } from 'antd';
import { hashHistory } from 'react-router';

const SubMenu = Menu.SubMenu;

class Side extends React.Component {
    constructor(props) {
        super(props);
        this.siderArray = [];
        this.state = {
            current: '0',
            menuList: this.props.menuList
        };   
        this.initMenu();
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            menuList: newProps.menuList
        });
        console.log('this.props.menuList');
        console.log(newProps.menuList);
    }

  initMenu = () => {
      this.siderArray = this.state.menuList.map((item) => (
          <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.content}</span></span>}>
              {      
                  item.sub.map((ljitem) => (
                      <Menu.Item key={ljitem.key} disabled={ljitem.disabled}> {ljitem.content}
                      </Menu.Item>
                  )) 
              }
          </SubMenu>
      ));
  }

  handleClick = (e) => {
      // console.log('click ', e);
      // console.log('this.state.menuList ', this.state.menuList);

      let data = this.state.menuList.find((item) => {
          return item.key === e.keyPath[1];
      });
      console.log('data ', data);
      let subData = data.sub.find((item) => {
          console.log('item ', item);
          return item.key === e.key;
      });
      console.log('subData ', subData);
      if (subData.url) {
          const link = '/link/HTML5?link=' + subData.url;
          hashHistory.push(link);
      }else if (subData.path){
          hashHistory.push(subData.path);
      }
      this.setState({ current: e.key });

        //   if (parseInt(e.key) < this.state.menuList.length) {
        //       let data = this.state.menuList[parseInt(e.key)];
        //       console.log('data ', data);
        //       const subItem = data.sub[0];
        //       let item = subItem.find(item) => {
        //           return 
        //       }
        //       if (subItem.key.url) {
        //           const link = '/link/HTML5?link=' + subItem[e.key].url;
        //           hashHistory.push(link);
        //       } else if (subItem[e.key].path){
        //           hashHistory.push(subItem[e.key].path);
        //       }
        //   }else {
        //       hashHistory.push('/about/');
        //   }

        // let data = this.state.menuList.find((item) => {
        //     console.log('item', item);
        //     return item.parentKey === e.keyPath[1];
        // });

        // let sonData = data.son.find((item) => {
        //     return item.key === obj.key;
        // });
        // console.log('sonData ', sonData);
        // this.setState({
        //   current: e.key,
        // });
        //const link = (sonData.link === '' ? '' : '?link=' +sonData.link);
        //hashHistory.push(sonData.path + '/' + data.icon + '>' + data.content + '>' + sonData.content+link);
        // hashHistory.push('/link/HTML5?link=http://www.runoob.com/nodejs/nodejs-npm.html');
        // const link = '/link/HTML5?link=' + data.url;
        // hashHistory.push(link);
  }
  render() {
      this.initMenu();
      return (
          <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="inline"  //vertical  horizonta
              style={{ width: 240 }}
          >
              {this.siderArray}
          </Menu>);
  }
}

export { Side };