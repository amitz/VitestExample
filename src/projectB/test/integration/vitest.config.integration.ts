import { defineProject, mergeConfig } from 'vitest/config';

import configShared from '../../../../vitest.shared.integration';

export default mergeConfig(
    configShared,
    defineProject({
        test: {
            name: 'projectB-integration',
        },
    }),
);
