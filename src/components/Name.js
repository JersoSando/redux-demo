import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addName } from '../redux/reducer';

const Name = (props) => {  //taking in props because our global state is going to be our props 
  let [name, setName] = useState('')

  const addName = () => {
    props.addName(name) //addName function is coming out of our reducer
  }
  return (
      <div className={'form-div'}>
          <h1 className={'label'}>Enter your name:</h1>
          <input type='text' className={'input'} onChange={e => setName(e.target.value)}></input>
          <button className={'save'} onClick={addName}>Save</button>
      </div>
    ) 
};

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, {addName})(Name);
