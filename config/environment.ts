import environmentData from "../environment.json";

export type EnvironmentConfig = {
  environment: string;
  uiBaseUrl: string;
  apiBaseUrl: string;
  timeout: number;
};

const config: EnvironmentConfig = {
  ...environmentData,
  uiBaseUrl: process.env.UI_BASE_URL ?? environmentData.uiBaseUrl,
  apiBaseUrl: process.env.API_BASE_URL ?? environmentData.apiBaseUrl,
  environment: process.env.TEST_ENV ?? environmentData.environment
};

export default config;
