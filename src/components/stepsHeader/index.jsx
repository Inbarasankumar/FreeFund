import React from 'react';
import { Steps, Button, message } from 'antd';

import './stepsHeader.scss';

// const StepsHeader = ({currentStep}) =>{
//     return(
//         <div className="rectangle ">
//             <div className="normal-text"> Overview</div>
//             <div className="normal-text">Funding goals</div>
//             <div className="normal-text">Perks</div>
//             <div className="normal-text">Recruiting</div>
//             <div className="normal-text">Promotions</div>
//         </div>
//     )
// }

// export default StepsHeader;



const { Step } = Steps;

const steps = [
  {
    title: 'Overview',
    content: 'First-content',
  },
  {
    title: 'Funding goals',
    content: 'Second-content',
  },
  {
    title: 'Perks',
    content: 'Last-content',
  },
  {
    title: 'Recruiting',
    content: 'Last-content',
  },
  {
    title: 'Promotions',
    content: 'Last-content',
  },
];

class StepsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({current:nextProps.nextStep})
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
   
    return (
      <div className="rectangle">
        <Steps current={this.props.nextStep} >
          {steps.map(item => (
            <Step key={item.title} title={item.title}/>
          ))}
        </Steps>
        {/* <div className="steps-content">{steps[current].content}</div> */}
        {/* <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div> */}
      </div>
    );
  }
}

export default StepsHeader;