import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ClientNav from './ClientNav';
import ToDo from './ToDo';
import { getToDos } from '../../state/actions';

export const Home = (props) => {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToDos());
    }, []);

    return (
        <div>
            <ClientNav />
            <div class="flex items-center">
                <div class="w-full pt-6 px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl py-1">
                        <span>To DO List</span>
                    </h2>
                    <div>
                        {todos?.map(todo => (
                            <ToDo key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Home;