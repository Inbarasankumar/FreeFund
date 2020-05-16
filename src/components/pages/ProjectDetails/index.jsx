import React from 'react';
import { Row, Col } from 'antd';
import {} from '@ant-design/icons';
import Images from '../../assets/images';
import ProjectProposalCard from '../../common/ProjectProposalCard';
import PerksDisplayCard from '../../common/PerksDisplayCard';
import './projectDetails.scss';

const proposalData = [
    {
        name: "John",
        reviews: 4,
        description: "Hi, CONTACT US FOR OUR PREVIOUS WORK PLEASE HAVE A LOOK INTO MY PORTFOLIO NiGELLA SoFTWARES is very interested in your job post as we are having related work experience in fulfilling the need for the job.",
    },
    {
        name: "Virat",
        reviews: 3,
        description: "Hi, we can start ur work immediately. we have 10 years experience in coding and development. we are  expert in writing programs in JAVA, .NET, C, C++,C# we have experience in hadoop,python coding,raspberry Pi.",
    },
    {
        name: "KlRahul",
        reviews: 2,
        description: "Hi, CONTACT US FOR OUR PREVIOUS WORK PLEASE HAVE A LOOK INTO MY PORTFOLIO NiGELLA SoFTWARES is very interested in your job post as we are having related work experience in fulfilling the need for the job.",
    },
    {
        name: "tejas",
        reviews: 5,
        description: "Hi, CONTACT US FOR OUR PREVIOUS WORK PLEASE HAVE A LOOK INTO MY PORTFOLIO NiGELLA SoFTWARES is very interested in your job post as we are having related work experience in fulfilling the need for the job.",
    },
]
class ProjectDetails extends React.Component {
    render() {
        return(
            <div  className="project-details">
                <Row>
                    <Col span={8} offset={2}>
                        <h1 className="heading">Knotify Music Streaming</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={2}>
                        <div>
                            <img src={Images.code} alt="laptop" width={400} height={250}/>
                            <Col span={24}>
                                <span className="subtitle">Project subtitle</span>
                                <span className="subtitle">Technology</span>
                                <span className="subtitle">Bangalore, India</span>
                                <div className="description-under">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry’s standard dummy text ever since the
                                    1500s my text ever since the 1500s y text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                                    1500s my text ever since the 1500s.
                                </div>
                            </Col>
                        </div>
                    </Col>
                    <Col span={8} offset={4}>
                        <h1 className="heading">Project funding</h1>
                        <div className="funding-list">
                            <p className="fund-amount">$2986</p>
                            <span className="total-fund">funded of $4500</span>
                        </div>
                        <div className="funding-list">
                            <p className="total-backers">1456</p>
                            <span className="backers">backers</span>
                        </div>
                        <div className="funding-list">
                            <p className="total-days">12</p>
                            <span className="days-to-go">days to go</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={10} offset={2}>
                        <h1 className="heading">Proposals</h1>
                    </Col>
                    <Col span={6} offset={6}>
                        <h1 className="heading">Perks</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="proposals-list" span={14} offset={2}>
                        {proposalData.map((proposals, _index) => (
                            <ProjectProposalCard key={`card - ${_index}`} name={proposals.name} reviews={proposals.reviews} description={proposals.description} />
                        ))}
                    </Col>
                    <Col className="perks-list" span={6} offset={1}>
                        <PerksDisplayCard title={"Early Bid"} className={"early-bid"} />
                        <PerksDisplayCard title={"Premium"} className={"premium"} />
                        <PerksDisplayCard title={"Super Early Bid"} className={"super-early-bid"} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProjectDetails;