import React from 'react';
import { Card } from 'antd';
import './index.css';

class About extends React.Component {

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render( ) {
        return (
            // <h1>hello world</h1> 
            <div>
                <h1>Hello world Girl</h1> 
                <Card style={{ width: 240, left: '35%'}} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="custom-card">
                        <h3>Europe Street beat</h3>
                        <p>www.instagram.com</p>
                    </div>
                </Card>
            </div>
        );
    }
}

export { About };