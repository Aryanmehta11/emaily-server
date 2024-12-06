import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard=()=>{
    return (
        <div>
            <SurveyList/>
            <div style={{textAlign:'center'}}><h1> Welcome to the Emaily!</h1> </div>
            <div style={{textAlign:'center'}}> <h4>Click Below to send out a survey</h4> </div>
            <div className="fixed-action-btn">
                 

                   
                
                    <Link to="/surveys/new" className='btn-floating btn-large red' style={{position:'absolute',bottom:'50px',right:'50px'}}>
                    <i class="material-icons">
                        add
                    </i>
                    
                    
                    </Link> 

            </div>
        </div>
    )
}
export default Dashboard