import React from 'react'
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolBar = (props)=>{
    return (
        <header className = {classes.ToolBar}>
            <div>Menu </div>
            <div className = {classes.Logo}>
                <Logo/>
            </div>            <nav>
                <NavigationItems/> 
            </nav>

        </header>
    )
}
export default toolBar