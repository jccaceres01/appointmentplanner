import React from "react";
import { Tile } from '../tile/Tile';

import {
  ImageList,
  ImageListItem
} from '@mui/material';

export const TileList = ({objectArray}) => {
  return (
    <ImageList cols={3}>
      {objectArray.map((item, index) => {
        return (
            <ImageListItem key={index}>
              <Tile item={item} />
            </ImageListItem>
        )
      })}
    </ImageList>
  );
};
