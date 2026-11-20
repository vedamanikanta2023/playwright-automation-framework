import logger from "../logging/logger";

/**
 * Playwright global setup runs once before the test suite.
 * Add environment checks or test-data preparation here if needed.
 */
async function globalSetup(): Promise<void> {
  logger.info("Starting Playwright test suite");
}

export default globalSetup;
