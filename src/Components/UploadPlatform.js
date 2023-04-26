import { Box, IconButton, Link } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useRef } from "react";


export default function UploadPlatform(props) {
  const inputImages = props.inputImages;
  const uploadRef = useRef(null);

  
  const handleImageUpload = (e) => {
    const files = e.target.files;
    updateInputData(files);
  }

  const handleOnDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    updateInputData(droppedFiles)
  }

  const updateInputData = (files) => {
    if(inputImages['i1'] && inputImages['i2']){
      alert("Only 2 Images can be uploaded. Please remove an existing image before attempting again.")
      return;
    }

    console.log(files)
    //use URL.createObjectURL(files[0]) when image is needed
    if(inputImages['i1']==null){
      props.setInputImages(prev => ({...prev,'i1': files[0] }));
    }

    //Upload into any of the existing slots
    if(inputImages['i1'] && inputImages['i2']==null){
      props.setInputImages(prev => ({...prev, 'i2': files[0] }));
    } else if(inputImages['i2'] && inputImages['i1']==null){
      props.setInputImages(prev => ({...prev, 'i1': files[0] }));
    }

    //if both images were uploaded at once
    if(files[1]){
      props.setInputImages(prev => ({ ...prev, 'i2': files[1] }));
    }
  }

  return (
    <div onDrop={handleOnDrop} onDragOver={(e)=>{e.preventDefault();}}>
      <Box 
        sx={{ border: '2px dashed #333333', px: '1.2em', py: '2em',
              display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:1.5,
              '&:hover':{backgroundColor:'#f5f5f5'} }}
        onClick={()=>{uploadRef.current.click()}}     
      >

        <Box>
          <IconButton color="primary" aria-label="upload picture" component="label" sx={{ color: 'black' }}>
            <input ref={uploadRef} hidden accept="image/*" type="file" onChange={handleImageUpload} multiple/>
            <UploadFileIcon />
          </IconButton>
        </Box>

        <Box sx={{fontSize:"1.25em"}}>
          <Link onClick={()=>{uploadRef.current.click()}} sx={{color:'black'}}><span style={{fontFamily:'Eina03Semibold'}}>click to upload</span></Link>, or drag and drop
        </Box>

        <Box>PNG, JPG or GIF (max. 3MB)</Box>
      </Box>
    </div>
  )
}