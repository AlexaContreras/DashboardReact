import React from 'react';

function TopBar(props){
return (
    <div className="col-md-4 mb-4">
                  <div className={`card ${props.borderColor} shadow h-100 py-2`}>
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
<div className={`text-xs font-weight-bold ${props.textColor} text-uppercase mb-1`}>{props.text}</div>
<div className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
)
}
 
export default TopBar;