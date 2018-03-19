/**
 * @flow
 */

import React from 'react';
import styled, { withTheme } from 'styled-components';

import { tone } from '../utils/style';
import { getToneColor, media } from '../style/mixins';
import EyeIcon from './icon/Eye';

export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  border: 0;
  border-radius: ${(props) => `${props.theme.formControlRadius}px`};
  background: transparent;
  overflow: hidden;
  color: inherit;
  font-size: 1rem;
  font-weight: ${(props) => props.theme.fontWeightRegular};
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-shadow: none;
  cursor: pointer;

  > span {
    vertical-align: middle;
  }
  svg {
    margin-right: 5px;
  }
  &:hover,
  &:focus {
    background: ${(props) => getToneColor(props, 0.05)};
  }
  &[disabled] {
    opacity: 0.5;
    cursor: default;
    background: transparent;
  }
  ${media.small`
    width: 100%;
    padding: 1em 10px;
    background: ${(props) => getToneColor(props, 0.03)};

    &:hover,
    &:focus {
      background: ${(props) => getToneColor(props, 0.08)};
    }
  `};
`;

type Props = {
  onClick: (e: Object) => void,
  theme: Object,
};

/**
 * A reveal button with an eye icon.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.onClick - Click event handler. Is passed the
 *   original event, but with preventDefault called on it beforehand.
 */
class RevealButton extends React.PureComponent<Props> {
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
    const { onClick, ...passProps } = this.props;

    return (
      <Button type="button" onClick={this.handleClick} {...passProps}>
        <EyeIcon
          size={24}
          color={tone(this.props, this.props.theme.textColorMain, 0.05, true)}
        />
        <span>Reveal</span>
      </Button>
    );
  }
}
RevealButton.displayName = 'components/RevealButton';

export default withTheme(RevealButton);
