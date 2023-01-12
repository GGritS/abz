import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  phone: yup.string().min(19, "Invalid phone number").required("Required"),
  position: yup.string().required("Required"),
  image: yup.string().required("Required"),
});
