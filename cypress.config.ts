import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl:'https://www.vatanbilgisayar.com',
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
