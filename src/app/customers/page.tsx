'use server'
import {getCustomers} from "@/server/customers";

export default async function CustomerPage() {


    const customers = await getCustomers()

    return (

        // JSX || TSX
        <>

            <h1>Customers</h1>

            <div className='grid mt-5'>
                <div className='col-3'>Col 1</div>
                <div className='col-3'>Col 2</div>
                <div className='col-3'>Col 3</div>
            </div>


            <div className="p-4">
                {/* PrimeFlex grid system */}
                <div className="flex flex-column">
                    {customers.map((customer:any) => (
                        <div key={customer._id} className="col-12 md:col-6 lg:col-4">
                            <div className="surface-card  border-round">
                                <div className="">
                                    <span className="font-medium mr-3">{customer._id}</span>
                                    <span>{customer.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*<div style={{paddingTop: "20px"}}>*/}
            {/*    <div style={{paddingTop: "10px"}}>Customer Id : {customerId}</div>*/}
            {/*    <div style={{paddingTop: "10px"}}>Customer Name : {customerName}</div>*/}
            {/*    <input type={"date"} />*/}
            {/*    <select>*/}
            {/*        <option>Option 1</option>*/}
            {/*        <option>Option 2</option>*/}
            {/*        <option>Option 3</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
            {/*<hr/>*/}
            {/*<div>*/}
            {/*    <h2 className="text-xl font-semibold mb-4">Customer List</h2>*/}

            {/*    {customers.length === 0 ? (*/}
            {/*        <p className="text-gray-500">No customers found.</p>*/}
            {/*    ) : (*/}
            {/*        <div className="overflow-x-auto">*/}
            {/*            <table className="min-w-full bg-white border border-gray-200">*/}
            {/*                <thead>*/}
            {/*                <tr className="bg-gray-50">*/}
            {/*                    <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
            {/*                        ID*/}
            {/*                    </th>*/}
            {/*                    <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
            {/*                        Name*/}
            {/*                    </th>*/}

            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {customers.map((customer) => (*/}
            {/*                    <tr key={customer.id} className="hover:bg-gray-50">*/}
            {/*                        <td className="px-6 py-4 border-b">*/}
            {/*                            {customer.id}*/}
            {/*                        </td>*/}
            {/*                        <td className="px-6 py-4 border-b">*/}
            {/*                            {customer.name}*/}
            {/*                        </td>*/}

            {/*                    </tr>*/}
            {/*                ))}*/}
            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}

        </>

    )
}

