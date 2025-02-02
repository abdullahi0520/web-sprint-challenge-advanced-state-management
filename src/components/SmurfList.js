import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { errorMessage } from '../actions';


 const SmurfList = (props)=> {
    const {smurfs,isFetching,error} = props
    

    if (isFetching) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <p>ERROR!</p>
    }

    return(<div className="listContainer">
        {smurfs.map((smurf)=> {
            return <Smurf key={smurf.id} smurf={smurf}/>
        })}
    </div>);
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}
export default connect(mapStateToProps) (SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.