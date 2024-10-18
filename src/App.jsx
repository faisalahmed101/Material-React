import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/send'
import TextField from '@mui/material/TextField'
import { Stack, MenuItem, Box} from '@mui/material'





export default class App extends Component {
  render() {
    return (
      <div>

        {/* ---------------- navbar ---------------- */}
        {/* <AppBar position="fixed" color="primary" direction="column">
          <Toolbar>

            <Typography variant="h6">
              Faisal
            </Typography>

            <Button variant="contained" color="success">Button</Button>

          </Toolbar>
        </AppBar> */}

        {/* ---------------- main content ---------------- */}

        <div direction={'row'} className='mt-10'>
          <h1>fffff</h1>
          <h1>fffff</h1>
          <h1>fffff</h1>

          <div>
            <TextField id="" label="name" size='small' helperText="enter your name" />
            <TextField id="" label="password" size='small' type='password' />
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
              send
            </Button>

            <TextField id="" label="price" size='small' helperText="enter your name"
            />

            <Box width={'250px'}>

              <TextField
                label="select contry"
                select
                fullWidth
              >
                <MenuItem>Bangladesh</MenuItem>
                <MenuItem>India</MenuItem>
                <MenuItem>USA</MenuItem>
              </TextField>



            </Box>


          </div>


        </div>

      </div>
    )
  }
}
