'use client'
import {useEffect, useState} from "react";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

export default function ClientSideCustomerPage() {

    // let customers:any = []
    const [customers, setCustomers] = useState<any[]>();
    const [customerId, setCustomerId] = useState<any>(undefined);
    //
    // let customers:any;
    //
    const getCustomers = async () => {

        // const _customers = await getCustomersWithAPI()

        const response = await fetch("http://localhost:8080/customers")

        const _customers = await response.json();
        console.log(_customers)
        // setCustomers(_customers)
        // customers = _customers
        setCustomers(_customers)

    }
    //
    //
    // getCustomers()

    useEffect(() => {

        console.log("useEffect for customerId is executed " + customerId)
        /**
         *
         */
    }, [customerId])


    useEffect(() => {

        getCustomers()

    }, [])


    return (

        <>
            <h1>Customers (Client Side Component)</h1>
            <hr/>
            <div className="m-5 card flex justify-content-center gap-2">
                <Button label="Check" className='' icon="pi pi-check"/>
                <InputText value={"Demo"}/>
            </div>

            <div className="flex">
                <button onClick={getCustomers}>Refresh</button>
            </div>
            <div className="p-4">
                {/* PrimeFlex grid system */}
                <h2>{customers?.length}</h2>
                <div className="flex flex-column">
                    {customers &&

                        customers.map((customer: any) => (
                            <div key={customer.id} className="col-12 md:col-6 lg:col-4">
                                <div className="surface-card  border-round">
                                    <div className="">
                                        <span className='font-medium mr-3' style={{cursor: "pointer"}}
                                              onClick={() => {
                                                  setCustomerId(customer.id);
                                              }}>{customer.id}</span>
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