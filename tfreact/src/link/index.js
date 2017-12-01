import React, {  Component } from 'react';
// import { Title } from './../title/index';

class Html extends Component {

    render() {
        return(
            <div style={{width: '100%',height:1000 }}>
                {/* <Title path={this.props.params.path} /> */}
                <iframe style={{marginTop:20}} src ={this.props.location.query.link} frameBorder="0" 
                    width='100%' height='100%' 
                    sandbox="allow-same-origin allow-scripts allow-top-navigation allow-forms">
                    <p>Your browser does not support iframes.</p>
                </iframe>
            </div>
        );
    }
}
export {Html};