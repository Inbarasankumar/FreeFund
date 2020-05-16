import React, {Component} from 'react';
import { Modal, Row, Col, Carousel} from 'antd';
import {AppstoreFilled} from '@ant-design/icons';
import Images from '../../assets/images';
import './homePage.scss';
import DetailsCard from '../../common/detailsCard';
import LoginTab from '../LoginPage';

class HomePage extends Component {
    constructor(props) {
        super(props);
            this.state = {
                isVisible: false
            }
    }

    onButtonClick = () => {
        console.log('clicked!!');
        this.setState({
            isVisible: true
        })
    }

    handleCancel = () => {
        this.setState({
          isVisible: false,
        });
      };

    render() {
        return (
            <>
                <Row className="content-1">
                    <Col span={12} offset={6}>
                        <h1 className="content-1-heading">Get Fund, Build and Go Live</h1>
                        <p>
                            Freefund offers our customers a wealth of technical and business expertise
                            that helps in digital transformation and improve agility and efficiency.
                        </p>
                        <button className="content-1-button">Get Started</button>
                        <div>
                            <img src={Images.homePageLaptop} alt="laptop"/>
                        </div>
                    </Col>
                </Row>
                <Row className="content-2">
                    <Col span={12} offset={6}>
                        <h1 className="content-2-heading">Find top Freelancers</h1>
                        <Row justify="center">
                            <Col span={7} className="border-heading">
                                <img src={Images.computer} alt="computer" />
                                <h6 className="heading-images">Web Design/Develop</h6>
                                <p className="description-tag">Web design encompasses many different skills and
                                    disciplines in the production and maintenance of websites.</p>
                            </Col>
                            <Col span={7} className="border-heading">
                                <img src={Images.appdesign} alt="appdesign" />
                                <h6 className="heading-images">App Design</h6>
                                <p className="description-tag">
                                    App design encompasses both the user interface (UI) and user experience (UX). Designers are responsible for the overall style of the app, including things like the colour scheme, font selection, and the types of buttons and widgets the user will use.
                                </p>
                            </Col>
                            <Col span={7} className="border-heading">
                                <img src={Images.appdevelopment} alt="appdevelopment"/>
                                <h6 className="heading-images">App Development</h6>
                                <p className="description-tag">Mobile app development is the act or process by which a
                                    mobile app is developed for mobile devices, such as personal digital assistants,
                                    enterprise digital assistants or mobile phones</p>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span={7} className="border-heading">
                                <img src={Images.graphic} alt="graphic" />
                                <h6 className="heading-images">Graphic Design</h6>
                                <p className="description-tag">
                                    Graphic design is the process of visual communication and problem-solving through
                                    the use of typography, photography, iconography and illustration
                                </p>
                            </Col>
                            <Col span={7} className="border-heading">
                                <img src={Images.interfaceUi} alt="interfaceUi" />
                                <h6 className="heading-images">Interface Design</h6>
                                <p className="description-tag">
                                    User interface design or user interface engineering is the design of user interfaces
                                    for machines and software, such as computers, home appliances, mobile devices, and
                                    other electronic devices, with the focus on maximizing usability and the user
                                    experience
                                </p>
                            </Col>
                            <Col span={7} className="border-heading">
                                <img src={Images.threeDesign} alt="threeDesign" />
                                <h6 className="heading-images">3D Design</h6>
                                <p className="description-tag">
                                    3D computer graphics, or three-dimensional computer graphics, are graphics that use
                                    a three-dimensional representation of geometric data that is stored in the computer
                                    for the purposes of performing calculations and rendering 2D images
                                </p>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row className="content-3" justify="center">
                    <Col span={24}>
                        <h1 className="content-3-heading">Its Easy to Get work done and going live</h1>
                        <Row justify="center" align="middle">
                            <Col span={8} offset={2}>
                                <AppstoreFilled className="store-icon"/>
                            </Col>
                            <Col span={12}>
                                <ul style={{"listStyleType": "none"}}>
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
                <Row className="content-4" justify="center">
                    <Col span={24}>
                        <h1 className="content-4-heading">Ready to Get started?</h1>
                        <Row className="user-type-list" justify="space-around">
                            <Col span={6}>
                                <h1 className="user-type-heading">Freelancer</h1>
                                <img src={Images.editTools} alt="editTools"/>
                                <p>
                                    Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry’s
                                    standard dummy text ever since the 1500s
                                </p>
                                <button onClick={this.onButtonClick} className="select-button">Start Earning</button>
                            </Col>
                            <Col span={6}>
                                <h1 className="user-type-heading">Creators</h1>
                                <img src={Images.location} alt="location"/>
                                <p>
                                    Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry’s
                                    standard dummy text ever since the 1500s
                                </p>
                                <button onClick={this.onButtonClick} className="select-button">Post a project</button>
                            </Col>
                            <Col span={6}>
                                <h1 className="user-type-heading">Backers</h1>
                                <img src={Images.business} alt="business"/>
                                <p>
                                    Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry’s
                                    standard dummy text ever since the 1500s
                                </p>
                                <button onClick={this.onButtonClick} className="select-button">Start Investing</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="content-5">
                    <Col span={24}>
                        <h1 className="content-5-heading">Hear from our customers</h1>
                        <div className="carousel-view">
                            <Carousel autoplay>
                                <DetailsCard/>
                                <DetailsCard/>
                                <DetailsCard/>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <div className="modal-display">
                {this.state.isVisible ? (
                <Modal
                    closable={false}
                    className="login-modal"
                    centered={true}
                    visible={this.state.isVisible}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <LoginTab />
                </Modal>
                ): null}
                </div>
            </>
        );
    }
};

export default HomePage;
