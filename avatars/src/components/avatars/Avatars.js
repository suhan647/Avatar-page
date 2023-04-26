import { useState } from 'react';
import { Avatar, Box, Grid, Button, IconButton } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import Data from '../data/Data.json'
import '../../App.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Avatars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const totalPages = Math.ceil(Data.Avatars.length / cardsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = Data.Avatars.slice(startIndex, endIndex);

  return (
    <>
       <Box>
        <Grid container sx={{ width: '100%', justifyContent: 'space-between' }}>
          {visibleCards.map((a) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={a.id}>
                <Box sx={{ mt: '20px', ml: '5px', display: 'flex', flexDirection: "column", width: '250px', }}>
                  <img className='images' src={a.image} width='250px' height='250px' alt="avatars" />
                  <b>{a.name}</b>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon fontSize="10px" sx={{ color: '#F6BE00' }} />
                    <StarIcon fontSize="10px" sx={{ color: '#F6BE00' }} />
                    <StarIcon fontSize="10px" sx={{ color: '#F6BE00' }} />
                    <StarIcon fontSize="10px" sx={{ color: '#F6BE00' }} />
                    <StarIcon fontSize="10px" sx={{ color: '#F6BE00' }} />
                    <small style={{ fontSize: '13px', color: 'gray' }}>{a.starsandLikes}</small>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={a.image}
                      sx={{ width: 24, height: 24 }} />
                    <small style={{ color: 'grey', marginLeft: '3px' }}>{a.smallName}</small>
                  </Box>

                  <Box>
                    <span><b style={{ fontSize: '10px', fontWeight: '50px', padding: '5px' }}>$</b><b style={{ fontSize: '20px', fontWeight: '20px' }}>{a.price}</b></span>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <div className="round"></div>
                    <div style={{ fontSize: '10px', paddingLeft: '3px' }}>{a.system}</div>
                  </Box>

                  <Box sx={{ mt: '0' }}>
                    <b style={{ fontSize: '10px' }}>{a.description}</b>
                  </Box>

                </Box>
              </Grid>
            );
          })}
        </Grid>

        {totalPages > 1 && (
  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, alignItems: 'center', marginBottom:'10px' }}>
    <IconButton aria-label="previous page" onClick={handlePrevPage } disabled={currentPage === 1}>
      <ArrowBackIosIcon />
    </IconButton>
    {[...Array(totalPages)].map((_, i) => (
      <Button key={i} onClick={() => setCurrentPage(i + 1)} disabled={currentPage === i + 1}>
        {i + 1}
      </Button>
    ))}
    <IconButton aria-label="next page" onClick={handleNextPage} disabled={currentPage === totalPages}>
      <ArrowForwardIosIcon />
    </IconButton>
  </Box>
)}
      </Box>
    </>
  );
};

export default Avatars;
 