import mongoose from "mongoose";
import {dbConnStr} from "./env.js"

let connected = false

async function connect() {
    mongoose.set("strictQuery", true)

    if (connected) return

    try {
        const res = await mongoose.connect(dbConnStr)
        if (!res) throw new Error("Unable to connect to DB")
        connected = true
        return res
    } catch (err) {
        console.log(err.message);
        return null
    }
}

export default connect