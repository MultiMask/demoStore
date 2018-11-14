import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import * as React from "react";
import styled from "react-emotion";
import Button from "../../../components/Button";
import { IOrder } from "../ProductsPage";
import { validate } from "./validate";

export interface IOrderForm {
  initialValues: IOrder;
  onSubmit: (values: IOrder) => void;
}

export interface IMyFormValues {
  firstName: string;
}

const OrderForm: React.SFC<IOrderForm> = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}
    render={(formikBag: FormikProps<IOrder>) => (
      <Form>
        <Field
          name="firstName"
          render={({ field, form }: FieldProps<IOrder>) => (
            <div>
              <input type="text" {...field} placeholder="First Name" />
              {form.touched.firstName &&
                form.errors.firstName &&
                form.errors.firstName}
            </div>
          )}
        />
        <Field
          name="lastName"
          render={({ field, form }: FieldProps<IOrder>) => (
            <div>
              <input type="text" {...field} placeholder="Last Name" />
              {form.touched.lastName &&
                form.errors.lastName &&
                form.errors.lastName}
            </div>
          )}
        />
        <Field
          name="streetAddress"
          render={({ field, form }: FieldProps<IOrder>) => (
            <div>
              <input type="text" {...field} placeholder="Street Address" />
              {form.touched.streetAddress &&
                form.errors.streetAddress &&
                form.errors.streetAddress}
            </div>
          )}
        />
        <Field
          name="zipCode"
          render={({ field, form }: FieldProps<IOrder>) => (
            <div>
              <input type="text" {...field} placeholder="Zip Code" />
              {form.touched.zipCode &&
                form.errors.zipCode &&
                form.errors.zipCode}
            </div>
          )}
        />
        <Field
          name="city"
          render={({ field, form }: FieldProps<IOrder>) => (
            <div>
              <input type="text" {...field} placeholder="City" />
              {form.touched.city && form.errors.city && form.errors.city}
            </div>
          )}
        />
        <Field
          name="country"
          render={({ field, form }: FieldProps<IOrder>) => (
            <div>
              <input type="text" {...field} placeholder="Country" />
              {form.touched.country &&
                form.errors.country &&
                form.errors.country}
            </div>
          )}
        />
        <Footer>
          <Button type="submit">Ok</Button>
        </Footer>
      </Form>
    )}
  />
);

const Footer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export default OrderForm;
