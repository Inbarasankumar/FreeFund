import { Row, Col } from 'antd';
import React from 'react';
import { CopyrightOutlined, TwitterOutlined, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import Images from '../../assets/images';
import './footer.scss';

const servicesData = [
    'Web Development',
    'Android',
    'Web Design',
    'UI/UX',
    'IOS'
  ];

const aboutData = [
    'About',
    'Contact Us',
    'Workflow',
    'Careers'
];

const blogData = [
    'Technology',
    'Entrepreneurship',
    'UI Design'
];

const Footer = () => (
    <div className="footer container-fluid">
        <Row className="footer-content">
            <Col span={8}>
                <img className="freefund" src={Images.freefundLogo} alt="freefundLogo"/>
                <p className="copy-right">
                    <CopyrightOutlined /> Freefund, 2020
                </p>
            </Col>   
            <Col span={4}>
                <h1 className="footer-list-header">Services</h1>
                {servicesData.map((list, _index) => (
                    <p key={`services - ${_index}`} className="footer-list-content">{list}</p>
                ))}
            </Col>
            <Col span={4}>
                <h1 className="footer-list-header">About Us</h1>
                {aboutData.map((list, _index) => (
                    <p key={`about - ${_index}`} className="footer-list-content">{list}</p>
                ))}
            </Col>  
            <Col span={4}>
                <h1 className="footer-list-header">Blog</h1>
                {blogData.map((list, _index) => (
                    <p key={`blog - ${_index}`} className="footer-list-content">{list}</p>
                ))}
            </Col>  
        </Row>
        <Row justify="center">
            <Col span={12} offset={6}>
                <TwitterOutlined className="footer-icons" />
                <FacebookFilled className="footer-icons" />
                <LinkedinFilled className="footer-icons" />
            </Col>
        </Row>
    </div>
);

export default Footer;
