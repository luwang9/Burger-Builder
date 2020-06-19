import React,{useState} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css'
import ToolBar from '../../components/Navigation/ToolBar/ToolBar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


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