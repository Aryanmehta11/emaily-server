import React from 'react'
import {connect} from 'react-redux'
import formFields from './formFields'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'




const SurveyFormReview=({onCancel,formValues,submitSurvey,history})=>{
    const reviewFields=_.map(formFields,({name,label})=>{
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5> Please confirm your entries</h5>
            {reviewFields}
            
            <button 
            className='yellow darken-3 btn-flat'
            onClick={onCancel}>
                Back

            </button>
            <button className='green  btn-flat right'  onClick={() => submitSurvey(formValues, history)}>
                Send Survey 
                <i className='material-icons right' > email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state){
   
    return { formValues:state.form.surveyForm.values} // Coming from the response of the state , console log the state if required

}

export default  connect(mapStateToProps,actions) (withRouter(SurveyFormReview)); //using Withrouter as SendSurvey sends the action and knows the survey has been sent , so withRoyter helps in navigation of the application