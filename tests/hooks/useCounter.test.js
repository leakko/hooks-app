import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe('useCounter', () => {
    test('retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('retornar counter con valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(100);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(13);
    });

    test('reducir el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(7);
    });

    test('resetear el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { decrement, reset } = result.current;

        act(() => {
            decrement(2);
            reset()
        });

        expect( result.current.counter ).toBe(10);
    });

});