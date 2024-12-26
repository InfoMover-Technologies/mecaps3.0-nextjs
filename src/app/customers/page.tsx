'use client'
import {useEffect, useRef, useState} from "react";
import {createCustomer, getCustomersWithAPI} from "@/server/customers";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import CustomerForm from "@/app/customers/components/customer-form";
import {Toast} from "primereact/toast";


export default function CustomerPage() {

    const [customers, setCustomers] = useState<any[]>([])
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false)
    const toastMessage = useRef(null);


    const asyncGetCustomers = async () => {
        const _customers = await getCustomersWithAPI();
        setCustomers(_customers)
    }


    useEffect(() => {
        asyncGetCustomers()
    }, [])


    const handleAddCustomer = () => {
        setShowCreateDialog(true)
    }
    const handleOnSaveCustomer = async (customer: any) => {

        // const asyncCreateCustomer = async (customer: any) => {

        try {
            const _response = await createCustomer(customer)
            // @ts-ignore

            toastMessage
                .current
                .show({severity: 'info', summary: 'Create Customer', detail: "Customer Created"})
            setShowCreateDialog(false)
        } catch (error: any) {
            // @ts-ignore
            toastMessage.current.show({severity: 'error', summary: 'Create Customer', detail: error.message});
        }


    }


    return (
        <>
            <h1>Customers</h1>

            <Toast ref={toastMessage}/>

            <Dialog onHide={() => {
                setShowCreateDialog(false)
            }}
                    visible={showCreateDialog}>


                {/*<CustomerForm id={100} onCustomerSave={() => {*/}
                {/*    setShowCreateDialog(false)*/}
                {/*}}/>*/}

                <CustomerForm id={100} onCustomerSave={handleOnSaveCustomer}/>


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
                        onClick={handleAddCustomer}
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