import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GroupsIcon from '@mui/icons-material/Groups';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HailIcon from '@mui/icons-material/Hail';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css'
const Sidebar = () => {
    const NavbarStyle = ({ isActive }) => (isActive ? "text-danger" : "")
  return (
    <div className='Sidebar col-2'style={{ position:"fixed",backgroundColor:'#EAEFEF', height:'inherit'}}>
       <p className='d-flex text-light py-4' style={{ fontSize:'25px',height:'80px',backgroundColor:"#3997D3",justifyContent:'center' ,display:'flex'}}>        
        Club LOGO</p>
       
       <div className='SidebarList'>
       <ul>
            <li >
                <NavLink to="/home" className={NavbarStyle} >
                    <DashboardCustomizeIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                    DashBoard
                </NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/subscription" className={NavbarStyle}>
                <GroupsIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                Subscription
                </NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/receipts" className={NavbarStyle}>
                <ReceiptIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                 Receipts</NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/time" className={NavbarStyle}>
                <AccessTimeIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                Time</NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/attendance" className={NavbarStyle}>
                <HailIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                Attendance</NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/invitations" className={NavbarStyle}>
                <InsertInvitationIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                 Invitations</NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/leads" className={NavbarStyle}>
                <ConnectWithoutContactIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                Leading Clients</NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/staff" className={NavbarStyle}>
                <MonetizationOnIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                Employee Salary</NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/shifts" className={NavbarStyle}>
                <CalendarMonthIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                Shift Scheduale</NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/settings" className={NavbarStyle}>
                <SettingsIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                Settings</NavLink>
            </li>
            <hr style={{color:"gray"}}/>
            <li>
                <NavLink to="/" className={NavbarStyle}>
                <LogoutIcon style={{fontSize:"30px" , marginRight:"4px"}}/>
                Log Out</NavLink>
            </li>
        </ul>
       </div>
      
    </div>
  )
}

export default Sidebar