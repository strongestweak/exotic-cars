import React,{ FC, useState } from 'react';
import CarTable from '../../components/Table'
import './style.scss'
import useHooks from './hooks' 

const MainScreen:FC = () => {
 	const {
    newCar,
    carList,
    handleChange,
    handleSave,
    handleDelete
	} = useHooks();

  return (
    <div className="container">
      <h1>Hyper Cars</h1>
      <div >
        <form className="form-container" onSubmit={handleSave}>
          <input
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={newCar.Name}
            required
            name="Name"
            placeholder="Enter Name"
          />
          <input
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={newCar.Model}
            required
            name="Model"
            placeholder="Enter Model"
          />
          <input
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={newCar.Year}
            required
            name="Year"
            placeholder="Enter Year"
          />
          <input
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={newCar.Color}
            required
            name="Color"
            placeholder="Enter Color"
          />
          <input
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={newCar.Price}
            required
            name="Price"
            placeholder="Enter Price"
          />
          <button>Submit</button>
        </form>
      </div>

      <div>
        <CarTable carList={carList} onDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default MainScreen;