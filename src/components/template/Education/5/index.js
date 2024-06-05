import '../../../../styles/Education/template5.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function EducationTemplate5() {

    let [todolist, setToDoList] = useState([]);

    const addNewTask = (newElement) => {
        let id = Number(document.getElementById('input-id').value);
        let task = document.getElementById('input-tache').value;
        document.getElementById('input-tache').value = "";

        //input tache ne doit pas etre vide 
        if (task.length != 0) {
            //Ajouter dans le tableau todolist 
            setToDoList( // Replace the state
                [ // with a new array
                    ...todolist,
                    { "id": id, "task": task }
                ]
            );
        }

    }

    const updateTask = () => {
        let id = Number(document.getElementById('input-id-foredit').value);
        let task = document.getElementById('input-tache-foredit').value;
        const changgment = todolist.map((c) => {
            if (c.id === id) {
                // Increment the clicked counter
                return  { "id": id, "task": task };
            } else {
                // The rest haven't changed
                return c;
            }
        });
        setToDoList(changgment);
        console.log(changgment)
        closeEdit()
    }

    const openEdit = () => {
        document.getElementById('div-edit').style.display = "block";
        document.getElementById('div-buttons-ed').style.display = "none";

    }

    const closeEdit = () => {
        document.getElementById('div-edit').style.display = "none";
        document.getElementById('div-buttons-ed').style.display = "block";

    }

    const deleteNewTask = (id) => {
        let list = todolist.filter(a =>
            a.id !== id)
        setToDoList(list)
    }

    return (

        <div id='div-Education5-body' className="d-flex justify-content-center align-items-center">
            <div id='div-Education5-container' >

                <h1>To do list </h1>

                <div className="d-flex justify-content-center align-items-center">
                    <input id="input-tache" className="form-control" placeholder='Saisissez une nouvelle tâche*' />
                    <input id="input-id" type="hidden" value={todolist.length + 2} />

                    <button className="btn btn-primary" onClick={() => { addNewTask("MAnger sainement") }}> Créer</button>
                </div>

                <ul id="liste-des-taches">
                    {todolist.map((element) =>
                        <li key={element.id} className="d-flex justify-content-between align-items-center">
                            <div>{element.task}</div>
                            <div>

                                <div id="div-edit">

                                    <input id="input-id-foredit" type="hidden" value={element.id} />
                                    <input id="input-tache-foredit" className='form-control' defaultValue={element.task} />
                                    <button className="btn btn-primary" onClick={() => { updateTask() }}>
                                        Enregistrer les modifications
                                    </button>
                                    <button className="btn btn-light" onClick={closeEdit}>
                                        Annuler
                                    </button>
                                </div>
                                <div id="div-buttons-ed">
                                    <button id="btn-edit" className="btn btn-primary" onClick={openEdit} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                                        </svg>
                                    </button>
                                    <button id="btn-delete" className="btn btn-danger" onClick={() => { deleteNewTask(element.id) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default EducationTemplate5;