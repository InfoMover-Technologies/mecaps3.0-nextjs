'use client'
import {getCustomersWithAPI} from "@/server/customers";
import {useEffect, useState} from "react";

export default function ClientSideCustomerPage() {

    const [customers, setCustomers] = useState<any[]>();
    //
    // let customers:any;
    //
    const getCustomers = async () => {

        // const _customers = await getCustomersWithAPI()

        const response = await fetch("http://localhost:8080/customers")

        const _customers = await response.json();
        console.log(_customers)
        setCustomers(_customers)

    }
    //
    //
    // getCustomers()


    useEffect(() => {

        getCustomers()

    }, [])


    return (

        <>
            <h1>Customers (Client Side Component)</h1>
            <hr/>
            <div className="flex">
                <button onClick={getCustomers}>Refresh</button>
            </div>
            <div className="p-4">
                {/* PrimeFlex grid system */}
                <div className="flex flex-column">
                    {customers &&

                        customers.map((customer: any) => (
                            <div key={customer.id} className="col-12 md:col-6 lg:col-4">
                                <div className="surface-card  border-round">
                                    <div className="">
                                        <span className="font-medium mr-3">{customer.id}</span>
                                        <span>{customer.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>

        </>
    )
}