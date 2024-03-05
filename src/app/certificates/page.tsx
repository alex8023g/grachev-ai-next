import React from 'react';
import st from './certificates.module.css';
import nodeJsImg from '@/img/CertSBNodeJS.png';
import jsAdvImg from '@/img/CertSBJSAdvanced.png';
import reactJsImg from '@/img/CertSBReactJS.png';
import webLayoutImg from '@/img/CertSBWebLayout.png';
import ts from '@/img/CertSBTS.png';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { getMetadata } from '@/lib/getMetadata';

export async function generateMetadata() {
  const metadata = getMetadata('certificates');
  return metadata;
}

export default function Certificates() {
  return (
    <>
      {/* <Header /> */}
      <ul className={st.ul}>
        {[reactJsImg, jsAdvImg, nodeJsImg, webLayoutImg, ts].map((cert, i) => (
          <li key={i} className={st.li}>
            <Image className={st.img} src={cert} alt='' />
          </li>
        ))}
      </ul>
      <div></div>
    </>
  );
}
