/**
 * @flow
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { withTheme } from 'styled-components';
import type { Node } from 'react';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;
const PageContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

type Props = {
  header: mixed,
  bodyContent: mixed,
  extraContent?: ?mixed,
  theme: Object,
};

function AppPage(props: Props): Node {
  const { actionColor, pageBackgroundColor, textColorMain } = props.theme;

  return (
    <PageContainer>
      {/* TODO: Merge with static global styles when the new API is available:
      https://github.com/styled-components/styled-components/issues/1333 */}
      <Helmet>
        <style>
          {`
            body {
              background: ${pageBackgroundColor};
              color: ${textColorMain};
              transition: background-color 0.2s ease;
            }
            ::-moz-selection {
              background: ${actionColor};
              color: #fafafa;
            }
            ::selection {
              background: ${actionColor};
              color: #fafafa;
            }
            a {
              color: ${actionColor};
            }
          `}
        </style>
      </Helmet>
      {props.header}
      <PageBody>
        <PageContent>{props.bodyContent}</PageContent>
        {props.extraContent}
      </PageBody>
    </PageContainer>
  );
}
AppPage.displayName = 'components/AppPage';
AppPage.defaultProps = {
  extraContent: null,
};

export default withTheme(AppPage);
