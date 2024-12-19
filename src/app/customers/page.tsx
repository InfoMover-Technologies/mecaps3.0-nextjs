'use server'
export default async function CustomerPage() {

    const customerId = "101"
    const customerName = "Morgan Stanley (U.S)"

    const customers = [

        {
            id: 101,
            name: "JPMC"
        },
        {
            id: 102,
            name: "IBM India"
        },
        {
            id: 103,
            name: "Wipro India"
        },
        {
            id: 104,
            name: "Cognizant India"
        }
    ]


    return (

        // JSX || TSX
        <>
            <h1>Customers</h1>

            <div style={{paddingTop: "20px"}}>
                <div style={{paddingTop: "10px"}}>Customer Id : {customerId}</div>
                <div style={{paddingTop: "10px"}}>Customer Name : {customerName}</div>
            </div>
            <hr/>
            <div>
                <h2 className="text-xl font-semibold mb-4">Customer List</h2>

                {customers.length === 0 ? (
                    <p className="text-gray-500">No customers found.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>

                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 border-b">
                                        {customer.id}
                                    </td>
                                    <td className="px-6 py-4 border-b">
                                        {customer.name}
                                    </td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </>

    )
}

