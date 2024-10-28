import React from "react";
import { Link } from "react-router-dom";

const Dashboard=()=>{
    return (
        <div>
            Dashboard
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