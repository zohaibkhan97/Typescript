import { NavLink } from "react-router-dom"


function SidebarLinker(props : any) {
  return (
 <NavLink to={`/${props.path}`}
 className={({ isActive }) => isActive ? "sidebar_links_active" : "sidebar_links rounded"}>&nbsp;{props.title}</NavLink>
  )
}

export default SidebarLinker