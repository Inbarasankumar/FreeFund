import React from 'react';
import { Component } from 'react';
import { Row , Col , DatePicker ,Button, Select } from 'antd';

import StepsHeader from '../stepsHeader';
import '../Overview/overview.scss';
import Pencil from '../../assets/Pencil-icon.png';
import apiClient from '../apiClient/apiClient';

const {Option} = Select;
class Overview extends Component{

    state={
        title : '',
        subTitle:'',
        category:'',
        location :'',
        Deadline : '',
        nextStep : 0,
        disable : false,
        categoryArray:[]
            }
    onChange = (date,dateString) =>{
       
            console.log(date, dateString);
            this.setState({Deadline:dateString})
        }

       async componentDidMount(){
        const resp = await apiClient.get('/api/v1/category');
        this.setState({categoryArray:resp.data});
        }
       
    handleOnClick = () =>{
        
        console.log('handle click state')
        // this.setState(state=>{ return {
        //     nextStep:state.nextStep+1 , disable:true}},() => {
        //     this.props.history.push('/funding');});
       
        const requestObject = {
            categoryId: this.state.category,
            fundingGoal: 0,
            location: this.state.location,
            projectDeadline: this.state.Deadline,
            title: this.state.title,
            subtitle: this.state.subTitle
        }
        this.props.history.push('/funding',{response:requestObject});
        //this.setState({disable:true})
       
    }
    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    OnSelectionChange=(e) => {
console.log(e);
this.setState({category:e})
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
                <Button type="primary"  onClick={this.handleOnClick}>Next:Funding</Button>
                   
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
                    <Select placeholder=" Technology" onChange={(e)=>this.OnSelectionChange(e)}>
                        {this.state.categoryArray.map((category)=>{
                           return <Option key={category.categoryId}  value={category.categoryId}>{category.categoryName}</Option>
                        })}
                        
                    </Select>
                   
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    <label>Location</label>
                    <label style={{fontSize: '11.5px'}}>Specify location where you will do production and distribution.</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Location</label>
                    <input type="" name="location" placeholder=" Bengaluru, India"value={this.state.location} onChange={this.handleOnChange}></input>
                </Col>
                </Row>
                <Row >
                <Col span={6} offset={1}>
                    <label>Deadline</label>
                    <label style={{fontSize: '11.5px'}}>Specify deadline for funding.</label>
                </Col>
                <Col span={10} offset={4} >
                    <label>Deadline</label>
                    <DatePicker  onChange={(date, dateString)=>this.onChange(date,dateString)} />
                </Col>
                </Row>
                </div>
                </>
                
        )
    }
}

export default Overview;