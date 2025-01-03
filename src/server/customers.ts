'use server'

import getAppDB from "@/server/lib/mongodb-service";

export async function getCustomers() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const db: any = await getAppDB()

    const customers = await
        db
            .collection("customer")
            .find({})
            .toArray()
    console.log(customers)

    return customers;

}

export async function getCustomersWithAPI() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const response = await fetch("http://localhost:8080/customers")

    return await response.json();


}

export async function createCustomer(customer: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    // try {
    const response = await fetch("http://localhost:8080/customers", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })


    const result = await response.json();
    console.log(result)
    if (result.status) {
        throw Error(result.message)
    }
    return result
    // } catch (error:any) {
    //     throw Error(error.message || "Error in creating customer")
    // }


}