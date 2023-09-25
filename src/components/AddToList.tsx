import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IAddToListProps {

    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>

}

const AddToList: React.FC<IAddToListProps> = ({people,setPeople}) => { 

  const [input, setInput]=useState({
  
    name:"",
    age:"",
    note:"",
    img:""

  })

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement >): void => {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
}

const handleClick = (): void => {
    if(
      !input.name ||
      !input.age ||
      !input.img
    ){
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note
      }
    ]);
    setInput({
      name:"",
      age:"",
      note:"",
      img:""
    })
}


console.log(setInput);

  return (
    <div className='addTo-list'>
      <input
        type="text"
        placeholder='Name'
        className='addToList-input'
        value={input.name}
        onChange={handleChange}
        name='name'
      />
      <input
        type="number"
        placeholder='Age'
        className='addToList-input'
        value={input.age}
        onChange={handleChange}
        name='age'

      />
      <input
        type="text"
        placeholder='Image Url'
        className='addToList-input'
        value={input.img}
        onChange={handleChange}
        name='img'
      />
      <textarea
        placeholder='Note'
        className='addToList-input'
        value={input.note}
        onChange={handleChange}
        name='note'
      />
      <button
      className='addToList-btn'
      onClick={handleClick}
      >
        Add to list
      </button>
    </div>
  )
}

export default AddToList
