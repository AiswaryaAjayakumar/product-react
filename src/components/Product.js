import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { Component } from 'react'

export default class Product extends Component {
    state={
        prdData:[
            {
                "prdname":"Oil",
                "code":"890",
                "manf":"Herbal",
                "dist":"Dabar",
                "web":"www.oil.com",
                "mail":"oil@gmail.com"
            },
            {
                "prdname":"Dress",
                "code":"891",
                "manf":"Divya",
                "dist":"Sanitha",
                "web":"www.dress.com",
                "mail":"dress@gmail.com"
            },
            {
                "prdname":"Sandals",
                "code":"898",
                "manf":"Adidas",
                "dist":"Adidas",
                "web":"www.sandal.com",
                "mail":"sandal@gmail.com"
            }
        ]
    }
  render() {
    return (
      <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Sl.no</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Product Code</TableCell>
                        <TableCell>Manufacturer</TableCell>
                        <TableCell>Distributor</TableCell>
                        <TableCell>Website</TableCell>
                        <TableCell>Mail id</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                 {this.state.prdData.map(
                    (value,index)=>{
                        return <TableRow>
                              <TableCell>{index+1}</TableCell>
                            <TableCell>{value.prdname} </TableCell>
                            <TableCell>{value.code}</TableCell>
                            <TableCell>{value.manf}</TableCell>
                            <TableCell>{value.dist}</TableCell>
                            <TableCell>{value.web}</TableCell>
                            <TableCell>{value.mail}</TableCell>
                        </TableRow>
                    }
                 )}
                </TableBody>
               
            </Table>
        </TableContainer>
      </div>
    )
  }
}
