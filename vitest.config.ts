import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // nodig om DOM te simuleren
    globals: true, // zodat je `expect` en `describe` kunt gebruiken zonder import
    setupFiles: "./src/setupTests.ts", // optioneel setup bestand
  },
});
