import { Box, IconButton, LinearProgress, Paper, linearProgressClasses } from "@mui/material";
import { Image } from 'mui-image'
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import styled from "@emotion/styled";
import { useState } from "react";

export default function UploadedImage(props){
  const [isUploading, setIsUploading] = useState(false)
  const imageData = props.imageData;
  const id = props.id;
  const setInputImages = props.setInputImages;

  const CustomLinearProgress = styled(LinearProgress)(() => ({
    [`& .${linearProgressClasses.bar1Determinate}`]: {
      backgroundColor: 'black',

    [`&.${linearProgressClasses.bar1Buffer}`]: {
        backgroundColor: '#ADADAD',
      },
    }
  }));

  const deleteImage = () => {
    setInputImages(prev => ({...prev, [id]:null}));
  }


  return(
  <>
    <Paper variant="outlined" square sx={{borderColor:'black', p:'1em', my:'1em'}}>
      <Box sx={{display:'flex', flexDirection:'row'}}>

        <Box className="imagePreview" sx={{order:1, flexGrow:0.2}}>
          <Image src={URL.createObjectURL(imageData)} width={100} height={100} duration={300} errorIcon={<QuestionMarkIcon />} />
        </Box>

        <Box className="uploadedInfo" sx={{flexDirection:'column',  alignSelf:'center', flexGrow:0.9, order:2}}>
          <Box sx={{fontSize:'1.25em'}}>{imageData.name}</Box>
          <Box>{Math.round(imageData.size/1024)} KB {isUploading ? "• Uploading" : null}</Box>
          {isUploading ? 
          <Box my={1}><CustomLinearProgress variant="determinate" value={50} sx={{backgroundColor:'#ADADAD' }} /></Box>
          : null
          }
        </Box>

        <Box sx={{order:3,flexGrow:0.1, display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'flex-end'}}>
        <IconButton onClick={deleteImage}><CloseIcon /></IconButton>
      </Box>

      </Box> 
    </Paper>
  </>
  )
}