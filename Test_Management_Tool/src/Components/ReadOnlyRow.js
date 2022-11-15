import React from "react";

const ReadOnlyRow = ({ testcase, handleEditClick , handleDeleteClick}) => {
    return(
    <tr>
            <td>{testcase.id}</td>
            <td>{testcase.name}</td>
            <td>{testcase.prerequisite}</td>
            <td>{testcase.testdata}</td>
            <td>{testcase.description}</td>
            <td>{testcase.steps}</td>
            <td>{testcase.expected}</td>
            <td>{testcase.actual}</td>
            <td>{testcase.status}</td>
            <td>
                <button type="button" onClick={(event)=> handleEditClick(event, testcase)}>Edit</button>
                <button type="button" onClick={()=>handleDeleteClick(testcase.id)}>Delete</button>
                
            </td>
            </tr>
   );
};
export default ReadOnlyRow;