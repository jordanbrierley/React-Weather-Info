import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	// console.log('Action Recived', action);
	switch (action.type){
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]);
			// ES6 - inserts at the top of current array
			return [action.payload.data, ...state];
	}


	return state;
}