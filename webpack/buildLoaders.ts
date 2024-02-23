import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { BuildOptionsI } from './types';

export function buildLoaders(options: BuildOptionsI): ModuleOptions['rules'] {
  const isProd = options.mode === 'production';
  const isDev = options.mode === 'development';

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: true,
        },
      },
    ],
    exclude: /node_modules/,
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif|webp)$/i,
    type: 'asset/resource',
  };
  const svgrLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: { icon: true },
      },
    ],
  };

  return [tsLoader, scssLoader, assetsLoader, svgrLoader];
}
