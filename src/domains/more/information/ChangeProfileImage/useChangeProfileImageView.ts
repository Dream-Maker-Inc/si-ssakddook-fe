import { useState } from "react";

export const useChangePasswordView = () => {
  const defaultImage = "/img/badge/icon-default-avatar.svg";
  const [img, setImage] = useState(defaultImage);
  const [changeImageState, setChangeImageState] = useState(false);

  const imapgeUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result as string);
      }
    };

    if (!e.target.files) {
      return;
    }
    reader.readAsDataURL(e.target.files[0]);
    setChangeImageState(true);
  };
  return {
    imageState: {
      value: img,
      onUpload: imapgeUploadHandler,
    },

    buttonState: {
      onActive: changeImageState,
    },
  };
};
