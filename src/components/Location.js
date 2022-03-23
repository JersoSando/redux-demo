import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addLocation } from '../redux/reducer';

const Location = (props) => {

  const [location, setLocation] = useState('')

  const addLocation = () => {
    props.addLocation(location)
  }

  return (
    <div className={'form-div'}>
        <h1 className={'label'}>Enter your location:</h1>
        <input type='text' className='input' onChange={e => setLocation(e.target.value)}></input>
        <button className={'save'} onClick={addLocation}>Save</button>
    </div>
    )
};

const mapStateToProps = (state) => {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps, {addLocation})(Location);
