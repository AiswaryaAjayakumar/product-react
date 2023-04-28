import { Button, Grid, TextField } from '@mui/material'
import React, { Component } from 'react'

export default class ProductDataRead extends Component {
    state={
        prdData:[
            {
                "prdname":"",
                "code":"",
                "manf":"",
                "dist":"",
                "web":"",
                "mail":""
            }
        ]
    }
    submitData=()=>{
        console.log(this.state)
    }

    handleData=(event)=>{
        this.setState(
            {
          [event.target.name]:event.target.value
            }
        )
    }
  render() {
    return (
     <Grid container>
        <Grid item xs={12}sm={6}md={6}lg={6}xl={6}>
            <TextField
            variant='outlined'
            fullWidth
            margin='normal'
            label="Product Name"
            type="text"
            name='prdname'
            onChange={this.handleData}
            />
             <TextField
            variant='outlined'
            fullWidth
            margin='normal'
            label="Product Code"
            type="number"
            name='code'
            onChange={this.handleData}

            />
             <TextField
            variant='outlined'
            fullWidth
            margin='normal'
            label="Manufacturer"
            type="text"
            name='manf'
            onChange={this.handleData}

            />
             <TextField
            variant='outlined'
            fullWidth
            margin='normal'
            label="Distributor"
            type="text"
            name='dist'
            onChange={this.handleData}

            />
             <TextField
            variant='outlined'
            fullWidth
            margin='normal'
            label="Website"
            type="text"
            name='web'
            onChange={this.handleData}
            />
             <TextField
            variant='outlined'
            fullWidth
            margin='normal'
            label="Mail Id"
            type="text"
            name='mail'
            onChange={this.handleData}

            />
            <Button
            onClick={this.submitData}
            variant='contained'
            color='secondary'
            fullWidth
            type='submit'
            >
                SUBMIT
            </Button>


        </Grid>

     </Grid>
    )
  }
}
