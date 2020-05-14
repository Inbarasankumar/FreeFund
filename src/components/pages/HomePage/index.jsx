import React, { Component } from 'react';
import Header from '../../common/Header';
import { Row, Col } from 'antd';
import { AppstoreFilled } from '@ant-design/icons';
import Images from '../../assets/images';
import './homePage.scss';

class HomePage extends Component {
    render() {
        return(
            <>
                <Header />
                <Row className="content-1">
                    <Col span={12} offset={6} >
                    <h1 className="content-1-heading">Get Fund, Build and Go Live</h1>
                    <p>
                        Freefund offers our customers a wealth of technical and business expertise
                        that  helps in digital transformation and improve agility and efficiency.
                    </p>
                    <button className="content-1-button">Get Started</button>
                    <div>
                        <img src={Images.homePageLaptop} alt="laptop" />
                    </div>
                    </Col>
                </Row>
                <Row className="content-2">
                    <Col span={12} offset={6}>
                        <h1 className="content-2-heading">Find top Freelancers</h1>
                    </Col>
                </Row>
                <Row className="content-3" justify="center">
                    <Col span={24} >
                        <h1 className="content-3-heading">Its Easy to Get work done and going live</h1>
                        <Row justify="center" align="middle">
                            <Col span={8} offset={2}>
                                <AppstoreFilled className="store-icon" />
                            </Col>
                            <Col span={12}>
                                <ul style={{"list-style-type": "none"}}>
                                    <li>
                                        <img className="content-3-icon" src={Images.gather} alt="gather"/>
                                        <span className="content-3-icon-text">Post a job</span>
                                    </li>
                                    <li>
                                        <img className="content-3-icon" src={Images.user} alt="user"/>
                                        <span className="content-3-icon-text">Get funded</span>
                                    </li>
                                    <li>
                                        <img className="content-3-icon" src={Images.ui} alt="user"/>
                                        <span className="content-3-icon-text">Hire a freelancers/team</span>
                                    </li>
                                    <li>
                                        <img className="content-3-icon" src={Images.uidev} alt="user"/>
                                        <span className="content-3-icon-text">Incubate your project</span>
                                    </li>
                                    <li>
                                        <img className="content-3-icon" src={Images.quality} alt="user"/>
                                        <span className="content-3-icon-text">Go live</span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
};

export default HomePage;
