import React, {Component} from 'react';

import {Row, Col, Button} from 'antd';
import StepsHeader from '../stepsHeader';

import apiClient from '../apiClient/apiClient';
class Recruiting extends Component {
    state={
        nextStep : 3,
        disable : false,
        freelancerCount:0,
        budget:0
    }
    handleOnClick = async () =>{
        // this.setState((state,props)=>({nextStep:state.nextStep+1 , disable:true}),() => {
        //     this.props.history.push('/promotions');});
        const requestObj = {
            budget:this.state.budget,
            freelancerCount:this.state.freelancerCount,
            projectId: this.props.location.state.response
        }
        const JsonObj = JSON.stringify(requestObj);
        const res = await apiClient.put("/api/v1/project/projects",JsonObj);
        console.log(res);
        this.props.history.push('/promotions');
        console.log(this.state)
    }
    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
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
                                    <input type="text" name="budget" style={{textAlign: "center"}}
                                           placeholder="Freefund : Projects get incubated here"
                                           value={this.state.budget} onChange={this.handleOnChange}></input>
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
                                    <input type="text" name="freelancerCount"
                                           placeholder="Technology" style={{textAlign: "center"}}
                                           value={this.state.freelancerCount} onChange={this.handleOnChange}></input>
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