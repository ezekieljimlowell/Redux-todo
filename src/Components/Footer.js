import React from "react";
import FilterLink from "../Containers/FilterLink";

export const Footer = () => {
    return (
        <>
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        </>
    )
}