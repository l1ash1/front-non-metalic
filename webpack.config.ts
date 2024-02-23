import path from 'path';
import { buildWebpack } from './webpack/buildWebpack';

type Mode = 'production' | 'development';

interface EndI {
  mode: Mode;
  port: number;
  analyzer: boolean;
}

export default (env: EndI) => {
  const paths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
  });
};
