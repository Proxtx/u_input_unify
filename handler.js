import { api } from "../../public/meta.js";

export const evaluate = async (value) => {
  return await api.execute(
    value.pwd,
    value.action.appName,
    value.action.method,
    value.action.arguments
  );
};
