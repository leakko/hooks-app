import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }

    test('Regresar los valores por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          })
    })

    test('Cambiar nombre del formulario', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const newValue = 'Juan';
        const event = { target: new EventTarget() };
        event.target.name = 'name';
        event.target.value = newValue;
        const currentForm = {
            name: newValue,
            email: 'fernando@google.com'
        }

        act(() => {
            result.current.onInputChange(event);
        })

        expect(result.current).toEqual({
            name: newValue,
            email: initialForm.email,
            formState: currentForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test('Resetear formulario', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const newValue = 'Juan';
        const event = { target: new EventTarget() };
        event.target.name = 'name';
        event.target.value = newValue;
        const currentForm = {
            name: newValue,
            email: 'fernando@google.com'
        }

        act(() => {
            result.current.onInputChange(event);
            result.current.onResetForm();
        })

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

})