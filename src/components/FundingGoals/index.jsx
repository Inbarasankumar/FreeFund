import React, { Component } from 'react';
import{Row , Col , Button} from 'antd';

import  './fundingGoals.scss';
import StepsHeader from '../stepsHeader';

class FundingGoals extends Component{

    state={
        amount: 0,
        nextStep : 1,
        disable : false,
    }
  
    handleOnClick = () =>{
        
        // this.setState((state,props)=>({nextStep:state.nextStep+1 , disable:true}),() => {
        //     this.props.history.push('/perks');});
        console.log(this.state);
        this.props.history.push('/perks');
    }
    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
        
        return(
                  <> 
                  <StepsHeader nextStep={this.state.nextStep}></StepsHeader>   
                  <div className="content">
            <Row>
                <Col span={8} offset={8}>
                    
                </Col>
                <Col span={8} >
                <Button onClick={this.handleOnClick}>Next:Perks</Button>
                   
                </Col>
            </Row>
            <Row >
                <Col span={6} offset={1}>
                    <label>Project Budget</label>
                    <label style={{fontSize: '11.5px'}}>Write a clear, brief title that helps people quickly understand 
the gist of your project.</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Global About</label>
                    <Row>
                    <Col span={3}>
                    <input style={{width:'35px'}} type="text" placeholder=" USD "></input>
                    </Col>
                    <Col span={6} >
                    <input type="text" name="amount" placeholder=" Enter the amount" value={this.state.amount} onChange={this.handleOnChange}></input>
                    </Col>
                    </Row>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    
                </Col>
                <Col span={10} offset={4} >
                    <Row>
                        <Col span={6}>
                    <label>Freefund fee: 5%</label>
                    </Col>
                    <Col span={3} offset={4}>
                    <label style={{fontSize:'18px'}}>$ 100</label>
                    </Col>
                    </Row>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                   
                </Col>
                <Col span={10} offset={4} >
                <Row>
                        <Col span={6}>
                    <label>Processing fee: 2%</label>
                    </Col>
                    <Col span={3} offset={4}>
                    <label style={{fontSize:'18px'}}>$ 100</label>
                    </Col>
                    </Row>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                  
                </Col>
                <Col span={10} offset={4} >
                <Row>
                        <Col span={6}>
                    <label >Total goal amount:</label>
                    </Col>
                    <Col span={3} offset={4}>
                    <label style={{color:'#3179ce',fontSize:'20px'}}>$ 200</label>
                    </Col>
                    </Row>
                </Col>
                </Row>
              
                </div>
                </>
                
        )
    }
}

export default FundingGoals;