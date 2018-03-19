/**
 * @flow
 */

import React from 'react';
import styled, { withTheme } from 'styled-components';
import { darken, em, lighten, rem } from 'polished';

import {
  STATUS_ERROR,
  STATUS_WARNING,
  STATUS_SUCCESS,
  THEME_LIGHT,
} from '../constants/app';
import { tone } from '../utils/style';
import CheckIcon from './icon/Check';
import CrossIcon from './icon/Cross';
import WarningIcon from './icon/Warning';
import VisuallyHidden from './VisuallyHidden';
import type { Status } from '../types';

const Input = styled.input`
  width: ${(props) => (props.isInline ? 'auto' : '100%')};
  height: ${(props) => em(props.theme.formControlHeight)};
  line-height: ${(props) => `${props.theme.formControlHeight}px`};
  padding: ${(props) =>
    (props.showStatusIcon
      ? `0 45px 0 ${props.theme.formFieldPadding}px`
      : `0 ${props.theme.formFieldPadding}px`)};
  border: 1px solid
    ${(props) => {
    const statusColors = {
      [STATUS_ERROR]: props.theme.errorMainColor,
      [STATUS_WARNING]:
          props.theme.type === THEME_LIGHT
            ? darken(0.02, props.theme.warningMainColor)
            : props.theme.warningMainColor,
      [STATUS_SUCCESS]: props.theme.successMainColor,
    };
    const statusColor = props.status ? statusColors[props.status] : null;

    return statusColor
      ? `${statusColor} !important`
      : props.theme.formFieldBorderColor;
  }};
  border-radius: ${(props) => `${props.theme.formControlRadius}px`};
  box-shadow: ${(props) => props.theme.formFieldShadow};
  background-color: ${(props) => props.theme.formFieldBackgroundColor};
  color: ${(props) => props.theme.textColorMain};
  font-size: ${(props) => rem(props.theme.formControlFontSize)};
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${(props) =>
    tone(props, props.theme.formFieldBorderColor, 0.2)};
  }
  &:focus {
    border-color: ${(props) => props.theme.actionColor};
    background-color: ${(props) => props.theme.formFieldBackgroundColor};
    outline: 0;
  }
  &[disabled] {
    border-color: #eee;
    color: ${(props) => props.theme.textColorDisabled};
  }
`;
const FieldContainer = styled.div`
  position: relative;
`;
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 15px;
`;

const ICON_MAP = {
  [STATUS_ERROR]: CrossIcon,
  [STATUS_WARNING]: WarningIcon,
  [STATUS_SUCCESS]: CheckIcon,
};

type Props = {
  label: string,
  name: string,
  theme: Object,
  isInline?: boolean,
  isLabelVisible?: boolean,
  showStatusIcon?: boolean,
  statusIconSize?: number,
  status?: ?Status,
  type?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url',
};

function TextField(props: Props) {
  // The status icon is placed next to the field, but its description text
  // should be a part of the label. The required nesting from this rule makes
  // that impossible.
  /* eslint-disable jsx-a11y/label-has-for */

  const {
    name,
    label,
    isLabelVisible,
    showStatusIcon,
    statusIconSize,
    status,
    ...passProps
  } = props;
  const StatusIcon = ICON_MAP[status];
  const StatusIconColors = {
    [STATUS_ERROR]:
      props.theme.type === THEME_LIGHT
        ? props.theme.errorMainColor
        : lighten(0.05, props.theme.errorMainColor),
    [STATUS_WARNING]:
      props.theme.type === THEME_LIGHT
        ? darken(0.06, props.theme.warningMainColor)
        : props.theme.warningMainColor,
    [STATUS_SUCCESS]:
      props.theme.type === THEME_LIGHT
        ? props.theme.successMainColor
        : lighten(0.05, props.theme.successMainColor),
  };
  const StatusIconColor = StatusIconColors[status];
  const baseLabel = <label htmlFor={name}>{label}:</label>;
  const labelOutput = isLabelVisible ? (
    baseLabel
  ) : (
    <VisuallyHidden>{baseLabel}</VisuallyHidden>
  );

  return (
    <React.Fragment>
      {labelOutput}
      <FieldContainer>
        <Input
          name={name}
          id={name}
          status={status}
          showStatusIcon={showStatusIcon}
          {...passProps}
        />
        {Boolean(showStatusIcon && status && StatusIcon) && (
          <StatusContainer>
            <StatusIcon size={statusIconSize} color={StatusIconColor} />
          </StatusContainer>
        )}
      </FieldContainer>
    </React.Fragment>
  );
}
TextField.displayName = 'components/TextField';
TextField.defaultProps = {
  isInline: false,
  isLabelVisible: true,
  showStatusIcon: true,
  statusIconSize: 16,
  status: null,
  type: 'text',
};

export default withTheme(TextField);
