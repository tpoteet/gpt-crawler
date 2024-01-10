import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.support.powerofpublicspeaking.com",
  match: "https://www.support.powerofpublicspeaking.com/post/**",
  maxPagesToCrawl: 200,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
