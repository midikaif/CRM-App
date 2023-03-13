import React from 'react'
import './Dashboard.css'

export default function Dashboard({statusCount, allCustomer, newCustomer,rejectedCustomer,acceptedCustomer}) {
    return (
        <div className='dashboard'>
            <div className="allCustomer" onClick={allCustomer}>
                <div className="inner">
                    <div className="allInnerFront">
                        All
                    </div>
                    <div className="allInnerBack">
                        {statusCount.total}
                    </div>
                </div>
            </div>
            <div className="newCustomer" onClick={newCustomer}>
                <div className="inner">
                    <div className="newInnerFront">
                        New
                    </div>
                    <div className="newInnerBack">
                    {statusCount.newPages}

                    </div>
                </div>
            </div>
            <div className="rejectedCustomer" onClick={rejectedCustomer}>
                <div className="inner">
                    <div className="rejectedInnerFront">
                        Rejected
                    </div>
                    <div className="rejectedInnerBack">
                    {statusCount.rejectedPages}

                    </div>
                </div>
            </div>
            <div className="acceptedCustomer" onClick={acceptedCustomer}>
                <div className="inner">
                    <div className="acceptedInnerFront">
                        Accepted
                    </div>
                    <div className="acceptedInnerBack">
                    {statusCount.acceptedPages}

                    </div>
                </div>
            </div>
        </div>
    )
}
