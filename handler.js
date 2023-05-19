import config from "@proxtx/config";
import { genModule } from "@proxtx/combine/combine.js";
import { genCombine } from "@proxtx/combine-rest/request.js";

let api = await genCombine(config.unifyGui, "public/api.js", genModule);

export const evaluate = async (value) => {
  return await api.execute(
    config.pwd,
    value.action.appName,
    value.action.method,
    value.action.arguments
  );
};
