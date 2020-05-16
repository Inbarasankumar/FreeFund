import React from 'react';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './projectProposalCard.scss';

const ProjectProposalCard = ({name, reviews, description}) => (
    <>
     <div className="project-proposal-card">
         <Row align="middle">
             <Col span={2} offset={2}>
                <Avatar className="avatar-image" size={80} icon={<UserOutlined />} />
             </Col>
             <Col span={4} offset={1}>
                <p className="avatar-name">{name}</p>
                <p className="reviews">({reviews} reviews)</p>
             </Col>
             <Col span={8} offset={6}>
                 <button className="chat-button">Chat</button>
                 <button className="award-button">Award</button>
             </Col>
         </Row>
         <Row justify="center">
             <Col span={18} offset={2}>
                <p className="avatar-description">
                    {description}
                </p>
             </Col>
         </Row>
     </div>
    </>
)

export default ProjectProposalCard;