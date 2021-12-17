import * as IoRedis from "ioredis";
import { config } from "../config";

export const Redis = config.nodeEnv === "production" ? new IoRedis(config.redisURL) : new IoRedis();
