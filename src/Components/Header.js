import logo from '../assets/images/creaition_logo.svg'
import { Box } from '@mui/system'


export default function Header() {
    return (
    <Box sx={{p:1.25}}>
        <img className='logo' src={logo} alt="cre[ai]tion logo" />
    </Box>
    )
}