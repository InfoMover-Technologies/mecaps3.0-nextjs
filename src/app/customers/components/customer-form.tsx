import {Field, Form, Formik} from "formik";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {createCustomer} from "@/server/customers";
import {Toast} from "primereact/toast";
import {useRef} from "react";

export default function CustomerForm(
    {id, onCustomerSave}: {
        id: Number,
        onCustomerSave: (data:any) => void
    }
) {


    const initialValues = {
        id: '',
        name: ''
        // templateType: template?.templateType || 'Email'
    };



    return (

        <>
            <div>
                <h3>Creat Customer {id.toLocaleString()}</h3>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(data: any) => {
                        console.log(data)
                        onCustomerSave(data)
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

        </>
    )
}