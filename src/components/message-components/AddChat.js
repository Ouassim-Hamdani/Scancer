import { patientsChatsAdd } from "../../constants/constants"
import plusIcon from "../../assets/plus.svg"
import "flowbite";
export const AddChat = () => {
  return (
    <div>
        
        <button id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom"  type="button">
        <img src={plusIcon} className="p-3 rounded-full w-10 h-10 hover:bg-gray-100 hover:rotate-90 transition-all shadow-md border border-gray-200" alt="" />

        </button>
        <div id="dropdownUsers" className="z-10 hidden bg-white rounded shadow w-56 dark:bg-gray-700">
        <ul className="h-48 py-1 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
            {patientsChatsAdd.map((patient) => {
                return (
                <li>
                    <a href="#" className="flex text-md text-gray-800 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <img className="w-10 h-10 mr-4 rounded-full" src={patient.avatar}/>
                        {patient.name}
                    </a>
            </li>
                );
            })}

        </ul>
       
        </div>

    </div>
  )
}
