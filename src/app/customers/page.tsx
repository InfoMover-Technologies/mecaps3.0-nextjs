'use client'
import {useEffect, useState} from "react";
import {createCustomer, getCustomersWithAPI} from "@/server/customers";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {Field, Form, Formik} from "formik";
import {InputText} from "primereact/inputtext";



export default function CustomerPage() {

    const [customers, setCustomers] = useState<any[]>([])
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false)


    const initialValues = {
        id: '',
        name: ''
        // templateType: template?.templateType || 'Email'
    };

    const asyncGetCustomers = async () => {
        const _customers = await getCustomersWithAPI();
        setCustomers(_customers)
    }

    const asyncCreateCustomer = async(customer:any) => {
        const _response = await createCustomer(customer)
        console.log(_response)

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
                <div>
                    <h3>Creat Customer</h3>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={(data: any) => {
                            console.log(data)
                            asyncCreateCustomer(data)
                        }}
                    >

                        {({handleChange, values}) => (
                            <Form className="p-fluid">
                                <div className="field">
                                    <label htmlFor="title">ID</label>
                                    <Field name="id">
                                        {({field}: { field: any }) => (
                                            <InputText
                                                id="title"
                                                {...field}
                                                onChange={handleChange}
                                                value={values.id}

                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="field">
                                    <label htmlFor="title">Name</label>
                                    <Field name="name">
                                        {({field}: { field: any }) => (
                                            <InputText
                                                id="name"
                                                {...field}
                                                onChange={handleChange}
                                                value={values.name}

                                            />
                                        )}
                                    </Field>
                                </div>

                                <Button
                                    className=" bg-primary-500"

                                    label={"Save"}
                                    icon="pi pi-save"
                                    type="submit"
                                />

                            </Form>
                        )}

                    </Formik>


                </div>


            </Dialog>


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