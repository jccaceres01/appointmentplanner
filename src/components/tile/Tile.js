import React from "react";
import './Tile.css';

import {
  Card,
  CardContent
} from '@mui/material';

export const Tile = ({item}) => {
  return (
    <div className="tile-container">
      <Card sx={{backgroundColor: 'darkcyan', margin: 2, width: 300, height: 'auto'}}>
        {Object.keys(item).map((key, index) => {
          return (
            <CardContent>
              <p className={(index === 0) ? 'tile-title' : 'tile'} key={index} >{ item[key]}</p>
            </CardContent>
          )
        })}
      </Card>
    </div>
  );
};
