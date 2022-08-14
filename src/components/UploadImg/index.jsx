import { useState } from 'react';

import uploadIcon from '../../assets/icons/upload-icon.svg';
import styles from './UploadImg.module.scss';

const UploadImg = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  // MIME типы изображений доступных для обработки
  const allowedMIMETypes = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        reject(err);
      };
    });
  };

  const onChangeHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      // загруженное изображение конвертируется в base64 для последующей обработки
      const base64File = await convertToBase64(file);
      setUploadedImage(base64File);
    } catch (err) {
      console.error('Error', err);
    }
  };

  return (
    <div>
      <label className={styles.upload__btn} htmlFor='uploadFileBtn'>
        <img className={styles.upload__icon} src={uploadIcon} alt='upload' />
        <span>Загрузить</span>
      </label>
      <input
        id='uploadFileBtn'
        className={styles.upload__defaultBtn}
        type='file'
        accept={allowedMIMETypes.join(', ')}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default UploadImg;
