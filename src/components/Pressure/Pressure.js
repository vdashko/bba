import React, {Component} from "react";
import {connect} from "react-redux";

//UI
import {Col, Card, Slider} from "antd";
// actions
import {onChangePressure} from "../../redux/pressure/actions"


class Pressure extends Component {

    marks = {
        970: 970,
        1030: {
            style: {
                color: '#ff6e09',
            },
            label: 1030,
        }
    };

    tipFormatter = (value) => `${value} hPa`;

    render(){
        return (
            <Col span={11}>
                <Card title="Pressure" bordered={false}>
                    <Slider
                        min={970}
                        max={1030}
                        defaultValue={this.props.hPa}
                        tipFormatter={this.tipFormatter}
                        marks={this.marks}
                        onAfterChange={this.props.onChangePressure}
                    />
                </Card>
            </Col>
        )
    }
};

const mapStateToProps = state => ({
    hPa : state.pressure.hPa
});

const mapDispatchers = {
    onChangePressure
};

export default connect(mapStateToProps, mapDispatchers)(Pressure);