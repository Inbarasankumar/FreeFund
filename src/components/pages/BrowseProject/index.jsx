import React, {Component} from 'react';
import Header from '../../common/Header';
import {Row, Col} from 'antd';
import {AppstoreFilled} from '@ant-design/icons';
import Images from '../../assets/images';
import './browseProject.scss';

import HomePage from "../HomePage";
import Description from "../../common/Description";

class BrowseProject extends Component {
    render() {
        return (
            <>
                <Row className="content">
                    <Col span={8} offset={2}>
                        <h1 className="headings">Featured Project</h1>
                        <div>
                            <img src={Images.code} alt="laptop" width={400} height={250}/>
                            <Col span={24}>
                                <div className="description-under">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry’s standard dummy text ever since the
                                    1500s my text ever since the 1500s y text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                                    1500s my text ever since the 1500s.
                                </div>
                            </Col>
                        </div>
                    </Col>
                    <Col span={8} offset={2}>
                        <h1 className="headings">Recently Incubated </h1>
                        <div><Description displayPic={Images.map}/></div>
                        <div><Description displayPic={Images.music}/></div>
                        <div><Description displayPic={Images.system}/></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={16} offset={2}>
                        <h1 className="headings">Technology</h1>
                    </Col>
                    <Col span={8} offset={2}>
                        <div><Description displayPic={Images.map}/></div>
                        <div><Description displayPic={Images.music}/></div>
                        <div><Description displayPic={Images.system}/></div>
                    </Col>
                    <Col span={8} offset={2}>
                        <div><Description displayPic={Images.map}/></div>
                        <div><Description displayPic={Images.music}/></div>
                        <div><Description displayPic={Images.system}/></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={16} offset={2}>
                        <h1 className="headings">Finance</h1>
                    </Col>
                    <Col span={8} offset={2}>
                        <div><Description displayPic={Images.system}/></div>
                        <div><Description displayPic={Images.map}/></div>
                        <div><Description displayPic={Images.music}/></div>
                    </Col>
                    <Col span={8} offset={2}>
                        <div><Description displayPic={Images.map}/></div>
                        <div><Description displayPic={Images.system}/></div>
                        <div><Description displayPic={Images.music}/></div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default BrowseProject;