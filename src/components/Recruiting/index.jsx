import React, {Component} from 'react';

import {Row, Col, Button} from 'antd';
import StepsHeader from '../stepsHeader';
import Under from '../../assets/Under Construction.png';

class Recruiting extends Component {
    state = {
        nextStep: 0,
        disable: false,
    }
    handleOnClick = () => {
        this.setState((state, props) => ({nextStep: state.nextStep + 1, disable: true}));
        this.props.history.push('/promotions');
        console.log(this.state)
    }

    render() {
        return (
            <>
                <StepsHeader nextStep={this.state.nextStep}></StepsHeader>
                <div className="content">
                    <Row>
                        <Col span={8} offset={8}>

                        </Col>
                        <Col span={8}>
                            <Button onClick={this.handleOnClick}>Next:Promotions</Button>

                        </Col>
                    </Row>

                    <Row>
                        <Col span={8} offset={1}>
                            <label>Assigned Budget</label>
                            <label style={{fontSize: '11.5px'}}>Write a clear, brief title that helps people quickly
                                understand
                                the gist of your project.</label>
                        </Col>
                        <Col span={10} offset={4}>
                            <label>Total Budget For Project</label>
                            <Row>
                                <Col span={6}>
                                    <input type="text" name="amount" style={{textAlign: "center"}}
                                           placeholder="Freefund : Projects get incubated here"
                                           value={this.state.amount} onChange={this.handleOnChange}></input>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={1}>
                            <label>No of freelancers required</label>
                            <label style={{fontSize: '11.5px'}}>Write a clear, brief title that helps people quickly
                                understand
                                the gist of your project.</label>
                        </Col>
                        <Col span={10} offset={4}>
                            <label>Count</label>
                            <Row>
                                <Col span={6}>
                                    <input type="text" name="amount"
                                           placeholder="Technology" style={{textAlign: "center"}}
                                           value={this.state.amount} onChange={this.handleOnChange}></input>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Recruiting;