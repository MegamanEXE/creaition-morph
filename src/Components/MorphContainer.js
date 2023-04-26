import { Box } from "@mui/system"
import Header from "./Header"
import { useState } from "react"
import ImageUploader from "./ImageUploader"
import MorphingProgress from "./MorphingProgress"
import Result from "./Result"
import ResultAdditional from "./ResultAdditional"

export default function MorphContainer() {
  const [screen, setScreen] = useState('upload') //possible values: upload, loading, result, resultAdditional

  //Doesn't seem worthwhile to make them non-static. Can of course be easily extended if needed
  const [inputImages, setInputImages] = useState({'i1':null, 'i2':null})
  const [outputImages, setOutputImages] = useState({'o1':null, 'o2':null, 'o3':null})
  const [additionalImages, setAdditionalImages] = useState({'oth1':null, 'oth2':null, 'oth3':null})

  //Welcome to React, this is actually a shorthand way of doing things
  const passProps = {
    setScreen:setScreen,
    inputImages:inputImages, setInputImages:setInputImages,
    outputImages:outputImages, setOutputImages:setOutputImages,
    additionalImages:additionalImages, setAdditionalImages:setAdditionalImages
  }

  const renderScreen = () => {
    switch(screen){
      case 'upload': return <ImageUploader {...passProps} />;
      case 'loading': return <MorphingProgress {...passProps} />;
      case 'result': return <Result {...passProps} />;
      case 'resultAdditional': return <ResultAdditional {...passProps} />;
    }
  }

  return (
  <>
    <Box className="morphContainer">
        <Box className="header"><Header /></Box>
        
        <Box className="container-content">
          {renderScreen()}
        </Box>
    </Box> 
  </>
  )
}