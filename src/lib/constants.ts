import * as HttpStatusPharases from "stoker/http-status-phrases"
import { createMessageObjectSchema } from "stoker/openapi/schemas"

export const ZOD_ERROR_MESSAGE = {
  REQUIRED: "Required",
  EXPECTED_NUMBER: "Expected number, recieved NaN",
  NO_UPDATES: "No update provided",
}

export const ZOD_ERROR_CODES = {
  INVALID_UPDATES: "invalid_updates",
}

export const notFoundSchema = createMessageObjectSchema(HttpStatusPharases.NOT_FOUND)
