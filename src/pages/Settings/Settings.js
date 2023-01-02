import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {rowsReportScan} from '../../constants/constants'
import {Box, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Fragment } from "react";
import {useState } from "react";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Button from '@mui/material/Button';
import moment from 'moment';

export default function DoctorPatients() {

const columns = [
  { field: 'id', 
  headerName: 'No. Scan', 
  width: 160,
  align: 'center',
  headerAlign: 'center' },

  { field: 'patientname',
  headerName: 'Patient Name',
  width: 300,
  align: 'center',
  headerAlign: 'center', 
  renderCell: (params)=>{
    return (
      <div className='flex items-center'>
        <img className='object-cover w-8 h-8 rounded-full mr-3' src={params.row.avatar} alt="" />
        {params.row.patientname}
      </div>
    )
  } },

  { field: 'type', 
  headerName: 'Type', 
  width: 130,
  align: 'center',
  headerAlign: 'center' },

  { field: 'date', 
  headerName: 'Date', 
  width: 160,
  renderCell: params=>moment(params.row.date).format('DD-MM-YYYY'),
  align: 'center',
  headerAlign: 'center' },

  { field: 'status', 
  headerName: 'Status',
  width: 200,
  align: 'center',
  headerAlign: 'center',
  renderCell: (params)=>{
      if (params.row.status === 'Hospital'){
        return (
          <div className=''>
          <p className='text-[#ed0b0b] border w-28 px-8 py-1 rounded-xl bg-[#f59c9c]'>Hospital</p>
          </div>
        )
      }
      else if (params.row.status === 'Consultation'){
        return (
          <div className=''>
            <p className='text-[#101b7b] border w-28 py-1 px-3 rounded-xl bg-[#647cca]'>Consultation</p>
          </div>
        )
      }
      else if (params.row.status === 'Healthy'){
        return (
          <div className=''>
            <p className='text-[#0d894d] border w-28 py-1 px-8 rounded-xl bg-[#66f08d]' >Healthy</p>
          </div>
        )
      }
  }
},

  { field: 'reports', 
  headerName: '', 
  width: 166,
  cellClassName: 'massi',
  align: 'center',
  sortable: false,
  filterable: false,
  headerAlign: 'center'
},

];
  return (
    <Fragment>
      <div className='flex justify-center items-center'>
        <Box
        sx={{
          height: 550,
          width: 1250,
          ml: 14,
          '& .aa': {
            backgroundColor: '#edebeb', 
          },
          '& .massi': {
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,

          },
        }}
      >
        <div className='w-full mb-5 mt-12 flex items-center justify-between'>
          <p className='text-3xl font-semibold'>Settings</p>
          <div className='space-x-6 '>
            <Button style={{backgroundColor: '#4264D0', borderRadius:'10px'}} variant="contained" startIcon={<DocumentScannerIcon />}>
                    Scan
            </Button>
          </div>
          
        </div>
        
        <DataGrid
          rows={rowsReportScan}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getCellClassName={(params)=> {
            return 'aa';
          }}
          getRowSpacing={params =>({
            top:params.isFirstVisible ? 0 : 6,
            bottom:params.isFirstVisible ? 0 : 6
          })}
        />
      </Box> 
      </div>
    </Fragment>
  );
}