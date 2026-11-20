# Playwright Automation Framework (TypeScript)

A learning framework based on the folder structure in the supplied screenshot.
It demonstrates UI, API and E2E testing with Playwright Test and TypeScript.

## Prerequisites

- Node.js 22 or a supported newer LTS version
- npm
- VS Code (recommended)

## Setup

```bash
npm install
npx playwright install chromium
```

## Run tests

```bash
npm test
npm run test:ui
npm run test:api
npm run test:e2e
npm run test:headed
npm run test:debug
npm run typecheck
```

Open the HTML report:

```bash
npm run report
```

## Slow down browser actions

Add this inside `use` in `playwright.config.ts`:

```ts
launchOptions: { slowMo: 1000 },
headless: false,
```

Remove `slowMo` when you no longer need slow execution.

## Environment overrides

The defaults are in `environment.json`. You can override them in PowerShell:

```powershell
$env:UI_BASE_URL="https://www.saucedemo.com"
$env:API_BASE_URL="https://jsonplaceholder.typicode.com"
$env:TEST_ENV="qa"
npm test
```

## Folder guide

- `config`: reads environment settings.
- `data`: test input data such as test users.
- `logging`: reusable logger and generated log output.
- `payloads`: JSON request bodies for API tests.
- `routes`: centralized API paths.
- `pages`: Page Object Model classes.
- `tests/UI`: browser UI tests.
- `tests/API`: HTTP API tests.
- `tests/E2E`: user journeys across multiple pages.
- `utils`: common helpers and assertions.
- `.github/workflows`: GitHub Actions pipeline.
- `Jenkinsfile`: Jenkins pipeline example.

## Important notes

- SauceDemo and JSONPlaceholder are public demo services. They are used here as sample targets, not as the original system in the screenshot.
- JSONPlaceholder simulates write operations; POST responses do not create persistent records.
- The Jenkinsfile uses Windows `bat` commands. For a Linux Jenkins agent, replace them with `sh` commands.
- `environment.json` contains non-secret demo configuration only. Do not commit real credentials or tokens.
- Playwright automatically waits for locator actions and assertions. Avoid fixed sleeps unless debugging a timing issue.
