/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const BASE_URL = 'http://34.210.187.150:3000/web';
export const OPEN_GLOBAL_LOADER = 'clickipo/OPEN_GLOBAL_LOADER';
export const CLOSE_GLOBAL_LOADER = 'clickipo/CLOSE_GLOBAL_LOADER';
