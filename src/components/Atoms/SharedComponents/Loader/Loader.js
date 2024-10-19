import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

export default function Loader() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height="100dvh">
      <CircularProgress />
    </Stack>
  );
}