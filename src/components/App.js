import React, {Component} from "react";


// //components
import Title from "./Title";
import Pressure from "./Pressure";
import Temperature from "./Temperature";
import ChanceRain from "./ChanceRain";
import AmountRainFall from "./AmountRainFall";
//UI
import { Layout, Row } from 'antd';
const { Header, Content } = Layout;

export default class App extends Component {
    render(){
        return (
            <Layout className="App">
                <Header className="Header"><Title/></Header>
                <Content className="Content">

                        <Row type="flex" align="middle" justify="space-around">
                            <Pressure />
                            <Temperature/>
                        </Row>
                        <Row type="flex" align="middle" justify="space-around" style={{marginTop: 60}}>
                            <ChanceRain />
                            <AmountRainFall/>
                        </Row>

                </Content>
            </Layout>
        )
    }
}