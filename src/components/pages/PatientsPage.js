<<<<<<< HEAD

import { DataGrid } from '@mui/x-data-grid';
//import {patients} from '../../constants/constants'
import {Box} from '@mui/material';
import avatar from "../../assets/avatar.jpg"
import { Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {Blur} from '../Blur';
import { Fragment } from "react";
import {useState,useEffect } from "react";
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import { usePatientsContext } from "../../hooks/usePatientsContext"
import { useAuthContext } from '../../hooks/useAuthContext'
export function PatientsPage() {


  const { user } = useAuthContext()
  const {patients, dispatch} = usePatientsContext()
  const [selectionModel, setSelectionModel] = useState([]);
  useEffect(() => {
    const fetchData= async () => {
      const response = await fetch('http://localhost:5000/api/patients',{
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_PATIENTS', payload: json})
        
      }
     
    }
    if(user){
    fetchData()}
  },[user,dispatch])
  const handleClick = async () => (
    console.log(selectionModel)
    (selectionModel && selectionModel.map(async patient=>{
    const response = await fetch( 'http://localhost:5000/api/patients/'+ patient, {
      method: 'DELETE',
        headers: {'Authorization': `Bearer ${user.token}`},
      
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_PATIENT', payload: patient})
    }
  })),[user,dispatch])
const columns = [
  { field: '_id', 
  headerName: 'No. ID',
  width: 160,
  align: 'center',
  headerAlign: 'center' },

  { field: 'firstName'+'familyName',
  headerName: 'Patient Name',
  width: 300,
  align: 'center',
  headerAlign: 'center', 
  renderCell: (params)=>{
    return (
      <div className='flex items-center'>
        <img className='object-cover w-8 h-8 rounded-full mr-3' src={avatar} alt="" />
        {params.row.firstName+' '+params.row.familyName}
      </div>
    )
  } },

  { field: 'age', 
  headerName: 'Age', 
  width: 130,
  type: 'number',
  align: 'center',
  headerAlign: 'center' ,
  renderCell: (params)=>{
   
    const today = new Date();
    const birthDate = new Date(params.row.birthDate);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    console.log(age_now);
    return age_now;
  
},
  },
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
        <NavBar/>
        <SideBar page="patients"/>
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
            <Link className='bg-primary hover:bg-blue-700 transition-all  text-white p-3 rounded-lg' onClick={() =>
            setShowBlur(true)}>
              <GroupAddIcon />
            </Link>
            <Link className='bg-rose-500 hover:bg-rose-600 transition-all  text-white p-3 rounded-lg' onClick={handleClick}>
              <PersonRemoveIcon />
            </Link>
          </div>
          
        </div>
        
        <DataGrid
          getRowId={(row) => row._id}
          rows={patients}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(ids) => {
            setSelectionModel(ids);
          }}
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
=======

import { DataGrid } from '@mui/x-data-grid';
//import {patients} from '../../constants/constants'
import {Box} from '@mui/material';

import { Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {Blur} from '../Blur';
import { Fragment } from "react";
import {useState,useEffect } from "react";
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import { usePatientsContext } from "../../hooks/usePatientsContext"
import { useAuthContext } from '../../hooks/useAuthContext'
export function PatientsPage() {


  const { user } = useAuthContext()
  const {patients, dispatch} = usePatientsContext()
  const [selectionModel, setSelectionModel] = useState([]);
  useEffect(() => {
    const fetchData= async () => {
      const response = await fetch('http://localhost:5000/api/patients',{
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_PATIENTS', payload: json})
        
      }
     
    }
    if(user){
    fetchData()}
  },[user,dispatch])
  const handleClick = async () => (
    console.log(selectionModel)
    (selectionModel && selectionModel.map(async patient=>{
    const response = await fetch( 'http://localhost:5000/api/patients/'+ patient, {
      method: 'DELETE',
        headers: {'Authorization': `Bearer ${user.token}`},
      
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_PATIENT', payload: patient})
    }
  })),[user,dispatch])
const columns = [
  { field: '_id', 
  headerName: 'No. ID',
  width: 160,
  align: 'center',
  headerAlign: 'center' },

  { field: 'firstName'+'familyName',
  headerName: 'Patient Name',
  width: 300,
  align: 'center',
  headerAlign: 'center', 
  renderCell: (params)=>{
    return (
      <div className='flex items-center'>
        <img className='object-cover w-8 h-8 rounded-full mr-3' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        {params.row.firstName+' '+params.row.familyName}
      </div>
    )
  } },

  { field: 'age', 
  headerName: 'Age', 
  width: 130,
  type: 'number',
  align: 'center',
  headerAlign: 'center' ,
  renderCell: (params)=>{
   
    const today = new Date();
    const birthDate = new Date(params.row.birthDate);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    console.log(age_now);
    return age_now;
  
},
  },
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
        <NavBar/>
        <SideBar page="patients"/>
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
            <Link className='bg-red-500 text-white p-3 rounded-lg' onClick={handleClick}>
              <PersonRemoveIcon />
            </Link>
          </div>
          
        </div>
        
        <DataGrid
          getRowId={(row) => row._id}
          rows={patients}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(ids) => {
            setSelectionModel(ids);
          }}
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
>>>>>>> e1ff1a1962c9e8d3570d260a5d0537a9a88df71d
}