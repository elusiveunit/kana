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
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

type Props = {
  header: mixed,
  bodyContent: mixed,
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
      <PageBody>{props.bodyContent}</PageBody>
    </PageContainer>
  );
}
AppPage.displayName = 'components/AppPage';

export default withTheme(AppPage);
