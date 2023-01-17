import React, { ChangeEvent, FC, useState } from "react";

import style from "./index.module.scss";
import cn from "classnames";

type UploadImageProps = {
  photo: string;
  onUploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  error?: boolean;
  required?: boolean;
};

export const UploadImage: FC<UploadImageProps> = ({
  required = false,
  photo,
  onUploadImage,
  error,
  helperText,
}) => {
  const [inputText, setInputText] = useState<string>("");
  const inputValidation =
    (typeof photo === "string" && photo !== "") || inputText?.length > 0;
  return (
    <div className={style.wrapper}>
      <div className={style.imageInput}>
        <label htmlFor="addImage">
          <input
            type="file"
            id="addImage"
            accept="image/jpg, image/jpeg"
            style={{ display: "none" }}
            onChange={onUploadImage}
            required={required}
          />
          <div
            className={cn(style.button, style.text, {
              [style.buttonError]: error,
            })}
          >
            Upload
          </div>
        </label>
        <input
          type="text"
          className={cn(style.input, style.text, {
            [style.inputError]: error,
          })}
          placeholder="Upload your photo"
          onChange={(e) => setInputText(e.target.value)}
          value={photo === "" ? inputText : "Item"}
        />
      </div>
      {inputValidation ? (
        <p className={cn(style.helperText, style.helperTextError)}>
          Error text
        </p>
      ) : (
        error && (
          <p className={cn(style.helperText, style.helperTextError)}>
            {helperText}
          </p>
        )
      )}
    </div>
  );
};
