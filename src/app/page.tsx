// 'use client';
import Typography from '@mui/material/Typography';
import React from 'react';
import st from './page.module.css';
import CardSite from '@/components/CardSite/CardSite';
import { Header } from '@/components/Header';
import { getMetadata } from '@/lib/getMetadata';
import { mySites } from '@/lib/mySites';

export async function generateMetadata() {
  const metadata = getMetadata('portfolio');
  return metadata;
}

export default function Portfolio() {
  return (
    <>
      <Header />
      <ul className={st.ul}>
        {mySites.map(({ image, href, stack, github }) => (
          <li key={href}>
            {<CardSite image={image} href={href} stack={stack} github={github} />}
          </li>
        ))}
      </ul>
    </>
  );
}
