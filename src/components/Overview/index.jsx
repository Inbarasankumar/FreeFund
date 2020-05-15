import React from 'react';
import { Component } from 'react';
import { Row , Col , DatePicker ,Button } from 'antd';

import StepsHeader from '../stepsHeader';
import '../Overview/overview.scss';
import Pencil from '../../assets/Pencil-icon.png';

class Overview extends Component{

    state={
        title : '',
        subTitle:'',
        category:'',
        location :'',
        Deadline : null,
        nextStep : 0,
        disable : false,
            }
    onChange = (date,dateString) =>{
       
            console.log(date, dateString);
        }

       
    handleOnClick = (e) =>{
        console.log('handle click state')
        this.setState({nextStep:1 , disable:true});
        this.props.history.push('/funding');
        //this.setState({disable:true})
        console.log(this.state)
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
                  <img src={Pencil} alt="Pencil Icon"></img>
                  <span className="header">Draft your business idea.</span>
                  <div className="water-text">65% projects are highly funded by this content</div>
                </Col>
                <Col span={8} >
                <Button type="primary" disabled={this.state.disable} onClick={()=>this.handleOnClick()}>Next:Funding</Button>
                   
                </Col>
            </Row>
            <Row >
                <Col span={6} offset={1}>
                    <label>Project title</label>
                    <label style={{fontSize: '11.5px'}}>Write a clear, brief title that helps people quickly understand 
the gist of your project.</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Title</label>
                    <input type="text" name="title" placeholder=" Freefund : Projects get incubated here" value={this.state.title} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    
                </Col>
                <Col span={10} offset={4} >
                    <label>Subtitle</label>
                    <input type="text" name="subTitle" placeholder=" Post - Fund - Incubate" value={this.state.subTitle} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    <label>Category</label>
                    <label style={{fontSize: '11.5px'}}>Specify the category of your Product belongs to</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Category</label>
                    <input type="text" name="category" placeholder=" Technology" value={this.state.category} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    <label>Location</label>
                    <label style={{fontSize: '11.5px'}}>Specify location where you will do production and distribution.</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Location</label>
                    <input type="text" name="location" placeholder=" Bengaluru, India"value={this.state.location} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    <label>Deadline</label>
                    <label style={{fontSize: '11.5px'}}>Specify deadline for funding.</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Deadline</label>
                    <DatePicker onChange={(date, dateString)=>this.onChange(date,dateString)} />
                </Col>
                </Row>
                </div>
                </>
                
        )
    }
}

export default Overview;