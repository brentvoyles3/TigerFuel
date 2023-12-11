import { useNavigate, useParams } from "react-router-dom";
import React, { Component }  from 'react';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        const params = useParams();

        return (
            <Component
            navigate={navigate}
            {...{...props,match:{params}} }
            />
        );
    };

    return Wrapper;
};