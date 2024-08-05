import { defineProject, mergeConfig } from 'vitest/config';

import configShared from '../../vitest.shared.unit';

export default mergeConfig(
    configShared,
    defineProject({
        test: {},
    }),
);
