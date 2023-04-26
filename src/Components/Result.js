import { Box, ImageList, ImageListItem, Paper, Stack } from '@mui/material';
import Image from 'mui-image';

//temporary for layout purposes, there are obviously better ways for this
import i1 from '../assets/images/i1.png'
import i2 from '../assets/images/i2.png'

import o1 from '../assets/images/o1.png'
import o2 from '../assets/images/o2.png'
import o3 from '../assets/images/o3.png'
import BlackButton from './BlackButton';



export default function Result(props) {
  const setScreen = props.setScreen;
  const imageData = [URL.createObjectURL(props.inputImages['i1']), URL.createObjectURL(props.inputImages['i2'])]

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
        <Paper variant='outlined' square sx={{ borderColor: 'black', width: '95%', height:'84vh', mx: 'auto', p: 1, px: 2.75 }}>
          <Box sx={{display:'flex', flexDirection:'column'}}>

            <Box id='input'>
              <Box sx={{fontSize:"1.5em"}}>your input</Box>
              <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Image src={imageData[0]} alt="input-1" width={150} duration={300} />
                <Image src={imageData[1]} alt="input-2" width={150} duration={300}/>
              </Box>
            </Box>

            <Box id='your-inspirations' sx={{marginTop:"1em"}}>
              <Box sx={{fontSize:"1.5em"}}>your generated inspirations</Box>
                {/* <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:4}}>
                  <Image src={o1} alt="output-1" width={256} duration={300}/>
                  <Image src={o2} alt="output-2" width={256} duration={300}/>
                  <Image src={o3} alt="output-3" width={256} duration={300}/>
                </Box> */}

                <ImageList cols={3} gap={8*4} sx={{marginTop:0}}>
                  <ImageListItem><Image src={o1} alt="output-1" className='inspirationImage' duration={300}/></ImageListItem>
                  <ImageListItem><Image src={o2} alt="output-2" className='inspirationImage' duration={300}/></ImageListItem>
                  <ImageListItem><Image src={o3} alt="output-3" className='inspirationImage' duration={300}/></ImageListItem>
                </ImageList>
            </Box>

            <Box id='others'>
              <Stack direction='row' spacing={2} alignItems="center">
                <Box sx={{fontSize:'1.25em'}}>not what you were looking for?</Box>
                <BlackButton text={"generate additional inspirations"} clickHandler={()=>{setScreen('resultAdditional')}} />
                <Box sx={{fontSize:'1.25em'}}> or </Box>
                <BlackButton text={"start over"} clickHandler={()=>{setScreen('upload')}} />
              </Stack>
              
            </Box>

          </Box>
        </Paper>
      </Box>
    </>
  );
}