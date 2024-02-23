import { Configuration } from 'webpack';

import { BuildOptionsI } from './types';

export function buildResolvers(
  options: BuildOptionsI,
): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
}
