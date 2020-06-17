import React from 'react'
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawToggle/DrawToggle'
const toolBar = (props)=>{
    return (
        <header className = {classes.ToolBar}>
            <DrawerToggle clicked = {props.changed} />
            <div className = {classes.Logo}>
                <Logo/>
            </div>            
            <nav className = {classes.DesktopOnly}>
                <NavigationItems/> 
            </nav>

        </header>
    )
}
export default toolBar