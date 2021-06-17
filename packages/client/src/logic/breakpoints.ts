import { useBreakpoint, useMemo } from 'vooks';

const breakpointRef = useBreakpoint();
export const isMobile = useMemo(() => breakpointRef.value === 'xs');
export const isTablet = useMemo(() => breakpointRef.value === 's');
export const isSmallDesktop = useMemo(() => breakpointRef.value === 'm');
