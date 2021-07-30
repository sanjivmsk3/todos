import React from 'react';

function Head(params) {
    return(
        <React.Fragment>
            <div className="container mt-5">
                <form action="" className="d-flex">
                    <input type="text" className="form-control" placeholder='add your work' />
                    <button className="btn btn-success">Add</button>
                </form>
            </div>
        </React.Fragment>
    )
}
export default Head;