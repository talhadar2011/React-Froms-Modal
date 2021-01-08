import React from 'react'

export default function FormModal(props) {
    return (
        <>
            <div className="modal fade" id="staticBackdrop" 
            data-backdrop="static" data-keyboard="false" 
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" animation="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
					<label className="label-input100" for="message">Name</label>
                        {props.Data.Name}
                    <label className="label-input100" for="message">Email</label>
					    {props.Data.Email}   
                    <label className="label-input100" for="message">Task</label>
					    {props.Data.Task}
                    <label className="label-input100" for="message">Message</label>
                        {props.Data.Message}
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

