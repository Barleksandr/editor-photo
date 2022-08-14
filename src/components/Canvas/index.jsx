import { useEffect, useRef } from 'react';

import styles from './Canvas.module.scss';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef}></canvas>;
};

export default Canvas;
