import React from "react";
import { Card } from 'antd';

const CardDetail = ({title}) => (
    <div>
        <Card title={title} bordered={true} style={{width: 200}}>
            <div>Bids upto 25</div>
            <div>Highlighted project for 2 days</div>
            <div>Customer support</div>
            <div>Featured project</div>
        </Card>
    </div>
);

 export default CardDetail;