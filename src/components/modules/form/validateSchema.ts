import * as yup from "yup";

const emailRegex =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;

export const schema = yup.object().shape({
  name: yup.string().min(2).max(60).required("Required"),
  email: yup
    .string()
    .min(2)
    .max(100)
    .matches(emailRegex, "Invalid email")
    .required("Required"),
  phone: yup.string().matches(phoneRegex, "Invalid phone number").required(),
  position_id: yup.number().min(1).required("Required"),
  photo: yup.mixed().required("Required"),
});
