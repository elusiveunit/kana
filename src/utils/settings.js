/**
 * @flow
 */

import { STORAGE_KEY_SETTINGS, DEFAULT_SETTINGS } from '../constants/app';
import { assign } from './object';
import { logError } from './app';

import type { Settings } from '../types';

/**
 * Get settings from localStorage.
 *
 * @return {Object}
 */
export function getSettings(): Settings {
  const savedData = localStorage.getItem(STORAGE_KEY_SETTINGS) || '{}';
  let savedSettings = {};
  try {
    savedSettings = JSON.parse(savedData);
  } catch (e) {
    logError('Parsing saved settings', savedData, e);
  }

  return assign(DEFAULT_SETTINGS, savedSettings);
}

/**
 * Save settings to localStorage.
 *
 * @param {Object} settings - The settings data.
 * @return {boolean} - If the settings were saved successfully.
 */
export function saveSettings(settings: Settings): boolean {
  try {
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
    return true;
  } catch (e) {
    logError('Saving settings', e);
    return false;
  }
}
