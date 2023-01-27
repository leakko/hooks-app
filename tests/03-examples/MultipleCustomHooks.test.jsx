import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('<MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('mostrar el component por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextBtn = screen.getByRole('button', { name: 'Next quote' });
        expect( nextBtn.disabled ).toBeTruthy();

        screen.debug();
    })

    

    test('mostrar un quote', () => {

        useFetch.mockReturnValue([{
            data: [ {author: 'Fernando', quote: 'Hola Mundo'} ],
            isLoading: false,
            hasError: null
        }]);

        render(<MultipleCustomHooks />);

    })

    test('debe  llamar la función de incrementar', () => {

        useFetch.mockReturnValue([{
            data: [ {author: 'Fernando', quote: 'Hola Mundo'} ],
            isLoading: false,
            hasError: null
        }]);


        render( <MultipleCustomHooks /> );
        const nextBtn = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nextBtn );

        expect( mockIncrement ).toHaveBeenCalled();
    })

})