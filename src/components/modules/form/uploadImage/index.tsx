import React, { ChangeEvent, FC, useState } from "react";

import style from "./index.module.scss";
import cn from "classnames";

type UploadImageProps = {
  image: string;
  onUploadImage: (value: string) => void;
  helperText?: string;
  error?: boolean;
  required?: boolean;
};

export const UploadImage: FC<UploadImageProps> = ({
  required = false,
  image,
  onUploadImage: onSetImage,
  error,
  helperText,
}) => {
  const [inputText, setInputText] = useState<string>("");
  const isImage =
    image?.split("").slice(4, 11).join("") === ":image/" ? true : false;

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? event.target.files[0] : undefined;
    if (files) {
      let reader = new FileReader();
      reader.readAsDataURL(files);

      reader.onload = () => {
        const imageSrc = reader.result ? reader.result.toString() : undefined;
        if (imageSrc) {
          onSetImage(imageSrc);
        }
      };
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.imageInput}>
        <label htmlFor="addImage">
          <input
            type="file"
            id="addImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              uploadImage(e);
            }}
            required={required}
          />
          <div
            className={cn(style.button, style.text, {
              [style.buttonError]: (!isImage && inputText !== "") || error,
            })}
          >
            Upload
          </div>
        </label>
        <input
          type="text"
          className={cn(style.input, style.text, {
            [style.inputError]: (!isImage && inputText !== "") || error,
          })}
          placeholder="Upload your photo"
          onChange={(e) => setInputText(e.target.value)}
          value={isImage ? "Item" : inputText}
        />
      </div>
      {error ? (
        <p className={cn(style.helperText, style.helperTextError)}>Required</p>
      ) : !isImage && inputText !== "" ? (
        <p className={cn(style.helperText, style.helperTextError)}>
          Error text
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
