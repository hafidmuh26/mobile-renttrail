import {combineReducers} from 'redux';
import {itemById, items} from './items';
import {loged} from './login';
import {signup} from './signup';
import {oauthed} from './oauth';
import {partnerById} from "./partners";
import {savedRent, rents, rentById} from "./rents";
import {savedUsers, user, userById} from "./users";

export default combineReducers({
    itemById,
    items,
    loged,
    signup,
    oauthed,
    partnerById,
    savedRent,
    rents, rentById, savedUsers, user, userById
});
