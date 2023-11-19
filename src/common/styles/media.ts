import { tokens } from '@snsw/react-component-library';
import { pxToRem } from '../../utils/pxToRem';

const { breakpoints } = tokens;

const customMediaQuery = (width: number) =>
  `@media screen and (min-width: ${pxToRem(width)})`;

const customMediaQueryDown = (width: number) =>
  `@media screen and (max-width: ${pxToRem(width)})`;

/**
 * Usage:
 *  const Sample = styled.div`
 ${media.desktop} {
        background: green;
      }

 ${media.tablet} {
        background: blue;
      }

 ${media.custom(1024)} {
        background: red;
      }
 `;

 xs: 414,
 sm: 480,
 md: 768,
 lg: 1024,
 xl: 1224
 */
export const media = {
  tablet: customMediaQuery(breakpoints.md),
  tabletAndDown: customMediaQueryDown(breakpoints.md),
  desktop: customMediaQuery(breakpoints.lg),
  custom: customMediaQuery,
  print: '@media print',
};
