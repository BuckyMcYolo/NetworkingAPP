require("dotenv").config()

const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const MONGODB_USERNAME = process.env.MONGODB_USERNAME

import { connectDB, insertDocument } from "../../helpers/db-utils"

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." })
      return
    }

    let client
    try {
      client = await connectDB()
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" })
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail })
      client.close()
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" })
    }

    res.status(201).json({ message: "Signed up!" })
  }
}

export default handler
