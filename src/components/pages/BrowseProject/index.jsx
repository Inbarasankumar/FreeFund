import React, { Component } from 'react';
import Header from '../../common/Header';
import { Row, Col } from 'antd';
import { AppstoreFilled } from '@ant-design/icons';
import Images from '../../assets/images';
import './browseProject.scss';
import HomePage from "../HomePage";

class BrowseProject extends Component {
    render() {
        return (
            <>
                <Row className="content">
                    <Col span={6} offset={4} >
                        <h1 className="headings">Featured Project</h1>
                        <p></p>
                    </Col>
                    <Col span={6} offset={4} >
                        <h1 className="headings">Recently Incubated </h1>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={5}>
                        <h1 className="headings">Technology</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={5}>
                        <h1 className="headings">Finance</h1>
                    </Col>
                </Row>
            </>
        )
    }
}

export default BrowseProject;