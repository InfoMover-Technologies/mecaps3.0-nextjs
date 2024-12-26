'use client'
import {useEffect, useState} from "react";
import {getCustomersWithAPI} from "@/server/customers";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import CustomerForm from "@/app/customers/components/customer-form";


export default function CustomerPage() {

    const [customers, setCustomers] = useState<any[]>([])
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false)


    const asyncGetCustomers = async () => {
        const _customers = await getCustomersWithAPI();
        setCustomers(_customers)
    }


    useEffect(() => {
        asyncGetCustomers()
    }, [])


    return (
        <>
            <h1>Customers</h1>

            <Dialog onHide={() => {
                setShowCreateDialog(false)
            }}
                    visible={showCreateDialog}>


                <CustomerForm id={100} onCustomerSave={() => {
                    setShowCreateDialog(false)
                }}/>


            </Dialog>

            {/*<Sidebar*/}


            {/*    position={"right"}*/}
            {/*    visible={showCreateDialog}*/}
            {/*    onHide={() => {*/}
            {/*    setShowCreateDialog(false)*/}
            {/*}}>*/}

            {/*    <CustomerForm/>*/}

            {/*</Sidebar>*/}


            <div className='flex justify-content-end'>

                <Button className='my-2'
                        onClick={() => {
                            setShowCreateDialog(true)
                        }}
                        label={"Add Customer"}
                        icon={'pi pi-plus'}/>

            </div>


            <div className='my-2'>
                <DataTable
                    dataKey={"id"}
                    value={customers}
                >
                    <Column
                        field={"id"}
                        header={"Customer Id"}
                    ></Column>
                    <Column
                        field={"name"}
                        header={"Name"}
                    >
                    </Column>


                </DataTable>
            </div>


        </>
    )
}