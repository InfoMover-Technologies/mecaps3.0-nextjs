import { MongoClient } from "mongodb";

// Extend globalThis to include custom properties
declare global {
    // Add a type definition for the MongoDB cache
    var _mongoClientCache: {
        client: MongoClient | null;
        appDB: any | null;
        authDB: any | null;
    };
}

// Ensure the globalThis object has the cache, or initialize it
if (!globalThis._mongoClientCache) {
    globalThis._mongoClientCache = {
        client: null,
        appDB: null,
        authDB: null,
    };
}

const uri = process.env.MONGODB_URI as string;

// Helper function to test if the MongoDB connection is alive
async function isConnectionAlive(client: MongoClient) {
    try {
        // Ping the MongoDB server to see if it's still responsive
        await client.db().admin().ping();
        return true;
    } catch (error) {
        console.error("MongoDB connection is down: ", error);
        return false;
    }
}

export async function databaseConnect() {
    // Check if the client and databases are already cached and alive
    if (globalThis._mongoClientCache.client && globalThis._mongoClientCache.appDB && globalThis._mongoClientCache.authDB) {
        const isAlive = await isConnectionAlive(globalThis._mongoClientCache.client);

        if (isAlive) {
            return {
                client: globalThis._mongoClientCache.client,
                appDB: globalThis._mongoClientCache.appDB,
                authDB: globalThis._mongoClientCache.authDB,
            };
        } else {
            globalThis._mongoClientCache.client = null;
            globalThis._mongoClientCache.appDB = null;
            globalThis._mongoClientCache.authDB = null;
        }
    }

    // Create a new MongoClient if not cached or cache is stale
    const client = new MongoClient(uri, {
        connectTimeoutMS: 30000,
        socketTimeoutMS: 45000,
        maxIdleTimeMS: 500,
        minPoolSize: process.env.CONNECTION_POOL_SIZE ? Number(process.env.CONNECTION_POOL_SIZE) : 3,
        maxPoolSize: process.env.CONNECTION_POOL_SIZE ? Number(process.env.CONNECTION_POOL_SIZE) : 3,
    });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const appDB = client.db(process.env.APP_DATABASE);
        const authDB = client.db(process.env.AUTH_DATABASE);

        // Cache the connection in globalThis for reuse
        globalThis._mongoClientCache.client = client;
        globalThis._mongoClientCache.appDB = appDB;
        globalThis._mongoClientCache.authDB = authDB;

        return { client, appDB, authDB };
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        throw new Error("Failed to connect to MongoDB.");
    }
}

export default async function getAppDB() {
    const { appDB } = await databaseConnect();
    return appDB;
}

// export async function getAuthDB() {
//     const { authDB } = await databaseConnect();
//     return authDB;
// }







// import {MongoClient} from "mongodb";
//
// // Extend globalThis to include custom properties
//
// declare global {
//     // Add a type definition for the MongoDB cache
//     var _mongoClientCache: {
//         client: MongoClient | null;
//         appDB: any | null;
//         authDB: any | null;
//     };
// }
//
// // Ensure the globalThis object has the cache, or initialize it
// if (!globalThis._mongoClientCache) {
//     globalThis._mongoClientCache = {
//         client: null,
//         appDB: null,
//         authDB: null,
//     };
// }
//
// const uri = process.env.MONGODB_URI as string;
//
//
// export async function databaseConnect() {
//     // Check if the client and databases are already cached
//     if (globalThis._mongoClientCache.client && globalThis._mongoClientCache.appDB && globalThis._mongoClientCache.authDB) {
//         return {
//             client: globalThis._mongoClientCache.client,
//             appDB: globalThis._mongoClientCache.appDB,
//             authDB: globalThis._mongoClientCache.authDB,
//         };
//     }
//
//     // Create a new MongoClient if not cached
//     const client = new MongoClient(uri, {
//         connectTimeoutMS: 30000,
//         socketTimeoutMS: 45000,
//         minPoolSize: 2,
//         maxPoolSize: process.env.CONNECTION_POOL_SIZE ? Number(process.env.CONNECTION_POOL_SIZE) : 3,
//     });
//
//     // Connect to the MongoDB cluster
//     await client.connect();
//     const appDB = client.db(process.env.APP_DATABASE);
//     const authDB = client.db(process.env.AUTH_DATABASE);
//
//     // Cache the connection in globalThis for reuse
//     globalThis._mongoClientCache.client = client;
//     globalThis._mongoClientCache.appDB = appDB;
//     globalThis._mongoClientCache.authDB = authDB;
//
//     return {client, appDB, authDB};
// }
//
// export default async function getAppDB() {
//     const {appDB} = await databaseConnect();
//     return appDB;
// }
//
// export async function getAuthDB() {
//     const {authDB} = await databaseConnect();
//     return authDB;
// }