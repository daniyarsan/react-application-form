import Datepicker from "react-datepicker";
import {useField} from "formik";
import "react-datepicker/dist/react-datepicker.css";

const DatepickerField = (props) => {

  const [field, state, {setValue, setTouched}] = useField(props.field.name);

  const onChange = (val) => {
    setValue(val)
  }

  return (
    <Datepicker
      {...props}
      dateFormat="yyyy-dd-MM"
      selected={field.value}
      onChange={onChange}
      className="form-control"
    />
  )

}

export default DatepickerField;