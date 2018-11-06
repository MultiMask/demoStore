import { FormikErrors } from "formik";
import { IOrder } from "../ProductsPage";

export const validate = (values: IOrder) => {
  const errors: FormikErrors<IOrder> = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.streetAddress) {
    errors.streetAddress = "Required";
  }

  if (!values.zipCode) {
    errors.zipCode = "Required";
  }

  if (!values.city) {
    errors.city = "Required";
  }

  if (!values.country) {
    errors.country = "Required";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }

  return errors;
};
