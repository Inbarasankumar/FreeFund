import React from 'react';
import { Row, Col } from 'antd';
import './perksDisplayCard.scss';

const PerksDisplayCard = ({title, className, description}) => (
    <>
     <div className="perks-proposal-card">
         <Row justify="center">
             <Col span={20}>
                 <h4 className={`perks-title ${className}`}>{title}</h4>
                 <p className="perks-value">Back $20 or more</p>
                 <p className="perks-description">
                    Get VIP Access to meet one of our 
                    authors and be there live when we’re 
                    filming on production.
                 </p>
                 <span className="estimated-title">Estimated Delivery</span>
                 <span className="estimated-date">24 July, 2020</span>
                 <p className="benefits">Benefits</p>
                 <ul className="benefits-list">
                     <li className="benefits-content">You get 2 months subscription fee.</li>
                     <li className="benefits-content">You get premium themes</li>
                 </ul>
                 <p className="backers-count">1340 backers</p>
             </Col>
         </Row>
         <div className={`buy-button ${className}`}>
             Buy Now
         </div>
     </div>
    </>
)

export default PerksDisplayCard;