import { IManagerState, IModuleError, IFile, IFiles } from 'smooshpack';

export type SandpackContext = SandpackState & {
  dispatch: (message: any) => void;
  listen: (listener: SandpackListener) => Function;
};

export interface SandpackState {
  browserFrame: HTMLIFrameElement | null;
  bundlerState: IManagerState | undefined;
  openPaths: string[];
  activePath: string;
  errors: Array<IModuleError>;
  files: IFiles;
  status: SandpackStatus;
  runSandpack: () => void;
  updateCurrentFile: (file: IFile) => void;
  openFile: (path: string) => void;
  changeActiveFile: (path: string) => void;
}

export type SandpackStatus = 'idle' | 'running';

export type SandpackListener = (msg: any) => void;

export type SandboxTemplate = {
  files: IFiles;
  dependencies: Record<string, string>;
  entry: string;
  main: string;
  environment: SandboxEnviornment;
};

// All fields are optional in the setup prop
// Also, files can be passed easier as Record<string, string>
export type SandpackSetup = {
  files?: Record<string, string | IFile>;
  dependencies?: Record<string, string>;
  entry?: string;
  main?: string;
  environment?: SandboxEnviornment;
};

export type SandboxEnviornment =
  | 'adonis'
  | 'create-react-app'
  | 'vue-cli'
  | 'preact-cli'
  | 'svelte'
  | 'create-react-app-typescript'
  | 'angular-cli'
  | 'parcel'
  | 'cxjs'
  | '@dojo/cli-create-app'
  | 'gatsby'
  | 'marko'
  | 'nuxt'
  | 'next'
  | 'reason'
  | 'apollo'
  | 'sapper'
  | 'nest'
  | 'static'
  | 'styleguidist'
  | 'gridsome'
  | 'vuepress'
  | 'mdx-deck'
  | 'quasar-framework'
  | 'unibit'
  | 'node'
  | 'ember'
  | 'custom'
  | 'babel-repl';

export type SandpackPredefinedTemplate = 'react' | 'vue' | 'vanilla';
// TODO
// | 'angular-cli'
// | 'parcel';

export type SandpackTheme = {
  palette: {
    highlightText: string;
    defaultText: string;
    inactive: string;
    mainBackground: string;
    inputBackground: string;
    accent: string;
  };
  syntax: {
    plain: string;
    disabled: string;
    keyword: string;
    definition: string;
    property: string;
    tag: string;
    static: string;
  };
};

export interface FileResolver {
  isFile: (path: string) => Promise<boolean>;
  readFile: (path: string) => Promise<string>;
}