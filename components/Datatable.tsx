import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { headers } from '../utils/headers'
import { assetType } from '../utils/interfaces'

const ColourText = (props: { text: string }) => {
  const color = props.text == 'True' ? '#A1DD70' : props.text == 'False' ? '#f44' :
    props.text == 'N/A' ? '#999' : props.text == '0%' ? '#999' : 'inherit'

  return (
    <TableCell sx={{ color }} align="center">{props.text}</TableCell>
  )
}

const Datatable = (props: { protocol: string, matches: boolean; riskParams: assetType[] | undefined }) => {
  type ObjectKey = keyof typeof headers
  let hasURL: boolean = false;

  if (props.riskParams) {
    for (let i = 0; i < props.riskParams.length; i++) {
      if (props.riskParams[i].assetLink != null) hasURL = true;
    }
  }

  return (
    <TableContainer sx={{ width: props.matches ? '100%' : props.protocol === 'v3' ? '90%' : '80%', margin: 'auto', border: '1px dashed grey', size: 'small', mt: 1 }} >
      <Table size="small" aria-label="a dense table " >
        <TableHead>
          <TableRow>
            {headers[props.protocol as ObjectKey].map((n: string, index: number) => (<TableCell align="center" key={index}> <b>{n}</b> </TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {hasURL ? (
            props.riskParams?.map((n) => (
              <TableRow
                key={props.riskParams?.indexOf(n)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.keys(n).length === headers[props.protocol as ObjectKey].length ? Object.values(n).map((k, index) => (index === (Object.keys(n).length - 1)) ? '' : <ColourText text={k} key={index} />) : ''}
                <TableCell align="center"><a href={n.assetLink} target="_blank" rel="noreferrer"  ><u>more info</u></a></TableCell>
              </TableRow>
            ))
          ) : (
            props.riskParams?.map((n) => (
              <TableRow
                key={props.riskParams?.indexOf(n)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.keys(n).length === headers[props.protocol as ObjectKey].length ? Object.values(n).map((k, index) => (index === (Object.keys(n).length)) ? '' : <ColourText text={k} key={index} />) : ''}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Datatable
