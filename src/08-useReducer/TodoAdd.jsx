import { useForm } from "../hooks";

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({description: ''});

    const onFormSubmit = e => {
        e.preventDefault();
        if( description.length <= 1 ) return;
    
        const newTodo = {
            id:  new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                onChange={onInputChange}
                value={description}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
