import React, { useState,Fragment } from 'react';
import './App.css';
import data from "./mock-data.json";
import ReadOnlyRow from "./Components/ReadOnlyRow.js";
import EditableRow from "./Components/EditableRow.js";


const App = () => {
  const[testcases,setTestcases]=useState(data);
  
  const[addFormData, setAddFormData] =useState({
    id:"",
    name:"",
    prerequisite:"",
    testdata:"",
    description:"",
    steps:"",
    expected:"",
    actual:"",
    status:"",
  });

  const[editFormData, setEditFormData] =useState({
    id:"",
    name:"",
    prerequisite:"",
    testdata:"",
    description:"",
    steps:"",
    expected:"",
    actual:"",
    status:"",
  });
  
  
  
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  
  const [editTestCaseId,setEditTestCaseId] = useState(null);
  
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

 const handleAddFormSubmit = (event) => {
    event.preventDefault();
   
    const newTestcase = {
      id: addFormData.id,
      name: addFormData.name,
      prerequisite:addFormData.prerequisite,
      testdata:addFormData.testdata,
      description:addFormData.description,
      steps:addFormData.steps,
      expected:addFormData.expected,
      actual:addFormData.actual,
      status:addFormData.status,

    };

    const newTestcases = [...testcases, newTestcase];
    setTestcases(newTestcases);  
      
  };

  const handleResetClick = (event)=>{
    event.preventDefault();
    document.getElementById("addandresetform").reset();
  }
 
 
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
  

  const editedTestcase = {
    id:editFormData.id,
    name:editFormData.name,
    prerequisite:editFormData.prerequisite,
    testdata:editFormData.testdata,
    description:editFormData.description,
    steps:editFormData.steps,
    expected:editFormData.expected,
    actual:editFormData.actual,
    status:editFormData.status,
  };

  const newTestcases = [...testcases];

  const index = testcases.findIndex((testcase)=> testcase.id === editTestCaseId);

  newTestcases[index]= editedTestcase;

  setTestcases(newTestcases);
  setEditTestCaseId(null);
  
};

  const handleEditClick = (event, testcase)=>{
    event.preventDefault();
    setEditTestCaseId(testcase.id);

    const formValues = {
      id:testcase.id,
      name:testcase.name,
      prerequisite:testcase.prerequisite,
      testdata:testcase.testdata,
      description:testcase.description,
      steps:testcase.steps,
      expected:testcase.expected,
      actual:testcase.actual,
      status:testcase.status,
    };
    setEditFormData(formValues);
   
  };

   const handleCancelClick = () => {
    setEditTestCaseId(null);
  };  

   const handleDeleteClick = (testCaseId) =>{
     const newTestcases = [...testcases];
     const index = testcases.findIndex((testcase)=>testcase.id===testCaseId);
     newTestcases.splice(index,1);
     setTestcases(newTestcases);
  };

  
  return (
    <div className="app-container">
     
      <h2 className="main-header">Test Management Tool</h2>
      <form id="editform" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Test Case ID</th>
              <th>Test Case Name</th>
              <th>Pre-Requisite</th>
              <th>Test Data</th>
              <th>Test Case Description</th>
              <th>Steps</th>
              <th>Expected Result</th>
              <th>Actual Result</th>
              <th>Test Case Status</th>
              <th>Actions</th>
            </tr>
            </thead>
          <tbody>
          {testcases.map((testcase) =>(
            <Fragment>
              {editTestCaseId === testcase.id ? (
              <EditableRow editFormData={editFormData} 
              handleEditFormChange={handleEditFormChange}
              
              handleCancelClick={handleCancelClick}
              />) : (
              
            <ReadOnlyRow testcase={testcase} 
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            
            />
              )}
               
               
             
            </Fragment>
            
          ))}       
          
               
          </tbody>
          
        </table>
        </form>
        <h2>Add New Test Case</h2>
        <form id="addandresetform" onSubmit={handleAddFormSubmit}>
          <input 
          type="text"
          name="id"
          required="required"
          placeholder="Enter the test case ID"
          onChange={handleAddFormChange}
          
          ></input>
          <input 
          type="text"
          name="name"
          required="required"
          placeholder="Enter the test case name"
          onChange={handleAddFormChange}
          
          
           ></input>
           <input 
          type="text"
          name="prerequisite"
          required="required"
          placeholder="Enter the pre-requisite"
          onChange={handleAddFormChange}
          
         
           ></input>
           <input 
          type="text"
          name="testdata"
          required="required"
          placeholder="Enter the test data"
          onChange={handleAddFormChange}
          
           ></input>
           <input 
          type="text"
          name="description"
          required="required"
          placeholder="Enter the test case description"
          onChange={handleAddFormChange}
         
           ></input>
           <input 
          type="text"
          name="steps"
          required="required"
          placeholder="Enter the test case steps"
          onChange={handleAddFormChange}
          
           ></input>
           <input 
          type="text"
          name="expected"
          required="required"
          placeholder="Enter the expected result"
          onChange={handleAddFormChange}
          
           ></input>
           <input 
          type="text"
          name="actual"
          required="required"
          placeholder="Enter the actual result"
          onChange={handleAddFormChange}
          
           ></input>
           <input 
          type="text"
          name="status"
          required="required"
          placeholder="Enter the test case status"
          onChange={handleAddFormChange}
          
          ></input>
           <button type="submit">Add</button>
           <button type="button" onClick={handleResetClick}>Reset</button>
           
        </form>      
        
    </div>
  );
  
  
};


export default App;
