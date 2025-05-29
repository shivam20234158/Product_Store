//schema for database

import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// creates a SQL connection using our env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);
  
// # postgresql://neondb_owner:npg_9NiYxrmaAj3F@ep-floral-thunder-a8r5ljms-pooler.eastus2.azure.neon.tech/neondb?sslmode=require

