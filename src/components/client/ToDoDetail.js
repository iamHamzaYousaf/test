import React, { useEffect } from 'react';
import ClientNav from './ClientNav';
import { useSelector } from "react-redux";


export const ToDoDetail = (props) => {
    const todo = useSelector(state => state?.todo?.todo);

    return (
        <div>
            <ClientNav />
            <div class="flex items-center">
                <div class="w-full">
                    <div class="pt-6 px-4 sm:px-6 lg:px-8">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl py-1">
                            <span>To DO Detail</span>
                        </h2>
                    </div>
                    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{todo?.title}</h5>
                            </a>
                            <div class="flex justify-between items-center">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">Status</span>
                                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{todo?.completed ? "Completed" : "Pending"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoDetail;