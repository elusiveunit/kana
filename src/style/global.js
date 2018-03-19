/**
 * Global page styles.
 *
 * @flow
 */

import { injectGlobal } from 'styled-components';
import { em } from 'polished';

// Only used for font styles, so light or dark doesn't matter
import { light as theme } from './theme';

// Global styling
// eslint-disable-next-line no-unused-expressions
injectGlobal`
  /* Combination of a classic reset and normalize.css. Not using normalize
  as-is since we mostly don't want default browser styles. */

  /* Remove default spacing, essentially making everything a semantic div. */
  html, body, iframe,
  h1, h2, h3, h4, h5, h6,
  p, blockquote, pre,
  img, figure, small,
  dl, dt, dd, ol, ul, li,
  fieldset, legend,
  table, caption, th, td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /*
   1. Force scrollbar.
   2. Disable overlay color when tapping on iOS.
   3. Prevent adjustments of font size after orientation changes on mobiles.
   4. Normalize in all browsers.
  */
  html {
    overflow-y: scroll; /* 1 */
    -ms-overflow-style: scrollbar; /* 1 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 2 */
    -webkit-text-size-adjust: 100%; /* 3 */
    -ms-text-size-adjust: 100%; /* 3 */
    text-size-adjust: 100%; /* 3 */
    line-height: 1; /* 4 */
  }

  /* border-box all the things */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Correct display in older IE */
  article, aside, figcaption, figure, footer, header, main, nav, section {
    display: block;
  }

  /*
   1. Remove the gray background on active links in IE 10.
   2. Remove gaps in links underline in iOS 8+ and Safari 8+.
  */
  a {
    background-color: transparent; /* 1 */
    -webkit-text-decoration-skip: objects; /* 2 */
  }

  /*
   1. Remove the bottom border in Chrome 57- and Firefox 39-.
   2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  */
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /* Normalized weight in all browsers. */
  b, strong {
    font-weight: ${theme.fontWeightBold};
  }

  /*
   1. Correct the odd em font sizing in all browsers.
  */
  pre, code {
    font-family: Consolas, monospace;
    font-size: 1em; /* 1 */
  }

  /* Prevent sub and sup elements from affecting the line height in all browsers. */
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }

  /* Limit embedded media to container size. */
  img, object, embed, iframe, video {
    max-width: 100%;
    width: auto;
    height: auto;
  }
  img {
    vertical-align: middle;
    -ms-interpolation-mode: bicubic;

    /* Style the alt text */
    font-style: italic;
    color: #666;
  }

  /* Hide the overflow in IE. */
  svg:not(:root) {
    overflow: hidden;
  }

  /* Correct display in IE10- */
  [hidden] {
    display: none;
  }

  /*
   1. Change the font styles in all browsers (opinionated).
   2. Remove the margin in Firefox and Safari.
  */
  button, input, optgroup, select, textarea {
    font-family: sans-serif; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /*
   Show the overflow in IE.
   1. Show the overflow in Edge.
  */
  button,
  input { /* 1 */
    overflow: visible;
  }

  /*
   Remove the inheritance of text transform in Edge, Firefox, and IE.
   1. Remove the inheritance of text transform in Firefox.
  */
  button,
  select { /* 1 */
    text-transform: none;
  }

  /* Disable vendor specific form control styling */
  input[type="search"],
  input[type="search"]::-webkit-search-decoration,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: none;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /*
    1. Correct the text wrapping in Edge and IE.
    2. Correct the color inheritance from fieldset elements in IE.
    3. Remove the padding so developers are not caught out when they zero out
      fieldset elements in all browsers.
  */
  legend {
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /* Remove the default vertical scrollbar in IE. */
  textarea {
    overflow: auto;
  }

  /* Remove padding in IE */
  input[type="checkbox"],
  input[type="radio"] {
    padding: 0;
    cursor: pointer;
  }

  /* Correct the cursor style of increment and decrement buttons in Chrome. */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /* Correct the outline style in Safari. */
  input[type="search"] {
    outline-offset: -2px;
  }

  /* Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
   1. Correct the inability to style clickable types in iOS and Safari.
   2. Inherit font properties in Safari.
  */
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* ============================================================ *\
     Global base styling
  \* ============================================================ */
  html, body, #root {
    height: 100%;
  }
  body, button, input, textarea, kbd {
    font-family: ${theme.fontStackMain};
  }
  body {
    line-height: 1.5;
  }
  pre, code {
    font-family: ${theme.fontStackMono};
  }

  /* Headings */
  h1 { font-size: ${em(theme.fontSizeH1)}; }
  h2 { font-size: ${em(theme.fontSizeH2)}; }
  h3 { font-size: ${em(theme.fontSizeH3)}; }
  h4 { font-size: ${em(theme.fontSizeH4)}; }

  /* Links */
  a:hover, a:focus {
    text-decoration: none;
  }

  /* Lists */
  ul, ol {
    margin-left: 1em;
  }

  /* Proper cursors for form elements */
  label, button,
  input[type="button"], input[type="reset"], input[type="submit"] {
    cursor: pointer;
  }
  button[disabled],
  input[disabled] {
    cursor: not-allowed;
  }

  /* Compact tables */
  table {
    border-spacing: 0;
    border-collapse: collapse;
    font-size: inherit;
  }
`;
