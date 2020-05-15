import React from 'react';
import { Row, Col } from 'antd';
import Images from '../../assets/images';
import './detailsCard.scss';

const DetailsCard = () => (
        <Row className="details-card" justify="center">
            <Col span={8}>
                <img className="customer-img" src={Images.customerPic} alt="customer"/>
            </Col>
            <Col span={12}>
                <p className="message">
                    Lean startup metrics venture innovator assets angel 
                    investor learning curve incubator branding advisor
                    termsheet. iPad ecosystem conversion android advisor.
                    Incubator vesting period metrics crowdfunding backing 
                    interaction design business model canvas strategy.
                </p>
                <p className="name-details">
                    Rachel Trace CTO,
                    InnovationLabs
                    <img className="quotation-img" src={Images.quotation} alt="quotation" />
                </p>
            </Col>
        </Row>
      );

export default DetailsCard;
