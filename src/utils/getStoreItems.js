import axios from 'axios';
import {ALL_ITEMS_REQUEST, DEALS_REQUEST} from './requestVars.js';

const ALL_ITEMS_URL = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';
const ITEMS_ON_SALE_URL = 'https://gp-super-store-api.herokuapp.com/item/list?isOnSale=true';

const getItems = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const requestStoreItems = async (requestType) => {
  let items;
  // If all items are requested from home page
  if (requestType === ALL_ITEMS_REQUEST) {
    items = await getItems(ALL_ITEMS_URL);
  } 
  // If items are requested from deals page
  else if (requestType === DEALS_REQUEST) {
    items = await getItems(ITEMS_ON_SALE_URL);
  } 
  // Unverified request
  else {
    console.log('invalid request type');
  }
  console.log(items);
}

