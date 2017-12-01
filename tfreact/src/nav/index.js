import React, { Component } from 'react';
import { Menu, Icon, Avatar, Row, Col, Tabs} from 'antd';

class LJNav extends React.Component {

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            // <h1>hello world</h1> 
            <div className='nav'>
                <h1>hello world</h1> 
            </div>
        );
    }
}

export { LJNav };