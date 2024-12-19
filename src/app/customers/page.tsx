'use server'
export default async function CustomerPage() {

    const customerId = "101"
    const customerName = "Morgan Stanley (U.S)"


    return (

        // JSX || TSX
        <>
            <h1>Customers</h1>

            <div style={{paddingTop: "20px"}}>
                <div style={{paddingTop: "10px"}}>Customer Id : {customerId}</div>
                <div style={{paddingTop: "10px"}}>Customer Name : {customerName}</div>

            </div>
        </>

    )
}

