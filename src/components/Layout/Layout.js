import React,{useState} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


//need to capitalise Layout to use useState
const Layout = (props)=> {
    const [show, setShow] = useState(true)
    
    const sideDrawerCloseHandler = ()=>{
        setShow(false)
    };
    const sideDrawerTogglerHandler = ()=>{
        setShow(!show)
    }
    return (
        <Aux>
            <ToolBar changed = {sideDrawerTogglerHandler}/>
            <SideDrawer open= {show}  closed = {sideDrawerCloseHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main> 
             
        </Aux>
        
     )
    }

export default Layout;