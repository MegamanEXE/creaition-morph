import { Box, Divider, ImageList, ImageListItem, Paper, Stack } from '@mui/material';
import Image from 'mui-image';

//temporary for layout purposes, there are obviously better ways for this
import i1 from '../assets/images/i1.png'
import i2 from '../assets/images/i2.png'

import o1 from '../assets/images/o1.png'
import o2 from '../assets/images/o2.png'
import o3 from '../assets/images/o3.png'

import oth1 from '../assets/images/other1.png'
import oth2 from '../assets/images/other2.png'
import oth3 from '../assets/images/other3.png'
import BlackButton from './BlackButton';



export default function resultAdditional(props) {
  const setScreen = props.setScreen;

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
        <Paper variant='outlined' square sx={{ borderColor: 'black', width: '95%', height:'84vh', mx: 'auto', p: 1, px: 2.75 }}>
          <Box sx={{display:'flex', flexDirection:'row'}}>

            <Box id='input' sx={{mx:'1em'}}>
              <Box sx={{fontSize:"1.5em"}}>your input</Box>
              <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Image src={i1} alt="input-1" className='inputImage' duration={300} />
                <Image src={i2} alt="input-2" className='inputImage' duration={300}/>
              </Box>

              <Box id='others' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <BlackButton text={"start over"} clickHandler={() => { setScreen('upload') }} />
              </Box>
            </Box>


            <Divider orientation='vertical' flexItem sx={{margin:'auto 4em', height:'80vh'}} />


            <Box sx={{display:'flex', flexDirection:'column', flexGrow:'1', justifyContent:'center', alignContent:'center'}}>
              <Box id='your-inspirations'>
                <Box sx={{ fontSize: "1.5em" }}>your generated inspirations</Box>

                <ImageList cols={3} gap={8 * 4} sx={{ marginTop: 0 }}>
                  <ImageListItem><Image src={o1} alt="output-1" className='inspirationImage' duration={300} /></ImageListItem>
                  <ImageListItem><Image src={o2} alt="output-2" className='inspirationImage' duration={300} /></ImageListItem>
                  <ImageListItem><Image src={o3} alt="output-3" className='inspirationImage' duration={300} /></ImageListItem>
                </ImageList>
              </Box>

              <Box id='additional-inspirations'>
                <Box sx={{ fontSize: "1.5em" }}>additional inspirations</Box>

                <ImageList cols={3} gap={8 * 4} sx={{ marginTop: 0 }}>
                  <ImageListItem><Image src={oth1} alt="other-1" className='inspirationImage' duration={300} /></ImageListItem>
                  <ImageListItem><Image src={oth2} alt="other-2" className='inspirationImage' duration={300} /></ImageListItem>
                  <ImageListItem><Image src={oth3} alt="other-3" className='inspirationImage' duration={300} /></ImageListItem>
                </ImageList>
              </Box>



            </Box>

            

          </Box>
        </Paper>
      </Box>
    </>
  );
}