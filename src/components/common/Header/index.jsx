import { Row, Col } from 'antd';
import React from 'react';
import Images from '../../assets/images';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends React.Component {
  render() {
      return (
        <Row className="header container-fluid" align="middle">
            <Col span={3}>
            <img className="freefund" src={Images.freefundLogo} alt="freefundLogo"/>
                <Link className="header-title">Freefund</Link>
                </Col>
            <Col span={9}>
                <Link to={'/browseprojects'} className="header-link">Browse projects</Link>
                <Link to={'/myprojects'} className="header-link">My Projects</Link>
                <Link className="header-link">Portfolio</Link>
            </Col>    
            <Col span={4} offset={8}>
            <Link to={'/overview'}><button className="header-button" >Post a project</button></Link>
            </Col>         
        </Row>
      );
  }
}

export default Header;