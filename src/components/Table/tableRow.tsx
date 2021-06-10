import React,{ FC } from 'react';
import {CarDetails} from '../../dataTypes/carDetailsTypes'


interface TableRowsProps{
  cardDetails: CarDetails,
  onDelete: (Id:number|string)=>void
}

const TableRows:FC<TableRowsProps> = ({cardDetails, onDelete}) => {

  return (
    <tr key={cardDetails.Id} className="table-row">
      <td>{cardDetails.Id}</td> 
      <td>{cardDetails.Name}</td>
      <td>{cardDetails.Model}</td>
      <td>{cardDetails.Year}</td>
      <td>{cardDetails.Color}</td>
      <td>{cardDetails.Price} USD</td>
      <td> <button onClick={() => onDelete(cardDetails.Id)}>Delete</button></td>
    </tr>
  );
}

export default TableRows;