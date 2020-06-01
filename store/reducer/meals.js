import { MEALS } from '../../data/meals';
import { TOGGLE_FAVORITES } from '../actions/meals';
// inital state
const initialState= {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = ( state = initialState, action ) => {
    console.log('what is in state: ', state);
    switch (action.type) {
        case TOGGLE_FAVORITES:
            const existingIndex = state.favoriteMeals.findIndex( meal => meal.id === action.mealId );
            if( existingIndex >= 0 ) {
                const updatedFavMeals = [ ...state.favoriteMeals ];
                updatedFavMeals.splice(existingIndex, 1);
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                }
            } else {
                const meal = state.meals.find( meal => meal.id === action.mealId );
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat( meal )
                }
            }
            break;
    
        default:
            return state;
    }
}

export default mealsReducer;