'use server'

import getAppDB from "@/server/lib/mongodb-service";

export async function getCustomers() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const db: any = await getAppDB()

    const customers =  await
        db
            .collection("customer")
            .find({})
            .toArray()
    console.log(customers)

    return customers;

}