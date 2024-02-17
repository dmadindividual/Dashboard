import css from './Sidebar.module.css'
import {MdSpaceDashboard} from'react-icons/md'
import {AiFillCalendar, AiOutlineTable} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {

  return (

    <div className={css.container}>
    

        <div className={css.menu}>
            <NavLink to='dashboard' title='Dashboard' className={css.menuItem}>
                <MdSpaceDashboard size={30}/>
            </NavLink>
            <NavLink to='calendar' title='calendar' className={css.menuItem}>
                <AiFillCalendar size={30}/>
            </NavLink>
            <NavLink to='board' title='trello board' className={css.menuItem}>
                <FaTasks size={30}/>
            </NavLink>
            <NavLink to='user' title='Users' className={css.menuItem}>
                <AiOutlineTable size={30}/>
            </NavLink>
  

        </div>




    </div>
  )
}

export default Sidebar