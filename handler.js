import { api } from "../../public/meta.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  return await api.execute(
    config.pwd,
    value.action.appName,
    value.action.method,
    value.action.arguments
  );
};
