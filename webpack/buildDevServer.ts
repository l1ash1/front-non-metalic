import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptionsI } from './types';

export function buildDevServer(options: BuildOptionsI): DevServerConfiguration {
  return {
    port: options.port ?? 5000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
