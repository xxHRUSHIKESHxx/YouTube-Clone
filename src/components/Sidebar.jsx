import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';



const Sidebar = ({ selectedcategory, setselectedcategory }) => 
   (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={()=>setselectedcategory(category.name)}
          style={{
            background: category.name === selectedcategory && '',
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedcategory ? "white" : "#ba00f7",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedcategory ? '2':'1',
              color:"white"
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
;

export default Sidebar;
