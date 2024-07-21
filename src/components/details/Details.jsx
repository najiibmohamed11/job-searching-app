import React, { useState } from 'react'
import { IoArrowBackCircleSharp, IoShieldCheckmarkOutline } from "react-icons/io5";

import BelowTheHeaderCard from './BelowTheHeaderCard';
import { useNavigate, useParams } from 'react-router-dom';
import { IoCloudUploadOutline, } from "react-icons/io5";

import { FaFileInvoice } from "react-icons/fa";


import { useQuery } from '@apollo/client';
import { GET_DETAILED_INFO } from '../../GraphQl/JobQuary';
import { Content, DetailsAndApplyBtns, DetailsHeader, DetailsHeaderLogoPart, DetailsHeaderLogoPartTextPart, HoleyDetailsAndApplyBtns, HolleyBelowTheHeaderCard, HolleyDetails, SubTitile, Titile, UploadArea } from './style';
// import {HolleyDetails,DetailsHeader,DetailsHeaderLogoPart,DetailsHeaderLogoPartTextPart,HolleyBelowTheHeaderCard,DetailsAndApplyBtns,HoleyDetailsAndApplyBtns,Titile,SubTitile} from './style'
import { useDropzone } from 'react-dropzone';
import { IoMdCloseCircle } from 'react-icons/io';
import Loading from '../Loading/Loading';



function Details() {
  const { id } = useParams();  // This extracts the "id" parameter from the URL
  const postId = parseInt(id, 10); // Parse the id to an integer
  const [ClickedOne,setClickedOne]=useState('JobDescription')
  const [lastFile, setLastFile] = useState(null);
  const navigate = useNavigate()


 const {data ,loading,error}= useQuery(GET_DETAILED_INFO,{
  variables:{id:postId}
 })
;

    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        console.log(acceptedFiles);
        setLastFile(acceptedFiles[0]); // Assuming single file upload and taking the first file
      }
    });

  
    if (loading) return  <Loading/> ; 
    if (error) return <div>Error: {error.message}</div>;
    const { imgeurl, date, salary, title, company, requirments ,location,Description,detailedRequirements} =data.job_info[0]   ;
    return (
    <HolleyDetails>
        <IoArrowBackCircleSharp onClick={() => navigate(-1)}  style={{fontSize:"30px", color:"black" , cursor:"pointer"}} />

      <DetailsHeader>
        <DetailsHeaderLogoPart>
          <div>
          <img src={imgeurl} width={80} alt="" />
          </div>
       
        <DetailsHeaderLogoPartTextPart>
        <p style={{fontSize:'15px',fontWeight:'600',margin:'0'}}>{title}</p>
        <span  style={{fontSize:'12px',fontWeight:'400',margin:'0',}}>{location}</span>
        <p  style={{fontSize:'12px',fontWeight:'300',margin:'0', color:"blue"}}>{company}</p>
        <p style={{fontSize:'12px',fontWeight:'300',margin:'3px', color:"black"}}>{date}</p>
        </DetailsHeaderLogoPartTextPart>

        </DetailsHeaderLogoPart >
        <IoShieldCheckmarkOutline style={{fontSize:"30px", color:"green", marginRight:"20px"}} />


      </DetailsHeader>
      <HolleyBelowTheHeaderCard>
      <BelowTheHeaderCard Titile={"salary"} Numbers={`$${salary}/hr`} Color={"#B9ECCA"}/>
      <BelowTheHeaderCard Titile={"Number of aplications"} Numbers={"4k"} Color={"#B9E1F2"} />
      <BelowTheHeaderCard Titile={"Job Type"} Numbers={requirments[0]} Color={"#FED3AA"}/>
      <BelowTheHeaderCard Titile={"Level"} Numbers={requirments[3]} Color={"#CDD0FD"}/>
      </HolleyBelowTheHeaderCard>
      <HoleyDetailsAndApplyBtns>
      <DetailsAndApplyBtns IsClickedUs={ClickedOne=="JobDescription"} onClick={()=>setClickedOne("JobDescription")}>Job Description</DetailsAndApplyBtns>
      <DetailsAndApplyBtns IsClickedUs={ClickedOne=="ApplyNow"} onClick={()=>setClickedOne("ApplyNow")}> ApplyNow</DetailsAndApplyBtns>
      
      </HoleyDetailsAndApplyBtns>
      
      <Content>
        {
          ClickedOne=="JobDescription"?(
            <>
               <Titile>Job Description</Titile>
      <SubTitile >{Description}</SubTitile>
 
      <Titile>Requirements</Titile>
      <SubTitile>
      {
        detailedRequirements.map(requirment=>{
          return(
            <ul>
            <li>
            {
              requirment
            }
            
            </li>
            
            </ul>
          )
        })
      }
      </SubTitile>
 
            </>
          

          ):(
            <UploadArea {...getRootProps()}>
            <input {...getInputProps()} />
            {
              lastFile ? (
                <div>
                  <p><FaFileInvoice style={{fontSize:"20px"}} />
                   {lastFile.name}</p> {/* Display file name */}
                  <p>Size: {lastFile.size} bytes</p> {/* Optional: display file size */}
                </div>
              ) : (
                <div>
                  <IoCloudUploadOutline style={{fontSize:"100px",textAlign : "center", height:"100%"}} />
                  <h4>Upload Your Resume</h4>
                </div>

              )
            }
          </UploadArea>
          
          )
        }
   

      </Content>
      <div>
      <DetailsAndApplyBtns style={{margin: "0px ", marginTop:"20px", backgroundColor:"black",color:"white"}}>Apply Now</DetailsAndApplyBtns>

      </div>


    </HolleyDetails>
  )
}

export default Details