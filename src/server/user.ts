"use server"

import { db } from "../../src/db/index"
import { usersTable } from "../db/schema";

export async function insertOneUser(name: string, isnotdrug: string, isdrugabuse: string, iseffect: string) {
    await db.insert(usersTable).values({name: name, isnotdrug: isnotdrug, isdrugabuse:isdrugabuse, iseffect:iseffect});
}