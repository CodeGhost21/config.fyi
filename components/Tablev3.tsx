import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"


interface Asset {
    symbol: string,
    canCollateral: string,
    LTV: string,
    liqThereshold: string,
    liqBonus: string,
    reserveFactor: string,
    canBorrow: string,
    optimalUtilization: string,
    varBorrowRate: string,
    canBorrowStable: string,
    stableBorrowRate: string,
    shareOfStableRate: string,
    debtCeiling?: string,
    supplyCap?: string,
    borrowCap?: string,
    eModeLtv?: string
    eModeLiquidationThereshold?: string,
    eModeLiquidationBonus?: string,
    assetLink: string,
}


const Tablev3 = (props: { matches: boolean; riskParams: Asset[] }) => {
    return(
      <TableContainer sx={{ width: props.matches ? '100%' : '90%', margin: 'auto', border: '1px dashed grey', mt:1}}>
        <Table  size="small" aria-label="a dense table " >
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>asset</b></TableCell>
              <TableCell align="center"><b>can collateral</b></TableCell>
              <TableCell align="center"><b>LTV</b></TableCell>
              <TableCell align="center"><b>liq thereshold</b></TableCell>
              <TableCell align="center"><b>liq bonus</b></TableCell>
              <TableCell align="center"><b>reserve factor</b></TableCell>
              <TableCell align="center"><b>can borrow?</b></TableCell>
              <TableCell align="center"><b>optimal utilization</b></TableCell>
              <TableCell align="center"><b>variable borrow rate</b></TableCell>
              <TableCell align="center"><b>can borrow stable?</b></TableCell>
              <TableCell align="center"><b>stable borrow rate</b></TableCell>
              <TableCell align="center"><b>share of stable rate</b></TableCell>
              <TableCell align="center"><b>debt ceiling</b></TableCell>
              <TableCell align="center"><b>supply cap</b></TableCell>
              <TableCell align="center"><b>borrow cap</b></TableCell>
              <TableCell align="center"><b>emode LTV</b></TableCell>
              <TableCell align="center"><b>emode liq thereshold</b></TableCell>
              <TableCell align="center"><b>emode liq bonus</b></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.riskParams?.map((n) => (
              <TableRow
                key={props.riskParams.indexOf(n)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{n.symbol}
                </TableCell>
                <TableCell align="center">{n.canCollateral}</TableCell>
                <TableCell align="center">{n.LTV}</TableCell>
                <TableCell align="center">{n.liqThereshold}</TableCell>
                <TableCell align="center">{n.liqBonus}</TableCell>
                <TableCell align="center">{n.reserveFactor}</TableCell>
                <TableCell align="center">{n.canBorrow}</TableCell>
                <TableCell align="center">{n.optimalUtilization}</TableCell>
                <TableCell align="center">{n.varBorrowRate}</TableCell>
                <TableCell align="center">{n.canBorrowStable}</TableCell>
                <TableCell align="center">{n.stableBorrowRate}</TableCell>
                <TableCell align="center">{n.shareOfStableRate}</TableCell>
                <TableCell align="center">{n.debtCeiling}</TableCell>
                <TableCell align="center">{n.supplyCap}</TableCell>
                <TableCell align="center">{n.borrowCap}</TableCell>
                <TableCell align="center">{n.eModeLtv}</TableCell>
                <TableCell align="center">{n.eModeLiquidationThereshold}</TableCell>
                <TableCell align="center">{n.eModeLiquidationBonus}</TableCell>
                <TableCell align="center"><a href={n.assetLink} target="_blank"  rel="noreferrer"  ><u>more info</u></a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
    )
  }  

export default Tablev3