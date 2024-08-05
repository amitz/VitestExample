import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    coverage: {
        provider: 'v8',
        include: ['src'],
        reporter: ['text', 'html'],
        reportsDirectory: './reports/unit/coverage'
    },
    include: ['**/unit/*.test.ts'],
    exclude: ['**/dist', '**/node_modules'],
  },
});
