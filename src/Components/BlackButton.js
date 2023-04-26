import { Button } from "@mui/material";


export default function BlackButton({text, clickHandler, isDisabled}){
  return(
    <Button 
      variant="contained" 
      disableElevation
      sx = {{backgroundColor:'black', borderRadius:'30px', textTransform: 'lowercase', fontFamily:'Eina03', fontSize:'1.25em'}}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {text}
    </Button>
  )
}

BlackButton.defaultProps = {
  isDisabled: false
}