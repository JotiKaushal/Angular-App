import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.action";



export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}


const initialState: State = {
    ingredients :  [
        new Ingredient('Apple', 5),
        new Ingredient('Tomotos', 5)
        ],
        editedIngredient: null,
        editedIngredientIndex: -1
};

export function shoppingListReducer(
   state: State = initialState ,
   action: ShoppingListActions.ShoppingListActions){
switch(action.type){
    case ShoppingListActions.ADD_INGREDIENT:
        return {
          ...state,  //copy the old state (alway copy old state then do changes)
          ingredients: [...state.ingredients, action.payload]
        };
        case ShoppingListActions.ADD_INGREDIENTS:
          return {
            ...state,  //copy the old state (alway copy old state then do changes)
            ingredients: [...state.ingredients, ...action.payload]
          };
          case ShoppingListActions.UPDATE_INGREDIENT:
           //ALWAYS COPY IMMUTABLE DATA
          //connot overrite old state data
          const ingredient = state.ingredients[state.editedIngredientIndex];
          
          //copy it then overwrite old data
          const updatedIngredient = {
             ...ingredient,
              ...action.payload
           };
          const updatedIngredients = 
          [...state.ingredients];

          updatedIngredients[state.editedIngredientIndex] = 
          updatedIngredient;
          return{...state,
               ingredients: updatedIngredients,
               editedIngredientIndex: -1,
               editedIngredient: null};

          case ShoppingListActions.DELETE_INGREDIENT:
            return {...state, 
              ingredients: state.ingredients.filter((ig, igIndex) =>{
              return igIndex != state.editedIngredientIndex;
            }),
            editedIngredientIndex: -1,
            editedIngredient: null};

            case ShoppingListActions.START_EDIT:
              return{
                ...state,
                editedIngredientIndex : action.payload,
                editedIngredient: {...state.ingredients[action.payload]}
              }
              case ShoppingListActions.STOP_EDIT:
                return{
               ...state,
             editedIngredientIndex: -1,
               editedIngredient : null
                }
        default:
          return state;
}
}