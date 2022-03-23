import React from 'react';
import { connect } from 'react-redux'

const Details = (props) => {
  const { name, age, location } = props

  return (
    <div className={'form-div'}>
      <div className={'form-div details'}>
        <div className={'form-container'}><h1 className={'label'}>Name:  {name}  </h1><h2 className={'detail-info'}></h2></div>
        <div className={'form-container'}><h1 className={'label'}>Age: {age} </h1><h2 className={'detail-info'}></h2></div>
        <div className={'form-container'}><h1 className={'label'}>Location: {location} </h1> <h2 className={'detail-info'}></h2></div>
    </div>
  </div>
    )
};

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Details);
