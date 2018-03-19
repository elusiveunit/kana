/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { em, rem } from 'polished';
import capitalize from 'lodash/capitalize';

import { getToneFunc } from '../utils/style';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

const BaseButton = styled.button`
  display: inline-block;
  height: ${(props) => em(props.theme.formControlHeight)};
  line-height: ${(props) => em(props.theme.formControlHeight - 5)};
  padding: 0 15px;
  border: 1px solid;
  border-radius: ${(props) => `${props.theme.formControlRadius}px`};
  overflow: hidden;
  font-size: ${(props) => rem(props.theme.formControlFontSize)};
  font-weight: ${(props) => props.theme.fontWeightRegular};
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
  > span {
    vertical-align: middle;
  }
`;

function buttonVariant(
  props: Object,
  variant: ButtonVariant,
  isStatusColor?: boolean = false,
  reverseHoverTone?: boolean = false,
) {
  const prefix = isStatusColor ? variant : `button${capitalize(variant)}`;
  const baseColor = props.theme[`${prefix}MainColor`];
  const highlightColor = props.theme[`${prefix}ActiveColor`];
  const foreground = props.theme[`${prefix}TextColor`];
  const baseVariant = getToneFunc(props, reverseHoverTone)(0.05, baseColor);

  return `
    border-color: ${baseVariant};
    background: ${baseColor};
    color: ${foreground};

    &:not([disabled]) {
      &:hover, &:focus {
        border-color: ${baseVariant};
        background: ${highlightColor};
      }
    }
  `;
}

const PrimaryButton = BaseButton.extend`
  ${(props) => buttonVariant(props, 'primary', false, true)};
`;

const SecondaryButton = BaseButton.extend`
  ${(props) => buttonVariant(props, 'secondary')};
`;

const SuccessButton = BaseButton.extend`
  ${(props) => buttonVariant(props, 'success', true, true)};
`;

const WarningButton = BaseButton.extend`
  ${(props) => buttonVariant(props, 'warning', true)};
`;

const DangerButton = BaseButton.extend`
  ${(props) => buttonVariant(props, 'error', true, true)};
`;

type Props = {
  onClick: (e: Object) => void,
  type?: 'button' | 'submit' | 'reset',
  variant?: ButtonVariant,
  isSmall?: boolean,
  isPlain?: boolean,
  isNeutral?: boolean,
  disabled?: boolean,
  children?: mixed,
};

/**
 * Button in various styles.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.onClick - Click event handler. Is passed the
 *   original event, but with preventDefault called on it beforehand.
 * @param {string} [props.type] - Button type, defaults to `button`.
 * @param {boolean} [props.isSmall] - Make button smaller.
 * @param {boolean} [props.isPlain] - Use plain text button style.
 * @param {boolean} [props.isNeutral] - Use a minimal amount of styles, to
 *   reduce the need for overriding.
 */
export default class Button extends React.PureComponent<Props> {
  /**
   * Prevent the default click before passing it on to the handler prop.
   *
   * @param {Object} e - Synthetic click event.
   */
  handleClick = (e: Object) => {
    e.preventDefault();
    this.props.onClick(e);
  };

  render() {
    const {
      onClick,
      type,
      variant,
      isSmall,
      isPlain,
      isNeutral,
      children,
      ...passProps
    } = this.props;

    const components = {
      primary: PrimaryButton,
      secondary: SecondaryButton,
      success: SuccessButton,
      warning: WarningButton,
      danger: DangerButton,
    };

    const variantName = variant || 'primary';
    const Component = components[variantName];

    if (onClick) {
      passProps.onClick = this.handleClick;
    }

    return (
      <Component type={type} {...passProps}>
        {children}
      </Component>
    );
  }
}
Button.displayName = 'components/Button';
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  isSmall: false,
  isPlain: false,
  isNeutral: false,
};
