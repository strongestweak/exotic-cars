import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {CarDetails} from '../../dataTypes/carDetailsTypes'


const CarInitialData = {
    Id: uuidv4(),
    Name: "",
    Model: "",
    Year: "",
    Color: "",
    Price: 0,
  }

const Hook = () => {
  const [newCar, setNewCar] = useState<CarDetails>(CarInitialData)
  const [carList, setCarList] = useState<CarDetails[]>([
      {
        Id: 1,
        Name: "Ferrari SF 812",
        Model: "Ferrari",
        Year: "2021",
        Color: "Deep Red",
        Price: 800000,
      },
      {
        Id: 2,
        Name: "Lamborghini Urus Venatus",
        Model: "Lamborghini",
        Year: "2020",
        Color: "Matte Black",
        Price: 500000,
      },
      {
        Id: 3,
        Name: "Ferrari 488 Pista Spider",
        Model: "Ferrari",
        Year: "2020",
        Color: "Red",
        Price: 280000,
      }, 
      {
        Id: 4,
        Name: "Aston Martin DBS Superleggera",
        Model: "Aston Martin",
        Year: "2021",
        Color: "Metallic Gray",
        Price: 170000,
      },
    ]);

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setNewCar((prev: any) => ({
        ...prev,
        [name]: value
      }))
    }

    const handleSave = (e:any)=> {
      e.preventDefault();
      if (newCar.Name == "" || newCar.Model == "" || newCar.Year == "" || newCar.Color == "" || newCar.Price== 0)
        return

      setCarList((prev:any)=>([
        ...prev,newCar
      ]))
      alert("Success!")
      setNewCar(CarInitialData)
    }

    const handleDelete = (id:number|string) => {
      const newCardList = carList.filter((car)=>{return car.Id !== id})
      setCarList(newCardList)
    }

    return {
      newCar,
      setNewCar,
      carList,
      setCarList,
      handleChange,
      handleSave,
      handleDelete
    }
}

export default Hook