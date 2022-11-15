import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange , handleCancelClick }) => {
    return(
    <tr>
        <td>
            <input
            type="text"
            required="required"
            placeholder="Enter the test case ID"
            name="id"
            value={editFormData.id}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Enter the test case name"
            name="name"
            value={editFormData.name}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Enter the pre-requisite"
            name="prerequisite"
            value={editFormData.prerequisite}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Enter the test data"
            name="testdata"
            value={editFormData.testdata}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Enter the test case description"
            name="description"
            value={editFormData.description}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Enter the test case steps"
            name="steps"
            value={editFormData.steps}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Enter the expected result"
            name="expected"
            value={editFormData.expected}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Enter the actual result"
            name="actual"
            value={editFormData.actual}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
        <input
            type="text"
            required="required"
            placeholder="Enter the test case status"
            name="status"
            value={editFormData.status}
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
           
        </td>
    </tr>
   );
};
export default EditableRow;