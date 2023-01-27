import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]
    
    test('regrasar el estado inicial', () => {
        const newState = todoReducer( initialState, {} );

        expect( newState ).toBe(initialState);
    })

    test('agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe(2);
        expect( newState ).toContain( action.payload );
    })

})