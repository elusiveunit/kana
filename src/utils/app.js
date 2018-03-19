/**
 * @flow
 */

/**
 * Log an error message.
 */
export function consoleCall(method: string, ...msg: Array<mixed>): void {
  /* eslint-disable no-console */
  if (console && console[method]) {
    console[method](...msg);
  }
}

/**
 * Log a debug message when developing.
 */
export function debug(...msg: Array<mixed>): void {
  if (window.location.hostname === 'localhost') {
    consoleCall('log', ...msg);
  }
}

/**
 * Log an error message.
 */
export function logError(...msg: Array<mixed>): void {
  consoleCall('error', ...msg);
}
