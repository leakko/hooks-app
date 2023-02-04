import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { UserProvider } from "../../src/09-useContext/context/UserProvider"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('<LoginPage />', () => {
    test('Mostrar componente sin usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage></LoginPage>
            </UserContext.Provider>
        )

        expect(screen.getByLabelText('pre').innerHTML).toBe('null');
    })

    test('Llamar el setUser al hacer click en el botón', () => {
        const user = { id: 123, name: 'Juan', email: 'juan@google.com' };
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage></LoginPage>
            </UserContext.Provider>
        )
        const buttonElement = screen.getByRole('button');
        buttonElement.click();

        expect(setUserMock).toHaveBeenCalledWith(user);
    })
})
