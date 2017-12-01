import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {APP} from './app/index';
import './index.css';
// npm run dev
ReactDOM.render(
    <div>
        {/* <BackTop>
            <div className="ant-back-top-inner">UP</div>
        </BackTop> */}
        {/* Scroll down to see the bottom-right
        <strong style={{ color: '#1088e9' }}> blue </strong>
        button.
        <LJNav>
       </LJNav> */}
        <APP>
        </APP>
    </div>,
    document.getElementById('app')
);