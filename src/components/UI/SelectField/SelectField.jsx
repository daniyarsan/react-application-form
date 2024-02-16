import React from 'react';
import Select from 'react-select';
import {useField} from "formik";

function SelectField(props) {
  const [field, state, {setValue, setTouched}] = useField(props.field.name);

  const onChange = (choosenValue) => {
     setValue(props.isMulti ? choosenValue.filter(option => option.value) : choosenValue.value)
  }

  return (
    <Select {...props}
            classNamePrefix='choosen'
            options={props.options}
            isSearchable={false}
            onChange={onChange}
            onBlur={setTouched}
    />
  );

}

export default SelectField;