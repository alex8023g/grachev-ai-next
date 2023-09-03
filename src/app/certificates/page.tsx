import React from 'react';
import st from './certificates.module.css';
// import { Layout } from '../Layout';
import nodeJsImg from '@/img/CertSBNodeJS.png';
import jsAdvImg from '@/img/CertSBJSAdvanced.png';
import reactJsImg from '@/img/CertSBReactJS.png';
import webLayoutImg from '@/img/CertSBWebLayout.png';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { GetServerSideProps } from 'next/types';
import clientPromise from '@/lib/mongodb';

type ConnectionStatus = {
  isConnected: boolean;
};
let title: string = '';
let description: string = '';
(async () => {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    const client = await clientPromise;
    const db = client.db('grachev-ai');
    const seoDB = db.collection('seo');
    const seoData = await seoDB
      .find({
        page: 'certificates',
      })
      .toArray();
    console.log(seoData[0].title);
    title = seoData[0].title;
    description = seoData[0].description;
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
  } catch (e) {
    console.error(e);
  }
})();

export default function Certificates() {
  return (
    <>
      <Header />
      <ul className={st.ul}>
        {[reactJsImg, jsAdvImg, nodeJsImg, webLayoutImg].map((cert, i) => (
          <li key={i} className={st.li}>
            {/* <Paper elevation={7} sx={{ borderRadius: 5 }}> */}
            <Image className={st.img} src={cert} alt='' />
            {/* </Paper> */}
          </li>
        ))}
      </ul>
      <div>
        1{title}
        {description}
      </div>
    </>
  );
}
