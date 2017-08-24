/*
 *OfferingsConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

 export const FETCH_OFFERINGS = 'clickIPO/Offerings/FETCH_OFFERINGS';
 export const FETCH_OFFERINGS_DATA = 'clickIPO/Offerings/FETCH_OFFERINGS_DATA';
 export const SEARCH_OFFERINGS = 'clickIPO/Offerings/SEARCH_OFFERINGS';
 export const SEARCH_OFFERINGS_SUCCESS = 'clickIPO/Offerings/SEARCH_OFFERINGS_SUCCESS';
