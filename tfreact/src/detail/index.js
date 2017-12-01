import React from 'react';
import './index.css';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Welcome To '
        }
    }

    render() {
        return (
            // <h1>hello world</h1> style={{marginLeft:'24px', marginTop:'100px'}}
            // {this.props.params.path}
            <div className='content'>
                <h1 style={{width:'100%', height:'100%', marginTop:'20', marginBottom:'20', textAlign:'center'}}>
                   {this.state.text + this.props.params.path}
                </h1> 
                <img style={{width:'100%', height:'100%'}} src={require('./../../res/images/react-native.jpg')} alt='加载失败'></img>
            </div>
        );
    }
}

export { Detail };