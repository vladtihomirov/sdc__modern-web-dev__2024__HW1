import {defineConfig, devices} from "@playwright/test";
import {cucumberReporter, defineBddConfig} from "playwright-bdd";


export default defineConfig({
  testDir: defineBddConfig({
    outputDir: "./.features-gen/hedwig",
    paths: [
      "./tests/cart/cart.e2e.feature",
    ],
    require: [
      "./tests/cart/cart.e2e.when.ts",
      "./tests/cart/cart.e2e.then.ts",
      "./tests/cart/cart.e2e.given.ts",
    ],
    featuresRoot: "./",
  }),
  webServer: {
    command: "vite",
    url: "http://localhost:5173",
    timeout: 1000,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: {width: 1440, height: 820},
        launchOptions: {args: ["--headless=chrome"]},
        headless: true,
      },
    },
  ],
  timeout: 20000,
  reporter: [cucumberReporter('html', { outputFile: 'cucumber-report/report.html' })],
});

export const baseURL = "http://localhost:5173";