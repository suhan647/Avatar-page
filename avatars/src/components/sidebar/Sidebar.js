import React, { useState } from 'react';
import {List, ListItem, Checkbox, ListItemText,Divider,  } from '@mui/material'
import '../../App.css'

const options = [  { label: 'VRChat (Quest)', value: 'vrchat_quest' },  { label: 'VRChat (PCVR)', value: 'vrchat_pcvr' },  { label: 'Others', value: 'others' },];

const category = [{label:'Full Avatars'}, {label:'Others'}]

const priceOptions = [  { label: 'Under $10', value: 'under_10' },  { label: '$10 to $20', value: '10_to_20' },  { label: '$20 to $30', value: '20_to_30' },  { label: '$30 to $40', value: '30_to_40' },  { label: '$40 to $50', value: '40_to_50' },  { label: '$50 to $70', value: '50_to_70' },  { label: '$70 & above', value: '70_above' },];

const polygonOptions = [  { label: 'Under $7,500', value: 'under_7500' },  { label: '△7,500 to △10,000', value: '7500_to_10000' },  { label: '△10,000 to △15,000', value: '10000_to_15000' },  { label: '△15,000 to △20,000', value: '15000_to_20000' },  { label: '△20,000 to △32,000', value: '20000_to_32000' },  { label: '△32,000 to △70,000', value: '32000_to_70000' },  { label: '△70,000 & Above', value: '70000_above' },];

const autoUploadOptions = [  { label: 'Supported', value: 'supported' },  { label: 'Unsupported', value: 'unsupported' },];

export default function Sidebar() {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div style={{ display: 'flex', height: '80vh',marginLeft:'10px' }}>
      <div style={{ width: 200, height: '100%', backgroundColor: "#FAFAFA" }}>
      <List sx={{margin:0}}>
          <b style={{fontSize:'16px'}}> Category</b>
          {category.map(({ label, value }) => {
            const isChecked = checked.indexOf(value) !== -1;

            return (
              <ListItem
              key={value}
              dense
              button
              onClick={handleToggle(value)}
              style={{ padding: 0, marginLeft: "20px", fontSize: "" }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox edge="start" checked={isChecked} tabIndex={-1} disableRipple />
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  variant: "subtitle2",
                  style: { fontWeight: "bold", fontSize: "10px", paddingTop: 0, paddingBottom: 0 },
                }}
              />
            </ListItem>
            
            );
          })}
        </List>
        <Divider/>


      <List sx={{margin:0}}>
          <b style={{fontSize:'16px'}}>Polygon Amount</b>
          {polygonOptions.map(({ label, value }) => {
            const isChecked = checked.indexOf(value) !== -1;

            return (
              <ListItem
              key={value}
              dense
              button
              onClick={handleToggle(value)}
              style={{ padding: 0, marginLeft: "20px", fontSize: "" }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox edge="start" checked={isChecked} tabIndex={-1} disableRipple />
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  variant: "subtitle2",
                  style: { fontWeight: "bold", fontSize: "10px", paddingTop: 0, paddingBottom: 0 },
                }}
              />
            </ListItem>
            
            );
          })}
        </List>
        <Divider/>
        <List>

          <b style={{fontSize:'16px'}}>Price</b>
          {priceOptions.map(({ label, value }) => {
            const isChecked = checked.indexOf(value) !== -1;

            return (
              <ListItem key={value} dense button onClick={handleToggle(value)} style={{ padding: 0 , marginLeft:'20px' }}>

                  <Checkbox edge="start" checked={isChecked} tabIndex={-1} disableRipple />
   
                  <ListItemText primary={label} primaryTypographyProps={{ variant: 'subtitle2', style: { fontWeight: 'bold' , fontSize:'10px' } }} />
              </ListItem>
            );
          })}
        </List>
        <Divider/>

        <List>
        <b style={{fontSize:'16px'}}>Contents</b>
                  {options.map(({ label, value }) => {
            const isChecked = checked.indexOf(value) !== -1;

            return (
              <ListItem key={value} dense button onClick={handleToggle(value)} style={{ padding: 0,  marginLeft:'20px' }}>

                  <Checkbox edge="start" checked={isChecked} tabIndex={-1} disableRipple />
             
                  <ListItemText primary={label} primaryTypographyProps={{ variant: 'subtitle2', style: { fontWeight: 'bold' , fontSize:'10px'} }} />
              </ListItem>
            );
          })}
        </List>
        <Divider/>
        
        <List>
          <b style={{fontSize:'16px'}}>Auto Upload Support</b>
          {autoUploadOptions.map(({ label, value }) => {
            const isChecked = checked.indexOf(value) !== -1;

            return (
              <ListItem key={value} dense button onClick={handleToggle(value)} style={{ padding: 0 ,  marginLeft:'20px'}}>

              
                  <Checkbox edge="start" checked={isChecked} tabIndex={-1} disableRipple />
             
                  <ListItemText primary={label} primaryTypographyProps={{ variant: 'subtitle2', style: { fontWeight: 'bold' , fontSize:'10px'} }} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};