import React, {Component} from 'react';

import {Row, Col, Button} from 'antd';
import StepsHeader from '../stepsHeader';
import Under from '../../assets/Under Construction.png';
import Card from "antd/es/card";
import Images from "../assets/images";
 import CardDetail from '../common/CardDetail';

class Promotions extends Component {
    state={
        nextStep : 4,
        disable : false,
    }
    handleOnClick = () => {
        // this.setState((state,props)=>({nextStep:state.nextStep+1 , disable:true}));
        this.props.history.push('/myprojects');
        console.log(this.state)
    }

    render() {
        return (
            <>
                <StepsHeader nextStep={this.state.nextStep}></StepsHeader>
                <div className="content">
                    <Row>
                        <Col span={8} offset={8}></Col>
                        <Col span={8}>
                            <Button onClick={this.handleOnClick}>Start Campaign</Button>

                        </Col>
                    </Row>
                    <Row>
                        <Col  span={6} offset={1} >
                             <CardDetail title={'Basic'} className="border-radius"/>
                        </Col>
                        <Col  span={6} offset={1} className="border-radius">
                            <CardDetail title={'Pro'} className="border-radius"/>
                        </Col>
                        <Col span={6} offset={1} className="border-radius">
                            <CardDetail title={'Premium'} className="border-radius"/>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Promotions;