import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  HOSTNAME,
  NODE_ENV,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_COLLECTION,
} = process.env;

const SERVER = {
  hostname: HOSTNAME,
  port: PORT,
  env: NODE_ENV,
  baseURL:
    NODE_ENV === "development"
      ? `http://${HOSTNAME}:${PORT}/`
      : `https://${HOSTNAME}:${PORT}/`,
};

const MONGO = {
  user: MONGO_USER,
  password: MONGO_PASSWORD,
  host: MONGO_HOST,
  collection: MONGO_COLLECTION,
  url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_COLLECTION}`,
  options: { retryWrites: true },
};

const config = { SERVER, MONGO };

export default config;
