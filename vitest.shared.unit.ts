import { defineConfig } from 'vitest/config'
import defineWorkspace from './vitest.config'

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    coverage: defineWorkspace.test.coverage,
    include: ['**/*.test.ts'],
  },
});
