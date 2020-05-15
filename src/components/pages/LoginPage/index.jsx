import React from 'react';
import { Row, Col } from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import Images from '../../assets/images';
import './loginPage.scss';
import { Link } from 'react-router-dom';

class LoginTab extends React.Component {

    navigateToBrowsePage = () => {
        this.props.history.push('/browseprojects');
    }

  render() {
    return (
      <div>
            <Row justify="center">
                <Col span={12} offset={6}>
                    <img src={Images.freefundLogo} alt="freefundLogo"/>
                    <p className="join-now">Join Now</p>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={16} offset={3}>
                    <button className="sign-in">
                        <FacebookOutlined className="button-logo" />
                        <span className="button-name">
                            Continue with Facebook
                        </span>
                    </button>
                    <button onClick={this.navigateToBrowsePage} className="sign-in">
                        <GoogleOutlined className="button-logo" />
                        <span className="button-name">
                            Continue with Google
                        </span>
                    </button>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={16} offset={3}>
                    <p className="terms-condition">By joining you agree to our <Link className="link">Terms and Conditions and Privacy Policy.</Link></p>
                </Col>
            </Row>
      </div>
    );
  }
}

export default LoginTab;