import { Fragment } from "react";
import Header from "./Header";
import classes from './Layout.module.css'

export default function Layout(props){
    return (
        <div className={classes.container}>
            <Header></Header>
            <main>{props.children}</main>
        </div>
    )
}