/*
 * ResetPasswordConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SUBMIT_RESET_FORM = 'clickIPO/Reset/SUBMIT_RESET_FORM';
export const SET_RESET_TOKEN = 'clickIPO/Reset/SET_RESET_TOKEN';
export const SUBMIT_RESET_FORM_FAILURE = 'clickIPO/Reset/SUBMIT_RESET_FORM_FAILURE';
export const SUBMIT_RESET_FORM_SUCCESS = 'clickIPO/Reset/SUBMIT_RESET_FORM_SUCCESS';
