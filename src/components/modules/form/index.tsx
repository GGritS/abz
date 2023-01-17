import { TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React, { FC } from "react";
import { Button } from "../button";

import style from "./index.module.scss";
import { UploadImage } from "./uploadImage";
import { schema } from "./validateSchema";
import { Position } from "../../../types/type";
import { PositionsRadioGroup } from "./positions-radio-group";
import useSubimitForm from "./useSubimitForm";

type FormProps = {
  positions: Position[];
};

export type ValuesFormik = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: string;
};

const initialValues: ValuesFormik = {
  name: "",
  email: "",
  phone: "",
  position_id: "1",
  photo: "",
};

export const PostForm: FC<FormProps> = ({ positions }) => {
  const onSubmit = useSubimitForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {(formikProps) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
          dirty,
        } = formikProps;

        const onUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];

          if (file) {
            setFieldValue("photo", file);
          }
        };

        return (
          <Form className={style.wrapper} onSubmit={handleSubmit}>
            <TextField
              id="outlined-name"
              name="name"
              label="Your name"
              variant="outlined"
              color="secondary"
              className={style.form}
              value={values.name}
              onChange={handleChange}
              error={errors.name && touched.name ? true : false}
              helperText={errors.name && touched.name && errors.name}
            />
            <TextField
              id="outlined-email"
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              color="secondary"
              className={style.form}
              value={values.email}
              onChange={handleChange}
              error={errors.email && touched.email ? true : false}
              helperText={errors.email && touched.email && errors.email}
            />

            <TextField
              id="outlined-phone"
              type="tel"
              name="phone"
              label="Phone"
              placeholder="Phone"
              variant="outlined"
              color="secondary"
              value={values.phone}
              error={errors.phone && touched.phone ? true : false}
              helperText={errors.phone && touched.phone && errors.phone}
              onChange={handleChange}
            />

            <PositionsRadioGroup positions={positions} />

            <UploadImage
              photo={values.photo}
              onUploadImage={onUploadFile}
              error={errors.photo && touched.photo ? true : false}
              helperText={errors.photo}
            />
            <div className={style.buttonWrapper}>
              <Button color={dirty ? "primary" : "disabled"} type="submit">
                Sign up
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
