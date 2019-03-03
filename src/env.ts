export const DEBUG = process.env.NODE_ENV === "development";
export const DEV_SERVER_PORT = process.env.REACT_APP_DEV_SERVER_PORT
  ? process.env.REACT_APP_DEV_SERVER_PORT
  : 8000;
