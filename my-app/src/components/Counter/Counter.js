import React from 'react';
import {connect} from 'react-redux'
import Controls from './Controls';
import Value from './Value';
import './Counter.css';


function Counter({ value}) {
  return (
    <div className="Counter">
      <Value value={value} />
{/* 
      <Controls
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      /> */}
      Counter
     
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counterValue,
  }
}


export default connect(mapStateToProps)(Counter);
