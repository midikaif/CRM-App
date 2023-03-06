import React from 'react'

export default function CustomerForm() {
    return (
        <div className='container my-3'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Company Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2">@example.com</span>
            </div>
        </div>
    )
}
