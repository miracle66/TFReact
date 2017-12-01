import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Side } from './../side/index';
import { LJMenu } from './../ljMenu/index';
import { Detail } from './../detail/index';
import { About } from './../about/index';
import {Html} from './../link/index';
import {Demo} from './../reactDemo/index';
import './index.css';

const reactData = [
    { 'key': '0', 'disabled': false, 'icon': 'appstore', 'content': 'React 学习' , 'sub':[
        { 'key': '0.0', 'disabled': false, 'content': 'React 中国',  'url': 'http://www.react-cn.com/api/componentDidMount.html'},
        { 'key': '0.1', 'disabled': false, 'content': 'React Demo', 'path': '/reactDemo/'},
        { 'key': '0.2', 'disabled': false, 'content': 'React 教程',  'url': 'http://www.runoob.com/react/react-install.html'}
    ] },
    { 'key': '1', 'disabled': false, 'icon': 'mail', 'content': 'Ant 教程', 'sub':[
        { 'key': '1.0', 'disabled': false, 'content': 'Tabs 教程', 'url':'http://www.runoob.com/react/react-install.html' },
        { 'key': '1.1', 'disabled': false, 'content': 'Antd Demo', 'path': '/about/'},
        { 'key': '1.2', 'disabled': false, 'content': 'Tooltip 文字提示', 'path': '/reactDemo/'}
    ] },
    { 'key': '2', 'disabled': false, 'icon': 'ie', 'content': 'React 中国', 'url':'http://www.react-cn.com/api/componentDidMount.html' , 'sub':[
        { 'key': '2.0', 'disabled': false, 'content': 'Table 表格', 'path': '/reactDemo/'},
        { 'key': '2.1', 'disabled': false, 'content': 'Modal 对话框'},
        { 'key': '2.2', 'disabled': false, 'content': 'Message全局提示'}
    ] },
];

const javaData = [
    { 'key': '0', 'disabled': false, 'icon': 'mail', 'content': 'JAVA' , 'sub':[
        { 'key': '0.0', 'disabled': false, 'content': 'JAVA介绍'},
    ] },
    { 'key': '1', 'disabled': false, 'icon': 'ie', 'content': 'JAVA运行时' , 'sub':[
        { 'key': '1.0', 'disabled': false, 'content': 'JAVA环境'},
        { 'key': '1.1', 'disabled': false, 'content': 'JAVA变量'},
        { 'key': '1.2', 'disabled': false, 'content': 'JAVA状态机'}
    ] },
    { 'key': '2', 'disabled': false, 'icon': 'solution', 'content': '数据库', 'sub':[
        { 'key': '2.0', 'disabled': false, 'content': 'SQL'},
        { 'key': '2.1', 'disabled': false, 'content': 'Mysql'},
        { 'key': '2.2', 'disabled': false, 'content': 'Nosql'}
    ]  },
];

const webData = [
    { 'key': '0', 'disabled': false, 'icon': 'mail', 'content': 'web 语言' , 'sub':[
        { 'key': '0.0', 'disabled': false, 'content': 'PHP'},
        { 'key': '0.1', 'disabled': false, 'content': 'Python'},
        { 'key': '0.2', 'disabled': false, 'content': 'JavaScript'}
    ] },
    { 'key': '1', 'disabled': false, 'icon': 'ie', 'content': 'web 服务器' , 'sub':[
        { 'key': '1.0', 'disabled': false, 'content': 'Tomcat'},
        { 'key': '1.1', 'disabled': false, 'content': 'Apache'},
        { 'key': '1.2', 'disabled': false, 'content': 'Nginx'}
    ] },
];

const iosData = [
    { 'key': '0', 'disabled': false, 'icon': 'ie', 'content': 'IOS系统', 'sub':[
        { 'key': '0.0', 'disabled': false, 'content': 'UIKit 框架'},
        { 'key': '0.1', 'disabled': false, 'content': 'Foundtion 框架'},
        { 'key': '0.2', 'disabled': false, 'content': 'OC 运行时'}
    ] },
    { 'key': '1', 'disabled': false, 'icon': 'solution', 'content': 'IOS语言' , 'sub':[
        { 'key': '1.0', 'disabled': false, 'content': 'Swift'},
        { 'key': '1.1', 'disabled': false, 'content': 'Object C'}
    ] },
];

const menuData = [
    { 'key': 'React开发', 'disabled': false, 'icon': 'appstore', 'content': 'React开发' },
    { 'key': 'Java开发', 'disabled': false, 'icon': 'mail', 'content': 'Java开发' },
    { 'key': 'Web开发', 'disabled': false, 'icon': 'ie', 'content': 'Web开发' },
    { 'key': 'Github资源', 'disabled': false, 'icon': 'solution', 'content': 'Github资源' },
];

class APP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            menuList: [],
            sideList: [],
            allList: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // this.timerId = setTimeout(() => {
        // this.setState({ menuList: iosData });
        // }, 1000);
        this.state.allList.push(reactData);
        this.state.allList.push(javaData);
        this.state.allList.push(webData);
        this.state.allList.push(iosData);
        // console.log(this.state.allList);
        this.setState({
            sideList: this.state.allList[0]
        });
    }

    handleChange(event) {
        console.log('event',event);
        this.setState({
            sideList: this.state.allList[event]
        });
        let link = '/detail/' + menuData[event].key;
        hashHistory.push(link);
    }
    // changeSiderData=(key)=>{
    //     console.log('key');
    //     console.log(key);
    //     if (key === '1'){
    //         hashHistory.push('/link/ie>前端基础>HTML5?link=http://www.w3school.com.cn/html5/index.asp');
    //         this.setState({
    //             sideList: webData
    //         });
    //     }
    //     else{
    //         hashHistory.push('/detail/'+key);
    //         this.setState({
    //             sideList: iosData
    //         });
    //     } 
    // }

    render() {
        return (
            <div style={{width:'100%',height:'100%',overflow:'hidden'}}>
                <LJMenu menuList={this.state.menuList} callback={this.handleChange}/>
                <div className='center'>
                    <div className='sider'>
                        <Side menuList={this.state.sideList}/>
                    </div>
                    <div className='content'>
                        <Router history={hashHistory}>
                            <Route path="/"/>
                            <Route path="/detail/(:path)" component={Detail}/>
                            <Route path="/about/(:path)" component={About}/>
                            <Route path="/link/(:path)" component={Html}/>
                            <Route path="/reactDemo/(:path)" component={Demo}/>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}
export { APP };