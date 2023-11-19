import { tokens } from '@snsw/react-component-library';
import { pxToRem } from '../../utils/pxToRem';

/**
 * Usage:
 * base=16px,
 * desc=14px,
 * xs=12px,
 * sm=18px,
 * md=20px,
 * lg=22px,
 * xl=26px,
 * xxl=28px,
 * xxxl=32px,
 * xxxxl=36px
 */
export const fontSizes = {
  base: pxToRem(16),
  desc: pxToRem(14),
  xs: pxToRem(12),
  sm: pxToRem(18),
  md: pxToRem(20),
  lg: pxToRem(22),
  xl: pxToRem(26),
  xxl: pxToRem(28),
  xxxl: pxToRem(32),
  xxxxl: pxToRem(36),
};

export const fontWeight = {
  book: 300,
  medium: 500,
  bold: 700,
};

export const fontType = {
  body: tokens.font.family,
};
