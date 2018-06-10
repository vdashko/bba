import React, {Component} from "react";
import {connect} from "react-redux";

//UI
import {Col, Card} from "antd";
import {Bar} from 'react-chartjs-2';
import moment from 'moment'





class AmountRainFall extends Component {
    render(){
        return (
            <Col span={11}>
                <Card title="Chance of rain" bordered={false}>
                    <Bar
                        height={60} width={100}
                        data={{
                            labels: Array.from(new Array(7),(val,index)=> moment().day(index).format('DD/MM')),
                            datasets: [{data: this.props.foreCast.map(el => el.amount), backgroundColor: "#1DD3B0"}]

                        }}
                        options={{
                            responsive: true,
                            legend: {
                                display: false
                            },
                            tooltips: {
                                callbacks: {
                                    label: function (tooltipItem, data) {
                                        return tooltipItem.yLabel.toFixed(2)
                                    }
                                }
                            },
                        }}
                    />
                </Card>
            </Col>
        )
    }
};

const mapStateToProps = state => ({
    foreCast : state.foreCast.days
});

const mapDispatchers = {

};

export default connect(mapStateToProps, mapDispatchers)(AmountRainFall);