/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { headerItemStyle } from '../style/mixins';
import { styleObjectToRules } from '../utils/style';
import RichText from './RichText';

const Container = styled.span`
  display: block;
  position: relative;
  line-height: inherit;
`;
const ToggleButton = styled.button`
  ${headerItemStyle};
  border: 0;
  background: ${(props) =>
    (props.isOpen ? props.theme.headerBackgroundHighlightLevel1 : 'inherit')};
`;
const Dialog = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${(props) => (props.dialogWidth ? `${props.dialogWidth}px` : 'auto')};
  max-width: 100vw;
  max-height: 85vh;
  ${(props) =>
    (props.isPadded
      ? styleObjectToRules({
        'border-style': 'solid',
        'border-color': props.theme.headerBackgroundHighlightLevel1,
        'border-width': '15px 20px',
      })
      : null)};
  overflow: auto;
  background: ${(props) => props.theme.headerBackgroundHighlightLevel1};
  color: ${(props) => props.theme.headerTextColor};
  z-index: 100;

  a {
    color: inherit;
  }
`;

type Props = {
  text: string,
  children: mixed,
  dialogWidth: ?number,
  isPadded?: boolean,
};
type State = {
  isOpen: boolean,
};

export default class HeaderDropdown extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  close = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleDocumentClick = (e) => {
    // Close on clicks outside this component
    if (!this.containerRef.contains(e.target)) {
      this.close();
    }
  };

  handleButtonPress = () => {
    this.toggle();
  };

  render() {
    return (
      <Container
        innerRef={(c) => {
          this.containerRef = c;
        }}
      >
        <ToggleButton
          type="button"
          onClick={this.handleButtonPress}
          isOpen={this.state.isOpen}
        >
          {this.props.text}
        </ToggleButton>
        {this.state.isOpen && (
          <Dialog
            dialogWidth={this.props.dialogWidth}
            isPadded={this.props.isPadded}
          >
            <RichText isTight>{this.props.children}</RichText>
          </Dialog>
        )}
      </Container>
    );
  }
}
HeaderDropdown.displayName = 'components/HeaderDropdown';
HeaderDropdown.defaultProps = {
  isPadded: true,
};
