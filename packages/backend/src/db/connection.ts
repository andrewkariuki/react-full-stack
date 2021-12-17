import { config } from "../config";
import { getConnectionOptions, createConnection } from "typeorm";
import { User } from "../entity/User";

export const connectDB = async () => {
  const connectionOptions = await getConnectionOptions(config.nodeEnv);

  return config.nodeEnv === "production"
    ? createConnection({
        ...connectionOptions,
        url: config.dbUrl,
        entities: [User],
        name: "default",
      } as any)
    : createConnection({ ...connectionOptions, name: "default" } as any);
};
