import { Formik } from 'formik';
import { Button, Input, Form, Tooltip, Hero, Card } from "react-daisyui";
import * as Yup from 'yup';

type Inputs = {
  email : string
}
const initialValues = {
 email : ""
}
const schema = Yup.object().shape({
  email : Yup.string().email().required()
});
const onSubmit = (values:any) => {
  alert(JSON.stringify(values, null, 2));
}
export default ({...props}) => {
  return (<Card className="md:max-w-md animate-in fade-in-0 duration-700 ease-in shadow-2xl">
    <Card.Body className='text-center items-center'>
      <Card.Title>forgot email</Card.Title>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>{
      (props) => {
        return (
          <Form className='grid gap-9'>
            <Tooltip 
              position="bottom"
              open={(props.errors.email && props.touched.email) ? true : false}
              message={props.errors.email ?? ""}>
                <Input 
                  placeholder='email'
                  className = {props.touched.email && props.errors.email ? "border-rose-500" : "" }
                  name="email"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}> 
                </Input>
            </Tooltip>
            <Button id="submit" type="submit">sign up</Button>
          </Form>
        )
      }
    }</Formik>
    </Card.Body>
  </Card>)  
} 