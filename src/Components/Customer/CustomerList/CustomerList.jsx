import React, { useEffect, useState } from 'react';
import './CustomerList.css'

export default function CustomerList() {
    const [customerList, setCustomerList] = useState([]);

    useEffect(() => {
        fetch('https://mycrmserver.netlify.app/api/customer')
            .then((res) => res.json())
            .then((res) => setCustomerList(res))
    }, [])


    return (
        <div>
            <div className="">
            </div>
            <div className='customer-list'>
                <div className='customer-list-header'>
                    <h1>Customers List</h1>
                    <div>
                            <button className='btn btn-success'>
                                +Add New Customer
                            </button>
                        <span id='search'>
                            <input id='search-bar' type="text" placeholder='Search' />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <table className="table table-dark border-light table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">CEO</th>
                            <th scope="col">Status</th>
                            <th scope="col">Employess</th>
                            <th scope="col">Turnover</th>
                            <th scope="col">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerList.map((customer, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{customer.name}</td>
                                <td>{customer.ceo}</td>
                                <td>{customer.status}</td>
                                <td>{customer.employees}</td>
                                <td>{customer.turnover}</td>
                                <td>{customer.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
