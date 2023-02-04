import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('<HomePage />', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    }

    test('debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe( 'null' );
    })

    test('debe mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(user.name.toString());
    })
})