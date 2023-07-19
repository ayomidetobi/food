import React from "react"

function edit() {
    return (
        <div className="edit">
            <div className="d-flex justify-content-between">
                <p>Edit social media</p>

                <i class="bi bi-x"></i>
            </div>

            <label className="form-label">Paste link below</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Paste link to profile here..." />

            <button>Add handle</button>
        </div>
    )
};

export default edit;
