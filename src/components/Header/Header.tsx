import styled, { type CSSObject } from '@emotion/styled';
import React, { forwardRef } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeaderColor = 'white' | 'red' | 'black' | 'blue' | 'green';

const colorMap: Record<HeaderColor, string> = {
  white: '#fff',
  red: '#d90429',
  black: '#000',
  blue: '#1d4ed8',
  green: '#16a34a',
};

export interface HeaderProps extends Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  'title' | 'color'
> {
  title?: React.ReactNode;
  children?: React.ReactNode;
  size: HeadingLevel;
  fullWidth?: boolean;
  textCenter?: boolean;
  /**
   * Heading color preset. Defaults to 'white'.
   */
  color?: HeaderColor;
}

interface StyledHeadingProps {
  $color: HeaderColor;
  $fullWidth?: boolean;
  $textCenter?: boolean;
}

const headingStyles = ({
  $color,
  $fullWidth,
  $textCenter,
}: StyledHeadingProps): CSSObject => ({
  color: colorMap[$color],
  ...($fullWidth && { width: '100%' }),
  ...($textCenter && { textAlign: 'center' }),
});

const shouldForwardProp = (prop: string) => !prop.startsWith('$');

const styledHeadings = {
  h1: styled('h1', { shouldForwardProp })<StyledHeadingProps>(headingStyles),
  h2: styled('h2', { shouldForwardProp })<StyledHeadingProps>(headingStyles),
  h3: styled('h3', { shouldForwardProp })<StyledHeadingProps>(headingStyles),
  h4: styled('h4', { shouldForwardProp })<StyledHeadingProps>(headingStyles),
  h5: styled('h5', { shouldForwardProp })<StyledHeadingProps>(headingStyles),
  h6: styled('h6', { shouldForwardProp })<StyledHeadingProps>(headingStyles),
} as const;

export const Header = forwardRef<HTMLHeadingElement, HeaderProps>(
  (
    { title, size, fullWidth, textCenter, color = 'white', children, ...rest },
    ref,
  ) => {
    const StyledHeading = styledHeadings[size];
    return (
      <StyledHeading
        ref={ref}
        $color={color}
        $fullWidth={fullWidth}
        $textCenter={textCenter}
        {...rest}
      >
        {title ?? children}
      </StyledHeading>
    );
  },
);

Header.displayName = 'Header';
