import React,{useState} from "react";
function ToDoList(props) {
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>{props.name}</h6>
        </div>
    );
}

export default ToDoList;