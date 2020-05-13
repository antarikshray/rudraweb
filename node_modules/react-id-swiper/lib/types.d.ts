import { ReactElement } from 'react';
declare type Maybe<T> = T | null;
import Swiper, { SwiperOptions, SelectableElement as SwiperSelectableElement, SwiperModule } from 'swiper';
export declare type ReactIdSwiperRenderProps = (props: ReactIdSwiperProps) => Maybe<ReactElement>;
export declare type WrappedElementType = 'div' | 'section' | 'span';
export declare type ReactIdSwiperChildren = ReactElement | ReactElement[];
export declare type GetSwiper = (swiper: SwiperInstance) => void;
export declare type SwiperModules = (SwiperModule & {
    name: string;
})[];
export interface ReactIdSwiperProps extends SwiperOptions {
    ContainerEl?: WrappedElementType;
    WrapperEl?: WrappedElementType;
    containerClass?: string;
    wrapperClass?: string;
    slideClass?: string;
    rebuildOnUpdate?: boolean;
    shouldSwiperUpdate?: boolean;
    getSwiper?: GetSwiper;
    activeSlideKey?: string;
    renderScrollbar?: ReactIdSwiperRenderProps;
    renderPagination?: ReactIdSwiperRenderProps;
    renderPrevButton?: ReactIdSwiperRenderProps;
    renderNextButton?: ReactIdSwiperRenderProps;
    renderParallax?: ReactIdSwiperRenderProps;
    rtl?: string;
    children?: ReactIdSwiperChildren;
    parallaxEl?: {
        el: string;
        value: string;
    };
}
export interface ReactIdSwiperCustomProps extends ReactIdSwiperProps {
    modules?: SwiperModules;
    Swiper: typeof Swiper;
}
export declare type SelectableElement = SwiperSelectableElement | undefined;
export declare type SwiperInstance = Maybe<Swiper>;
export declare type SwiperModuleName = 'navigation' | 'pagination' | 'scrollbar' | 'autoplay' | 'parallax' | 'lazy' | 'effect-fade' | 'effect-coverflow' | 'effect-flip' | 'effect-cube' | 'zoom' | 'keyboard' | 'mousewheel' | 'virtual' | 'hash-navigation' | 'history' | 'controller' | 'a11y';
export {};
