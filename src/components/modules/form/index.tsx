import { TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React, { ChangeEvent, FC } from "react";
import { Button } from "../button";

import style from "./index.module.scss";
import { UploadImage } from "./uploadImage";
import { schema } from "./validateSchema";
import InputMask from "react-input-mask";
import { Position } from "../../../types/type";
import { PositionsRadioGroup } from "./positions-radio-group";

type FormProps = {
  positions: Position[];
};

export type InitialValuesFormik = {
  name: string;
  email: string;
  phone: string;
  position: { id: number; name: string };
  image: string;
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  position: { id: null, name: "" },
  image: "",
};

export const PostForm: FC<FormProps> = ({ positions }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikHelper) => {
        console.log("posted", values);
      }}
      validationSchema={schema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
        setFieldValue,
        dirty,
      }) => {
        const onChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setFieldValue("phone", value);
        };

        const onUploadImage = (value: string) => {
          setFieldValue("image", value);
        };

        const onChangePosition = (value: string, id: number) => {
          setFieldValue("position", { value, id });
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
            <InputMask
              maskChar={null}
              mask="+38 (099) 999 99 99"
              onChange={onChangePhoneNumber}
            >
              {() => (
                <TextField
                  id="outlined-phone"
                  type="tel"
                  name="phone"
                  label="Phone"
                  placeholder="Phone"
                  variant="outlined"
                  color="secondary"
                  error={errors.phone && touched.phone ? true : false}
                  helperText={errors.phone && touched.phone && errors.phone}
                />
              )}
            </InputMask>

            <PositionsRadioGroup
              positions={positions}
              onChangePosition={onChangePosition}
            />
            <UploadImage
              image={values.image}
              onUploadImage={onUploadImage}
              error={errors.image && touched.image ? true : false}
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
