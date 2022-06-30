import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default function MenuAppBar({ likes, dislikes }) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div style={{
          'display':'flex',
          'justifyContent': 'center',
          }}>
          <div
            style={{
              'marginRight': '30px'
            }}
          >{ likes }<ThumbUpIcon /></div>
          <div>{ dislikes }<ThumbDownAltIcon /></div>
        </div>
      </AppBar>
    </Box>
  );
}
