import React, { Component } from 'react';

import {Row, Col , Button , DatePicker , Card} from 'antd';
import StepsHeader from '../stepsHeader';
import apiClient from '../apiClient/apiClient';
import './perks.scss';

class Perks extends Component {
    state={
       
        nextStep : 2,
        disable : false,
        perks:[],
        perkTitle:'',
        perkDescription:'',
        amount : '',
        benefits:'',
        delivery:''
    }
    onChange = (date,dateString) =>{
       this.setState({delivery: dateString})
        console.log(date, dateString);
    }
    handleOnClick = () =>{
        // this.setState((state,props)=>({nextStep:state.nextStep+1 , disable:true}),() => {
        //     this.props.history.push('/recruiting');});
        const projectId = this.props.location.state.response.projectId;
            this.props.history.push('/recruiting',{response:projectId});
        console.log(this.state)
    }
    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleOnClickNew= async () =>{   
        
        const perkObj = {
            perkTitle:this.state.perkTitle,
            perkDescription:this.state.perkDescription,
            amount:this.state.amount
            , benefits:this.state.benefits , 
            delivery:this.state.delivery}
        //const newObj = Object.create(perkObj);
        const requestObj = {
            benefit:this.state.benefits,
            description:this.state.perkDescription,
            estimatedDelivery:this.state.delivery,
            pledgedAmount:this.state.amount,
            projectId:this.props.location.state.response.projectId,
            title : this.state.perkTitle
        }
        const JsonObj = JSON.stringify(requestObj);
        console.log(perkObj);
        const respon= await apiClient.post("/iam/api/v1/perks",JsonObj);
        console.log(respon)
        await this.setState({perks:[...this.state.perks,perkObj]})
        this.setState({perkTitle:'',perkDescription:'',amount:'',benefits:'',delivery:''})
        console.log(this.state)
    }

    colorcreator = () =>{
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    render(){
        const {perks} = this.state;
        
       
        return(
            <> 
            <StepsHeader nextStep={this.state.nextStep}></StepsHeader>   
            <div className="content">
      <Row>
          <Col span={8} >
             
              <Row gutter={16}>
              {perks.map((perk)=>{
                  console.log(perk)
                  return <Col span={8}><Card title={perk.perkTitle} style={{borderLeftColor:this.colorcreator(),borderLeftWidth:'thick'}} bordered> </Card> </Col>
              })}
      {/* <Col span={8}>
        <Card title="Card title" bordered >
          
        </Card>
      </Col>
      <Col span={8}>
      <Card title="Card title" bordered>
          
          </Card>
      </Col>
      <Col span={8}>
      <Card title="Card title" bordered>
          
          </Card>
      </Col> */}
    </Row>


          </Col>
          <Col span={8} offset={7}>
          <Button onClick={this.handleOnClick}>Next:Recruiting</Button>
             
          </Col>
      </Row>
      <Row >
                <Col span={6} offset={1}>
                    <label>Perk</label>
                    <label style={{fontSize: '11.5px'}}>Describe about your perks title and description.</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Perk Title</label>
                    <input type="text" name="perkTitle" placeholder=" Get VIP Access to meet one of our authors and be there live when we’re filming on production." 
                    value={this.state.perkTitle} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    
                </Col>
                <Col span={10} offset={4} >
                    <label>Perk Description</label>
                    <input type="text" name="perkDescription" placeholder=" Post - Fund - Incubate" value={this.state.perkDescription} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    <label>Pledged amount</label>
                    <label style={{fontSize: '11.5px'}}>Specify the pledged amount</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Amount</label>
                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    <label>Benefits</label>
                    <label style={{fontSize: '11.5px'}}>Add your benefits</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>List of benefits</label>
                    <input type="text" name="benefits" placeholder=" You get 2 months subscription fee, You get premium themes."value={this.state.benefits} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    <label>Estimated Delivery</label>
                    <label style={{fontSize: '11.5px'}}>Specify delivery time for your perk.</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Delivery date</label>
                    <DatePicker onChange={(date, dateString)=>this.onChange(date,dateString)} />
                </Col>
                </Row> 
                <Row>
          <Col span={8} offset={8}>
             
          </Col>
          <Col span={8} >
          <Button onClick={this.handleOnClickNew}>Add New</Button>
             
          </Col>
      </Row>  
          </div>
          </>
        )
    }   
}

export default Perks;