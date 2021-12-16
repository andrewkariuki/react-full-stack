require("dotenv-safe").config();

export const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  dbUrl: "",
  redisURL: "",
};
