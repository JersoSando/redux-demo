import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addAge } from '../redux/reducer';

const Age = (props) => {

  const [age, setAge] = useState('')

  const addAge = () => {
    props.addAge(age)
  }
  return (
    <div className={'form-div'}>
        <h1 className={'label'}>Enter your age:</h1>
        <input type='text' className='input'onChange={e => setAge(e.target.value)}></input>
        <button className={'save'} onClick={addAge}>Save</button>
    </div>
    )
};

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

export default connect(mapStateToProps, {addAge})(Age);
