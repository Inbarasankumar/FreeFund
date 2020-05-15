import { Row, Col } from 'antd';
import React from 'react';
import Images from '../../assets/images';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
    <>
      <Row className="header container-fluid" align="middle">
          <Col span={3}>
            <a href="/home">
              <img src={Images.freefundLogo} alt="freefundLogo"/>
            </a>
          </Col>
          <Col span={9}>
              <Link to={'/browseprojects'} className="header-link">Browse projects</Link>
              <Link to={'/myprojects'} className="header-link">My Projects</Link>
              <Link className="header-link">Portfolio</Link>
          </Col>    
          <Col span={4} offset={8}>
              <button className="header-button">Live your idea</button>
          </Col>         
      </Row>
    </>
);

export default Header;
