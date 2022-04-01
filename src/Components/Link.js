import React from "react";
import styles from './Link.module.css';

export const Link = ({ active, children, onClick }) => {
    /*if (active) {
        return <span>{children}</span>
    }*/

    //console.log(active, children, onClick())

    return (
        <span>
            <button type="button" className={styles.taskStatusButton} onClick={(e) => {
                e.preventDefault();
                onClick()
            }}>
                {children}
            </button>
        </span>
    )
}