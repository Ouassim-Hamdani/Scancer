
import { DataGrid } from '@mui/x-data-grid';
import {rowsPatients} from '../../constants/constants'
import {Box} from '@mui/material';

import { Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {Blur} from '../Blur';
import { Fragment } from "react";
import {useState } from "react";
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
export function AdminPatients() {

const columns = [
  { field: 'id', 
  headerName: 'No. ID',
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

  { field: 'age', 
  headerName: 'Age', 
  width: 130,
  type: 'number',
  align: 'center',
  headerAlign: 'center' },

  { field: 'gender', 
  headerName: 'Gender', 
  width: 160,
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



];
const [showBlur, setShowBlur] = useState(false);
  return (
    <Fragment className="h-screen w-full">
        <NavBar role="admin"/>
        <SideBar page="patients-admin" role="admin"/>
      <div className='flex justify-center items-center h-2/3 w-11/12'>
        <Box className='h-[70vh] w-full'
        sx={{
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
        <div className='w-full p-4 flex items-center justify-between'>
          <p className='text-3xl font-semibold'>Patients</p>
          <div className='space-x-6 '>
            <Link className='bg-blue-800 text-white p-3 rounded-lg' onClick={() =>
            setShowBlur(true)}>
              <GroupAddIcon />
            </Link>
            <Link className='bg-red-500 text-white p-3 rounded-lg'>
              <PersonRemoveIcon />
            </Link>
          </div>
          
        </div>
        
        <DataGrid
          rows={rowsPatients}
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
      <Blur isVisible={showBlur} onClose={() => setShowBlur(false)}>

      </Blur>
    </Fragment>
  );
}