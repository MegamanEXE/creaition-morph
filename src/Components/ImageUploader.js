import { Box, Button, Paper } from "@mui/material";
import BlackButton from "./BlackButton";
import UploadPlatform from "./UploadPlatform";
import UploadedImage from "./UploadedImage";
import { useEffect, useState } from "react";


export default function ImageUploader(props) {
  const setScreen = props.setScreen;
  const inputImages = props.inputImages;

  const [disabledButton, setDisabledButton] = useState(true);

  const renderUploadedImages = () => {
    let uploadComponents = [];

    //ngl, not gonna use Object.keys() iteration for 2 images
    if(inputImages['i1'] !== null){
      uploadComponents.push(<UploadedImage key="i1" id="i1" imageData={inputImages['i1']} setInputImages={props.setInputImages} />)
    }
    if(inputImages['i2'] !== null){
      uploadComponents.push(<UploadedImage key="i2" id="i2" imageData={inputImages['i2']} setInputImages={props.setInputImages} />)
    }

    return uploadComponents
  }

  const handleMorphButton = () => {
    if(inputImages['i1'] && inputImages['i2'])
      setScreen("loading");
  }


  useEffect(()=>{
    if(inputImages['i1'] && inputImages['i2'])
      setDisabledButton(false) 
    else
      setDisabledButton(true)

  },[inputImages]);
  

  return(
  <>
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", }}>
      <Paper variant="outlined" square sx={{borderColor:'black', width:'50%', mx:'auto', p:1, px:2.75}}>

        <Box sx={{fontFamily:'Eina03Semibold', fontSize:'1.25em'}}>add 2 images to morph</Box>

        <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>

          <Box width={"100%"}><UploadPlatform {...props} /></Box>

          <Box width={"100%"}>
            {renderUploadedImages()}
          </Box>
        </Box>
      </Paper>

      <Box sx={{my:1}}>
        <BlackButton text={"morph"} clickHandler={handleMorphButton} isDisabled={disabledButton} />
      </Box>
    </Box>
    
  </>
  )
}