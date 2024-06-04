import React from "react";
import { Formik } from 'formik';
import { Hero, Button, Input, Form, Tooltip, Card } from "react-daisyui";
import * as Yup from 'yup';

type Inputs = {
  email: String;
  password : String
};
const initialValues  = {
  email : "",
  password : ''
}
const schema = Yup.object().shape({
  email : Yup.string().email().required(),
  password : Yup.string().required()
})
const onSubmit = (values:any) => {
  alert(JSON.stringify(values, null, 2));
}
export default ({ ...props }) => {
 
  return (
    <Card className="md:max-w-md animate-in fade-in-0 duration-700 ease-in shadow-2xl">
      <Card.Body className="text-center items-center">
        <Card.Title>login</Card.Title>
          <Formik onSubmit={onSubmit} validationSchema={schema} initialValues={initialValues}>{
            (props) => {
              return (
                <Form>
                  <Form.Label htmlFor="email" title="email"></Form.Label>
                  <Tooltip 
                    position="right"
                    open={(props.errors.email && props.touched.email) ? true : false}
                    message={props.errors.email ?? ""}>
                  </Tooltip>
                  <Input 
                    className = {props.touched.email && props.errors.email ? "border-rose-500" : "" }
                    name="email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}> 
                  </Input>
                  <Form.Label htmlFor="password" title="password"></Form.Label>
                  <Tooltip 
                    position="right"
                    open={(props.errors.password && props.touched.password) ? true : false}
                    message={props.errors.password ?? ""}>
                  </Tooltip>
                  <Input
                    className = {props.touched.password && props.errors.password ? "border-rose-500" : "" }
                    name="password"
                    value={props.values.password} 
                    type="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}>
                  </Input>
                  <Form.Label htmlFor="submit"></Form.Label>
                  <Button id="submit" type="submit">submit</Button>
                </Form>
              )
            }}
          </Formik>
      </Card.Body>
    </Card>
  );
};
