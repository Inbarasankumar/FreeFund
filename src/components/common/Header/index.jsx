import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { CopyFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  render() {
      return (
        <Row className="header container-fluid" align="middle">
            <Col span={3}>
                <CopyFilled className="logo" />
                <Link className="header-title">Freefund</Link>
                </Col>
            <Col span={9}>
                <Link to={'/browseprojects'} className="header-link">Browse projects</Link>
                <Link to={'/myprojects'} className="header-link">My Projects</Link>
                <Link className="header-link">Portfolio</Link>
            </Col>    
            <Col span={4} offset={8}>
                <button className="header-button">Post a project</button>
            </Col>         
        </Row>
      );
  }
}

export default Header;
