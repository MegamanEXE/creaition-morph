import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function MorphingProgress(props) 
{
  const [progress, setProgress] = useState(0);
  const setScreen = props.setScreen;

    //simulate loading
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 25));
      }, 300);

      return () => {
        clearInterval(timer);
      };
    }, []);

    //go to Results screen on loading
    useEffect(()=>{
      if(progress>=100){
        setScreen('result')
      }
    },[progress])

  const CircularProgressWithLabel = (props) => {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} size={200} thickness={4} sx={{color:'black'}} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{fontFamily:"Eina03", fontSize:'2.5em'}}>
            {`${Math.round(props.value)}%`}
          </Box>
        </Box>
      </Box>
    );
  }

  return(
  <>
    <Box sx={{ height:'75vh', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <Box sx={{fontFamily:'Eina03Semibold', fontSize:'2.5em', my:3}}>morphing your images</Box>
      <CircularProgressWithLabel value={progress} />
    </Box>
  </>
  );
}