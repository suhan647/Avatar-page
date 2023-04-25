import { Avatar, Box, Grid } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import Data from '../data/Data.json'
import '../../App.css'

const Avatars = () => {
    return (
        <>    
            
        {Data.Avatars.map((a) => {
            return(
                <Grid container sx={{width:'100%',}}>
                    <Grid item xs={8} md={8} sm={8}>

        <Box>
            <Box sx={{mt:'20px',ml:'5px', display:'flex', flexDirection:"column", width:'250px',}}>
            <img className='images' src={a.image} width='250px' height='250px' alt="avatars"
             />
             <b>{a.name}</b>

             <Box sx={{display:'flex', alignItems:'center'}}>
                <StarIcon fontSize="10px" sx={{color:'#F6BE00'}} />
                <StarIcon fontSize="10px" sx={{color:'#F6BE00'}} />
                <StarIcon fontSize="10px" sx={{color:'#F6BE00'}} />
                <StarIcon fontSize="10px" sx={{color:'#F6BE00'}} />
                <StarIcon fontSize="10px" sx={{color:'#F6BE00'}} />
                <small style={{fontSize:'13px', color:'gray'}}>{a.starsandLikes}</small>
             </Box>

             <Box sx={{display:'flex', alignItems:'center'}}>
             <Avatar
              alt="Remy Sharp"
              src={a.image}
              sx={{ width: 24, height: 24 }} />
             <small style={{color:'grey', marginLeft:'3px'}}>{a.smallName}</small>
             </Box>

             <Box>
                <span><b style={{fontSize:'10px', fontWeight:'50px', padding:'5px'}}>$</b><b style={{fontSize:'20px', fontWeight:'20px'}}>{a.price}</b></span>
             </Box>

             <Box sx={{display:'flex', alignItems:'center'}}>
                <div className="round"></div>
                <div style={{fontSize:'10px', paddingLeft:'3px'}}>{a.system}</div>
             </Box>

             <Box sx={{mt:'0'}}>
                <b style={{fontSize:'10px'}}>{a.description}</b>
             </Box>

        </Box>
        </Box>
        </Grid>
        </Grid>
            )
        })}
        
        </>
    )
}

export default Avatars