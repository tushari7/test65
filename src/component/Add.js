
import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import { Modal, Button } from 'react-bootstrap';
// import Nav from './Nav';
import { Link } from 'react-router-dom';
// import Footer from './Footer';

export default function Add() {
    const [data, setData] = useState([
        { id: 1, values: [''] },
        { id: 2, values: [''] },
    ]);

    const [columns, setColumns] = useState(['Field']);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('tableData'));
        const savedColumns = JSON.parse(localStorage.getItem('tableColumns'));
        if (savedData) {
            setData(savedData);
        }
        if (savedColumns) {
            setColumns(savedColumns);
        }
    }, []);

    const handleEdit = (id, colIndex, value) => {
        setData(prevData =>
            prevData.map(item =>
                item.id === id ? {
                    ...item,
                    values: item.values.map((v, i) => i === colIndex ? value : v)
                } : item
            )
        );
    };

    const handleAddRow = () => {
        setData([...data, { id: data.length + 1, values: Array(columns.length).fill('') }]);
    };

    const handleAddColumn = () => {
        setColumns([...columns, `Field ${columns.length + 1}`]);
        setData(data.map(item => ({ ...item, values: [...item.values, ''] })));
    };

    const handleDeleteRow = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleDeleteColumn = (colIndex) => {
        setColumns(columns.filter((_, index) => index !== colIndex));
        setData(data.map(item => ({
            ...item,
            values: item.values.filter((_, index) => index !== colIndex)
        })));
    };

    const handleSaveData = () => {

        localStorage.setItem('tableData', JSON.stringify(data));
        localStorage.setItem('tableColumns', JSON.stringify(columns));
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
    };

    const handleSubmit = () => {
        handleSaveData();
        // alert('Data saved successfully!');
   
    };
    const del = () => {
        localStorage.clear();
        window.location.href = '/Add';
    };

 
   


    return (
        <>
        
        {/* <Nav></Nav> */}
        
         <div className='this'> 
         <Helmet>
       
                <style>{'body {background-image: linear-gradient(to right, rgba(226, 223, 208), rgba(166, 123, 91));}'}</style>
            </Helmet>
            <div className="container mt-5 ">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Edit Table Data</h2>
                       
                    <button className="btn btn-primary  btn-sm set"  onClick={handleAddColumn}>+ Add New Column</button>
                    <button className="btn btn-success  btn-sm" onClick={handleAddRow}>+ Add New Row</button>
                
                </div>
                <div className='rounded kkkk'>
                <table className="table table-bordered table-striped ">
                    <thead >
                        <tr>
                            <th className='number'>#</th>
                            {columns.map((col, index) => (
                                <th key={index}>
                                    {col} 
                                    <button className="btn btn-danger btn-sm" data-bs-toggle="tooltip" title="Delete Column!" onClick={() => handleDeleteColumn(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>











                                </th>
                            ))}
                            <th className='option'>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, rowIndex) => (
                            <tr key={item.id}>
                                <td>{rowIndex + 1}</td>
                                {item.values.map((value, colIndex) => (
                                    <td
                                        key={colIndex}
                                        contentEditable
                                        onBlur={(e) => handleEdit(item.id, colIndex, e.target.innerText)}
                                        style={{ width: "150px" }}
                                    >
                                        {value}
                                    </td>
                                ))}
                                <td>
                                    <div className='d-flex justify-content-center'>
                                        <button className="btn btn-danger" onClick={() => handleDeleteRow(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
{/* ----------------------------------------------------------------------------------------------- */}



{/* ------------------------------------------------------------------- */}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                </div>
              


                <div>
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Save Data
      </button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Data Saved Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Data has been saved successfully!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


                
                <button className="btn btn-success mt-3" ><Link to ='/Show' class="link-light">Preview</Link></button>

                <div className="text-center" style={{ marginTop: "20px" }}>
                    <div className="container mt-3">
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">
                            Delete all Data
                        </button>
                    </div>
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete all Data</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    Once you delete your data, we do not recover your data under any circumstances.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={del}>Delete</button>
                                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>


            </div>


            </div>

{/* <Footer></Footer> */}

        </>
    );
}
