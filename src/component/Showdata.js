import React from 'react';
import { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import Nav from './Nav';
// import {useNavigate } from 'react-router-dom';

const Showdata = () => {
  const [tableData, setTableData] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('tableData');
    console.log(storedData)
    if (storedData) {
      setTableData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <Nav></Nav>

      <Helmet>
                <style>{'body {background-image: linear-gradient(to bottom right, white, black);}'}</style>
            </Helmet>


    <div className="container mt-5 showd">
      <h1 className="d-flex justify-content-center">Presented Data</h1>
      {tableData.map((item, index) => (
        <div key={index}>
          <p>ID: {item.id}</p>
          <p>Data: {item.data}</p>
          <p>Attendee: {item.attendee}</p>
          <hr />
        </div>
      ))}
    </div>


    </>
  );
};

export default Showdata;

