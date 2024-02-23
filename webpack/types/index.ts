interface BuildPathI {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

type BuildMode = 'production' | 'development';

export interface BuildOptionsI {
  port: number;
  paths: BuildPathI;
  mode: BuildMode;
  analyzer: boolean;
}
