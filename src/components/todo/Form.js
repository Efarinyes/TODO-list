import Todo from './Todo';
import { useState } from 'react';

function Form() {

    const [ todo, setTodo ] = useState({});
    const [todos, setTodos ] = useState([

        { todo: 'Feina 1'},
        { todo: 'Feina 2'},
        { todo: 'Feina 3'},
        { todo: 'Feina 4'}

    ]);

    const controlCanvis = e => setTodo({[ e.target.name]: e.target.value });

    const deleteTodo = (index) => {
        const nousTodos = [...todos];
        nousTodos.splice(index, 1);
        setTodos(nousTodos);
    };

    const fanClick = e => {
        if(Object.keys(todos).length === 0 || todo.todo.trim() === '') {
            alert('El camp no pot estar buuit');
            return;
        }
        setTodos([...todos, todo]);
    }

    return (
        <>
            {
                todos.map( (value, index ) => (
                    <Todo todo = { value.todo } key= {index } index={index} deleteTodo={deleteTodo}/>
                ))
            }
            <form onSubmit = {e => e.preventDefault()} >
                <label Afegir feina></label><br/>
                <input type="text" name='todo' onChange = {controlCanvis} />
                <button onClick = {fanClick}>Afegir Feina  </button>
            </form>
            
        </>
    )
}

export default Form;