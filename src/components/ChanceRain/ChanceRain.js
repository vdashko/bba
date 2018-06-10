import React, {Component} from "react";
import {connect} from "react-redux";

//UI
import {Col, Card} from "antd";
import {Line} from 'react-chartjs-2';
import moment from 'moment'

// actions
import {getChanceOfRain, transpose} from "../../utils"


const COLORS = ["rgba(29,211,176,0.5)", "rgba(243, 81, 81, 0.5)", "rgba(239, 212, 81, 0.5)"];

const defultLineStyle = {
    lineTension: 0.1,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 5,
    pointHitRadius: 10,
};






class ChanceRain extends Component {
    render(){
        return (
            <Col span={11}>
                <Card title="Chance of rain" bordered={false}>
                    <Line
                        height={60} width={100}
                        data={{
                            labels: Array.from(new Array(7),(val,index)=> moment().day(index).format('DD/MM')),
                            datasets: transpose(this.props.foreCast.map(day => getChanceOfRain(this.props.hPa, this.props.C, day.amount))).map((data, i) => {
                                return {
                                    label: COLORS[i],
                                    backgroundColor: COLORS[i],
                                    borderColor: COLORS[i],
                                    pointBorderColor: COLORS[i],
                                    pointHoverBackgroundColor: COLORS[i],
                                    pointHoverBorderColor: COLORS[i],
                                    ...defultLineStyle,
                                    data
                                }
                            }),

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
    hPa : state.pressure.hPa,
    C: state.temperature.C,
    foreCast : state.foreCast.days
});

const mapDispatchers = {

};

export default connect(mapStateToProps, mapDispatchers)(ChanceRain);