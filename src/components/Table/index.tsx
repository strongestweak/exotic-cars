import { FC, } from 'react';
import TableRows from './tableRow'
import './style.scss'
import {CarDetails} from '../../dataTypes/carDetailsTypes'


interface CarTableProps{
  carList: CarDetails[],
  onDelete: (Id:number|string)=>void
}

const CarTable:FC<CarTableProps> = ({carList, onDelete}) => {

  return carList.length > 0 ? (
    <table className="table">
      <thead className="table-header">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {carList.map((item:any) => {
          return (
            <TableRows cardDetails = {item} onDelete={onDelete}/>
          );
        })}
      </tbody>
    </table>
  ) : (
    <h2>No cars found</h2>
  );
}

export default CarTable;