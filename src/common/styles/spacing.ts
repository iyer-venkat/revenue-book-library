import { utils, tokens } from '@snsw/react-component-library';

const { getSpacing } = utils;
const { spacing: spacingType } = tokens;
const customSpacing = (width: string | number) => getSpacing(width);

export type SpacingSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'none';

/**
 * usage:
 * margin: ${spacing.xs} ${spacing.md} 0 0;
 *
 * xs = 8px, sm = 16px, md = 24, lg = 32px, xl= 40px, xxl = 48px, xxxl: 56px
 * spacing.custom('20') = 1.25rem
 */
export const spacing = {
  xs: getSpacing(spacingType.xs),
  sm: getSpacing(spacingType.sm),
  md: getSpacing(spacingType.md),
  lg: getSpacing(spacingType.lg),
  xl: getSpacing(spacingType.xl),
  xxl: getSpacing(spacingType.xxl),
  xxxl: getSpacing(spacingType.xxxl),
  custom: customSpacing,
  none: 0,
};
