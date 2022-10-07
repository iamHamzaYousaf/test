import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getToDo } from '../../state/actions';

export const ToDo = (props) => {
  const { title, id } = props?.todo;
  const dispatch = useDispatch();
  const history = useHistory();


  const getToDoDetail = () => {
    dispatch(getToDo(id));
    history.push("/todo-detail");
  }

  return (
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <span>{title}</span>
              {" "}
              <button class="bg-blue-500 text-black font-bold py-2 px-4 border border-blue-500 rounded" onClick={() => getToDoDetail()}>
                More Detail
              </button>
          </th>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default ToDo

