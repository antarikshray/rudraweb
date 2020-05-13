import { ReactElement } from 'react';
import { SwiperModules, SwiperModuleName } from './types';
export declare const classNames: (el: string | HTMLElement | undefined) => string;
export declare const validateChildren: (children: any) => boolean;
export declare const isReactElement: (element: ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>) => boolean;
export declare const isModuleAvailable: (modules: SwiperModules, moduleName: SwiperModuleName) => boolean;
