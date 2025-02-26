import React from 'react';
import { FormikProps, useFormik, Formik, Form, useFormikContext } from 'formik';
import { Card, Button, Input, Form as DForm, Tooltip } from "react-daisyui";
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email : Yup.string().email().required(),
  password : Yup.string().required().min(10),
  password_repeat : Yup.string().required().oneOf([Yup.ref('password')])
})
type Inputs = {
  email: String;
  password : String;
  password_repeat : String;
};
export default ({ ...props }) => { 
    // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const initialValues =  {
      email: '',
      password : "",
      password_repeat : ""
    }
  const onSubmit = (values:any) => {
      alert(JSON.stringify(values, null, 2));
  }
  return (
    <Card className="md:max-w-md animate-in fade-in-0 duration-700 ease-in shadow-2xl">
      <Card.Body className='text-center items-center'>
        <Card.Title>sign up</Card.Title>
        <Formik validationSchema={schema} initialValues={initialValues} onSubmit={onSubmit}>{
          (props) => {
            console.log(props.errors);
            return (
            <DForm className="grid gap-9" onSubmit={props.handleSubmit}>
              <Tooltip 
                position="bottom"
                open={(props.errors.email && props.touched.email) ? true : false}
                message={props.errors.email ?? ""}>
                  <Input 
                    className={ 
                      (props.errors.email && props.touched.email) ? "border-rose-500" : ""  
                    }
                    placeholder='email'
                    onChange={props.handleChange} 
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    id="email" name="email" type="email">
                  </Input>
              </Tooltip>
              <Tooltip 
                position="bottom"
                open={(props.errors.password && props.touched.password) ? true : false}
                message={props.errors.password ?? ""}>
                  <Input 
                    placeholder='password'
                    className={ 
                      (props.errors.password && props.touched.password) ? "border-rose-500" : ""  
                    }
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password} 
                    id="password" type="password">
                  </Input>
              </Tooltip>
              <Tooltip 
                position="bottom"
                open={(props.errors.password_repeat && props.touched.password_repeat) ? true : false}
                message="passwords must match">
                   <Input 
                      placeholder='repeat password'
                          className={
                            (props.errors.password_repeat && props.touched.password_repeat) ? "border-rose-500" : ""  
                          }
                          onChange={props.handleChange}  
                          onBlur={props.handleBlur}
                          value={props.values.password_repeat} 
                          id="password_repeat" type="password">
                    </Input>  
              </Tooltip>
              <Button id="submit" type="submit">sign up</Button>
            </DForm>
          )}}
        </Formik>
    </Card.Body>
  </Card>
)};