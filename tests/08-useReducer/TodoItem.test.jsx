import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onToggleTodoMock = jest.fn();
    const onDeleteTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe mostrar el Todo pendiente', () => {
    
        render(
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock } 
            />
        )

        const liElement = screen.getByRole('listitem');
        expect ( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );

        const spanElement = screen.getByLabelText('span');
        expect ( spanElement.className ).toContain( 'align-self-center' );
        expect ( spanElement.className ).not.toContain( 'text-decoration-line-through' );

    })

    test('debe mostrar el Todo completado', () => {

        todo.done = true;
    
        render(
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock } 
            />
        )

        const liElement = screen.getByRole('listitem');
        expect ( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );

        const spanElement = screen.getByLabelText('span');
        expect ( spanElement.className ).toContain( 'align-self-center' );
        expect ( spanElement.className ).toContain( 'text-decoration-line-through' );

    })

    test('span debe llamar ToggleTodo', () => {
        render(
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock } 
            />
        )

        const spanElement = screen.getByLabelText('span');
        spanElement.click();

        expect( onToggleTodoMock ).toBeCalledWith(todo.id);
    })

    test('button debe llamar DeleteTodo', () => {
        render(
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock } 
            />
        )

        const btnElement = screen.getByRole('button');
        btnElement.click();

        expect( onDeleteTodoMock ).toBeCalled();
    })
});
