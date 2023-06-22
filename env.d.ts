/// <reference types="vite/client" />

export interface ImportMetaEnv {
    readonly VITE_SERVICE_KEY: string;
    readonly VITE_TEMPLATE_KEY: string;
    readonly VITE_EMAILJS_API_KEY: string;
}
  
export interface ImportMeta {
  readonly env: ImportMetaEnv
}