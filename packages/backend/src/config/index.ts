require("dotenv-safe").config();

export const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  dbUrl: "",
};
