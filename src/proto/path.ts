import { join } from "path";

export const PROTO_PATH = {
  AUTH: join(__dirname, "../../proto/auth.proto"),
  ACCOUNT: join(__dirname, "../../proto/account.proto"),
  USERS: join(__dirname, "../../proto/users.proto")
} as const;
