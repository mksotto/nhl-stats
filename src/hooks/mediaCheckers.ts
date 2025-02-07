import {useMediaQuery} from "@uidotdev/usehooks";

export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
export const useIsMedium = () => useMediaQuery('(min-width : 730px) and (max-width : 1024px)');
export const useIsLarge = () => useMediaQuery('(min-width : 1025px)');
export const useIsExtraLarge = () => useMediaQuery('(min-width : 1221px)');