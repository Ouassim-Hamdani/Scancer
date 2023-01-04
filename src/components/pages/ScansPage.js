import { DataGrid } from '@mui/x-data-grid';
import {rowsReportScan} from '../../constants/constants'
import {Box} from '@mui/material';
import {Blur} from '../Blur';
import { Fragment } from "react";
import {useState ,useEffect} from "react";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Button from '@mui/material/Button';
import moment from 'moment';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import { useScansContext } from "../../hooks/useScansContext"
import { useAuthContext } from '../../hooks/useAuthContext'
export const ScansPage = () => {
  const { user } = useAuthContext()
  const [selectionModel, setSelectionModel] = useState([]);
  const {scans, dispatch} = useScansContext()
  useEffect(() => {
    const fetchData= async () => {
      const response = await fetch('http://localhost:5000/api/scans',{
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_SCANS', payload: json})
      }
    }
    if (user){
    fetchData()}
  },[user,dispatch])


const columns = [
  { field: '_id', 
  headerName: 'No. Scan', 
  width: 160,
  align: 'center',
  headerAlign: 'center' },

  { field: 'patient',
  headerName: 'Patient Name',
  width: 300,
  align: 'center',
  headerAlign: 'center', 
  renderCell: (params)=>{
    return (
      <div className='flex items-left'>
        <img className='object-cover w-8 h-8 rounded-full mr-3' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
   
        {params.row.patient&& params.row.patient.firstName+' '+params.row.patient.familyName}
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
  renderCell: params=>moment(params.row.createdAt).format('DD-MM-YYYY'),
  align: 'center',
  headerAlign: 'center' },

  { field: 'result', 
  headerName: 'Result',
  width: 200,
  align: 'center',
  headerAlign: 'center',
  renderCell: (params)=>{
      if (params.row.status=== 'positive'){
        return (
          <div className=''>
          <p className='text-[#ed0b0b] border w-28 px-8 py-1 rounded-xl bg-[#f59c9c]'>Positive</p>
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
const [showBlur, setShowBlur] = useState(false);
  return (
    <Fragment>
      <NavBar/>
      <SideBar page="scans"/>
      <div className='flex  items-center w-11/12'>
        <Box className="h-[75vh] w-full"
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
          <p className='text-3xl font-semibold text-gray-800'>Scans</p>
          <div className='space-x-6 '>
          <Button href="/scan" style={{backgroundColor: '#4264D0', borderRadius:'10px'}} variant="contained" startIcon={<DocumentScannerIcon />}>
                    Scan
                  </Button>
          </div>
          
        </div>
        
        <DataGrid className='pl-4'
          getRowId={(row) => row._id}
          rows={scans}
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