import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import {Helmet} from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import Nav from './Nav';

export default function Show()
{
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [emails, setEmails] = useState({});
    const [attendees, setAttendees] = useState([]);

    const navigate = useNavigate();

    // useEffect(() => {
    //     const savedData = JSON.parse(localStorage.getItem('tableData'));
    //     const savedColumns = JSON.parse(localStorage.getItem('tableColumns'));
    //     if (savedData) {
    //         setData(savedData);
    //     }
    //     if (savedColumns) {
    //         setColumns(savedColumns);
    //     }
    // }, []);

 
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('tableData'));
        console.log(savedData)
        const savedColumns = JSON.parse(localStorage.getItem('tableColumns'));
        console.log(savedColumns)
        if (savedData) {
            setData(savedData);
        } else {
            // alert("404: No data found .....");
            navigate('/Error');
        }
        if (savedColumns) {
            setColumns(savedColumns);
        }
    }, []);


    const handleEmailChange = (id, value) => {
        setEmails(prevEmails => ({
            ...prevEmails,
            [id]: value
        }));
    };

    const handleDownload = async (format) => {
        const tableElement = document.getElementById('table-data');
        if (!tableElement) {
            console.error('Table element not found');
            return;
        }

        try {
            const canvas = await html2canvas(tableElement, { scale: 2 });
            if (format === 'jpg' || format === 'png') {
                const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png';
                const dataUrl = canvas.toDataURL(mimeType);
                const link = document.createElement('a');
                link.href = dataUrl;
                link.target = '_blank'
                link.click();
                link.download = `table-data.${format}`;
                link.click();
            } else if (format === 'txt') {
                let textData = '';
                columns.forEach(col => {
                    textData += `${col}\t`;
                });
                textData += 'Email\n';
                data.forEach(item => {
                    item.values.forEach(value => {
                        textData += `${value}\t`;
                    });
                    textData += `${emails[item.id] || ''}\n`;
                });
                const blob = new Blob([textData], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'table-data.txt';
                link.click();
                URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error('Error capturing the table:', error);
        }
    };



    const handleAttendeeChange = (id, value) => {
        setAttendees(prevAttendees => ({
            ...prevAttendees,
            [id]: value
        }));
    };

    const handleSubmit = () => {
        const newData = data.map((item) => {
            return {
                ...item,
                data: emails[item.id],
                attendee: attendees[item.id]
            }
        });
        localStorage.setItem('tableData', JSON.stringify(newData));
        console.log(newData);
        navigate('/Showdata');
    };



    return (
        
        <>
        <Nav></Nav>

        <Helmet>
                <style>{'body {background-image: linear-gradient(to right, rgba(253, 240, 209), rgba(100, 56, 67));}'}</style>
            </Helmet>

        {/* <h1 id='mas'></h1> */}
        <div className="container mt-5 rounded circ">
            <h2>Review and Add Data</h2>
            <table id="table-data" className="table table-striped">
                <thead>
                    <tr className='tabl'>
                        {columns.map((col, index) => (
                            <th key={index}style={{ border: '1px solid #ddd' }}>{col}</th>
                        ))}
                        <th style={{ border: '1px solid #ddd' }} >Present</th>
                        <th style={{ border: '1px solid #ddd' }} >Select Attendees</th>
                        {/* <th>Email</th> */}
                    </tr>
                </thead>
                <tbody className='tab'>
                    {data.map(item => (
                        <tr key={item.id}>
                            {item.values.map((value, index) => (
                                <td key={index} style={{ border: '1px solid #ddd' }} >{value}</td>
                            ))}
                             <td className='tab'style={{ border: '1px solid #ddd' }} > 
                                 <input
                                    type="email"
                                    className="form-control"
                                    value={emails[item.id] || ''}
                                    onChange={(e) => handleEmailChange(item.id, e.target.value)}
                                    required
                                /> 
                             </td> 

                             <td style={{  width: '0' }} > 
                             <select value={attendees[item.id] || ''} onChange={(e) => handleAttendeeChange(item.id, e.target.value)}>
    {Array.from(Array(100), (_, i) => i + 1).map((num, index) => (
        <option key={index} value={num}>{num}</option>
    ))}
</select>
      </td> 

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-3">
                <div className="btn-group">
                    <button className="btn btn-success  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Download
                    </button>
                    <ul className="dropdown-menu">
                        <button className="btn btn-primary mt-3 " onClick={() => handleDownload('jpg')} >
                            Download as JPG
                        </button>

                        <button className="btn btn-primary mt-3" onClick={() => handleDownload('png')}>
                            Download as Png

                        </button>
                        <button className="btn btn-primary mt-3" onClick={() => handleDownload('txt')}>
                            Download as TXT

                        </button>

                    </ul>
                </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>


        </div>
        </>
    );
}