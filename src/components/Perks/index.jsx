import React, { Component } from 'react';

import {Row, Col , Button} from 'antd';
import StepsHeader from '../stepsHeader';
import Under from '../../assets/Under Construction.png';

class Perks extends Component {
    state={
       
        nextStep : 0,
        disable : false,
    }
    handleOnClick = () =>{
        this.setState((state,props)=>({nextStep:state.nextStep+1 , disable:true}));
        this.props.history.push('/recruiting');
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
          <Button onClick={this.handleOnClick}>Next:Recruiting</Button>
             
          </Col>
      </Row>
      <img src={Under} style={{width:'700px',height:'500px', marginLeft:'336px',position:'relative',bottom:'120px'}} alt="Under Contruction"></img>
        
          </div>
          </>
        )
    }
}

export default Perks;