import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const MiniLoader = ({size}:any) => {
  return (
    <Stack minHeight={200} alignItems="center" justifyContent="center">
      <CircularProgress size={size || 60}/> 
    </Stack>
  )
}

export default MiniLoader