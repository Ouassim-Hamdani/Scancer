import expandIcon from '../assets/expand-icon.svg';
import "tw-elements"
import avatar from "../assets/avatar.png"
import profile from "../assets/profile.svg"
import logout from "../assets/logout.svg"
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
export const NavBar = ({role}) => {

  const {user}=useAuthContext()
  
  const {Logout}=useLogout()
  const logoutClick=()=>{
Logout()

  }
    return (
<header aria-label="Page Header" class="bg-nav nav-header">
  <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-4 lg:px-4 flex items-center justify-between gap-8">
      <div class="flex items-center gap-16">
        <div class="relative pl-20">
          <label class="sr-only" for="search"> Search </label>

          <input
            className="h-10  w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-72"
            id="search"
            type="search"
            placeholder="Search website..."
          />

          <button
            type="button"
            class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span class="sr-only">Submit Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        
      </div>
        
      
      <div className="flex gap-10">
        <a
            href="#"
            class="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
            <span class="sr-only">Notifications</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
            </svg>
            </a>
            <div className="flex gap-4 items-center ">
  <div>
    <div class="dropdown relative">
      <a
        class=" gap-4
          dropdown-toggle
          
          transition
          duration-150
          ease-in-out
          flex
          items-center
        "
        href="#"
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img alt="Man" src={avatar} class="h-10 w-10 rounded-full object-cover"/>
        {role==="admin"?<span className="text-md text-gray-700 font-semibold">{user.firstName +' '+ user.familyName}</span>:<span className="text-md text-gray-500 font-semibold">Dr. <span className="text-gray-700">{user &&  user.firstName +' '+ user.familyName}</span></span>}

        <img src={expandIcon} alt="" />
      </a>
      <ul
        class="
          justify-end
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-right
          
          list-none
          text-center
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton2"
      >
        <li>
          <a
            class=" 
              
              border-b
              border-gray-400
              dropdown-item
              text-md
              py-2
              px-4
              font-normal
              flex flex-row space-x-3 items-center justify-center
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >
              <img src={profile} className="w-5 h-5" alt="" />
              <div className='w-[1px] h-4 bg-gray-600'></div>
              <span>My profile</span>
            </a>
        </li>
        <li>
        <button onClick={logoutClick}>
          <a
            class="

              dropdown-item
              text-md
              py-2
              px-4
              font-normal
              flex flex-row space-x-3 items-center 
              w-full
              whitespace-nowrap
              bg-transparent
              text-rose-600
              hover:bg-gray-100
            "
            href="#"
            >
              <img src={logout} className="w-5 h-5" alt="" />
              <div className='w-[1px] h-4 bg-rose-400'></div>
              <span>Log Out</span>
            </a></button>
        </li>
        
      </ul>
    </div>
  </div>
</div>
            
      </div>
      
    
  </div>
</header>

    );
}