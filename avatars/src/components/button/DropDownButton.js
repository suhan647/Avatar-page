import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const WhiteButton = styled(Button)({
  color: 'black',
  fontSize:'10px',
  border:'grey',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#F8F8F8',
  },
});

const DropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Featured');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  return (
    <>
      <WhiteButton endIcon={<ArrowDropDownIcon />} onClick={handleClick}>{`Sort by ${selectedOption}`}</WhiteButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('Price:Low To High')}><small>Price:Low To High</small></MenuItem>
        <MenuItem onClick={() => handleClose('Price:High To Low')}><small>Price:High To Low</small></MenuItem>
        <MenuItem onClick={() => handleClose('Customer Review')}><small>Customer Review</small></MenuItem>
        <MenuItem onClick={() => handleClose('New')}><small>New</small></MenuItem>
        <MenuItem onClick={() => handleClose('Polygon:High To Low')}><small>Polygon:High To Low</small></MenuItem>
        <MenuItem onClick={() => handleClose('Polygon:High To Low')}><small>Polygon:High To Low</small></MenuItem>
      </Menu>
    </>
  );
};

export default DropdownButton;
