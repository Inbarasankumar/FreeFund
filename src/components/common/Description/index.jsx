import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import './description.scss';

const Description = ({displayPic}) => (
    <>
        <Row className="content">
            <Col span={12}>
                <img src={displayPic} alt="laptop" width={170} height={100}/>
            </Col>
            <Col span={12} className="a">
                <h6>Knotify Music Streaming</h6>
                <h6 className="funded">400 % funded</h6>
                <h6 className="most-valued">Most valued Read more</h6>
            </Col>
        </Row>
    </>
);

export default Description;