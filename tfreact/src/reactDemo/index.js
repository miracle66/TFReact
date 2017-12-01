import React from 'react';
import { Tabs, Collapse } from 'antd';

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
class Demo extends React.Component {

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    callback(key) {
        console.log(key);
    }


    render( ) {

        const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;
        return (
            // <h1>hello world</h1> 
            <div>
                <h1>This is Antd Tabs</h1>
                <Tabs defaultActiveKey="1" onChange={this.callback} style={{backgroundColor:'#ffffff'}}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
                <br />
                <br />
                <br />
                <h1>This is Antd Collapse 折叠</h1>
                <Collapse accordion style={{backgroundColor:'#1088e9'}}>
                    <Panel header={'This is panel header 1'} key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header={'This is panel header 2'} key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header={'This is panel header 3'} key="3">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export { Demo };