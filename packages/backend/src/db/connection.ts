import { config } from "../config";
import { getConnectionOptions, createConnection } from "typeorm";
import { Todo } from "../entity/Todo";

export const connectDB = async () => {
  const connectionOptions = await getConnectionOptions(config.nodeEnv);

  return config.nodeEnv === "production"
    ? createConnection({
        ...connectionOptions,
        url: config.dbUrl,
        entities: [Todo],
        name: "default",
      } as any)
    : createConnection({ ...connectionOptions, name: "default" } as any);
};
