import env from "@/env"
import * as schema from "./schema"
import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"

const client = createClient({
  url: env.DATABASE_URL,
  authToken: env.DATABASE_AUTH_TOKEN
})

const db = drizzle(client, {
  schema
})

export default db
