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