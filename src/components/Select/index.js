import React, {useState, useEffect} from 'react'
import { SelectBox, OptionsBox, Option } from './styles'
import { FaAngleDown } from 'react-icons/fa'

export default function Select(props) {

  const [selectedOption, setSelectedOption] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    props.onChange(selectedOption.value)
  }, [props, selectedOption.value])

  function handleClickSelect(option) {
    setSelectedOption(option)
  }

  window.addEventListener('click', () => {
    setOpen(false)
  })

  return (
    <SelectBox value={selectedOption}
      onClick={(event) => {
      if(!open) {
        event.stopPropagation()
        setOpen(true)
      }
    }}>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} > 
        {props.placeholder && (
          <option value="">{props.placeholder}</option>
          )}
        {props.options.map(option => {
          let value = option.value || option.text
          let text = option.text
          return (
          <option key={value}
          value={value}>
            {text}
          </option>
        )})}
      </select>


      {selectedOption ? ( <div>{selectedOption.text}</div> ) :
         props.placeholder ? ( <div>{props.placeholder}</div> ) :
          ( <div>{props.options[0].text}</div>)}

      <OptionsBox open={open}>
        {props.options.map(option => {
          let value = option.value || option.text
          let text = option.text
          return (          
          <Option key={value}
            value={value}
            onClick={(e) => handleClickSelect({text, value})} >
            {text}
          </Option>
        )})}
      </OptionsBox>
      <FaAngleDown />

    </SelectBox>
  )
}
