import React from 'react';
import s from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <div className={s.Loader}>
    <ThreeDots height="15" width="36" color="gray" ariaLabel="loading" />
  </div>
);
