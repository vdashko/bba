import React, {Component} from "react";
import {connect} from "react-redux";

//UI
import {Col, Card, Slider} from "antd";
// actions
import {onChangeTemperature} from "../../redux/temperature/actions"


class Temperature extends Component {

    marks = {
        10: 10,
        35: {
            style: {
                color: '#ff6e09',
            },
            label: 35,
        }
    };

    tipFormatter = (value) => `${value} C`;

    render(){
            return (
                <Col span={11}>
                    <Card title="Temperature" bordered={false}>
                        <Slider
                            min={10}
                            max={35}
                            defaultValue={this.props.C}
                            tipFormatter={this.tipFormatter}
                            marks={this.marks}
                            onAfterChange={this.props.onChangeTemperature}
                        />
                    </Card>
                </Col>
            )
    }
};

const mapStateToProps = state => ({
    C: state.temperature.C
});

const mapDispatchers = {
    onChangeTemperature
};

export default connect(mapStateToProps, mapDispatchers)(Temperature);