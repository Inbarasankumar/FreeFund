import React, { Component } from 'react';

import {Row, Col , Button} from 'antd';
import StepsHeader from '../stepsHeader';
import Under from '../../assets/Under Construction.png';

class Recruiting extends Component {
    state={
        nextStep : 3,
        disable : false,
    }
    handleOnClick = () =>{
        // this.setState((state,props)=>({nextStep:state.nextStep+1 , disable:true}),() => {
        //     this.props.history.push('/promotions');});
        this.props.history.push('/promotions');
        console.log(this.state)
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
          <Button onClick={this.handleOnClick}>Next:Promotions</Button>
             
          </Col>
      </Row>
      <img src={Under} style={{width:'700px',height:'500px', marginLeft:'336px',position:'relative',bottom:'120px'}} alt="Under Contruction"></img>
         
        
          </div>
          </>
        )
    }
}

export default Recruiting;