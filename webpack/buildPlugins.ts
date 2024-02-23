import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';

import { BuildOptionsI } from './types';

export function buildPlugins({
  mode,
  paths,
  analyzer,
}: BuildOptionsI): Configuration['plugins'] {
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
    isProd &&
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    isDev && new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
    analyzer && new BundleAnalyzerPlugin(),
  ].filter(Boolean);
}
