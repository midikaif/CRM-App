import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './CustomerList.css'

export default function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [pages, setPages] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        load(1);
    }, []);
    
    function load(pageNo) {
        fetch("https://mycrmserver.netlify.app/api/customer/page/" + pageNo)
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setCustomerList(res.records);
            setFilteredCustomers(res.records);
    
            let totalPages = Math.ceil(res.totalCount / 100);
            let arrayOfPages = new Array(totalPages).fill(0);
            console.log(arrayOfPages);
            setPages(arrayOfPages);
          });
      }
    



    function handleSearch(key) {
        if (!key || key.length == 0) {
            setFilteredCustomers(customerList);
        } else {
            key = key.toUpperCase();
            const result = customerList.filter(c => c.name.includes(key));
            setFilteredCustomers([...result])
        }
        // console.log(e.target.value);
        // setCustomerList(find);
    }

    function handleNext() {
       
        
    }


    return (
        <div className='container my-3'>
            <div className='customer-list'>
                <div className='customer-list-header'>
                    <h1>Customers List</h1>
                    <div>
                        <button className='btn btn-dark' onClick={() => navigate('customerform')}>
                            {/* <Link> */}
                            + Add New Customer
                            {/* </Link> */}
                        </button>
                        <span id='search'>
                            <input id='search-bar' type="text" placeholder='Search' onInput={(e) => handleSearch(e.target.value)} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
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
                        {filteredCustomers.map((customer, i) => (
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
            <nav aria-label="Page navigation example">
                <ul className="pagination pagination-m d-flex justify-content-center">
                    <li className={`page-item`}><a className="page-link" href="#">Previous</a></li>
                    {/* <li className={`page-item ${page.pageNo<2 ? 'disabled' : ''}`}><a className="page-link" href="#">Previous</a></li> */}
                    {
                  pages.map((p, i) =>
                    <li class="page-item"><button class="page-link"
                      onClick={() => {
                        load(i + 1);
                      }}
                    >{i + 1}</button></li>
                  )
                }
                    {/* <li className={`page-item ${page.pageNo<Math.ceil(totalResults/100) ? '' : 'disabled'}`}><button className="page-link" onClick={handleNext}>Next</button></li> */}
                    <li className={`page-item`}><button className="page-link" onClick={handleNext}>Next</button></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}
