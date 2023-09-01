'use client';
import Typography from '@mui/material/Typography';
import React from 'react';
import st from './page.module.css';
import Paper from '@mui/material/Paper';
import pomodoroImg from '@/img/pomodoro.png';
import evklidImg from '@/img/evklid.png';
import monitoringsiImg from '@/img/monitoringsi.png';
import coinImg from '@/img/coin.png';
import infinizaiImg from '@/img/infinizai.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardSite from '@/components/CardSite/CardSite';
// import CardSite from '@/components/CardSite';

const sites = [
  {
    href: 'https://evklid-henna.vercel.app/',
    image: '/img/evklid.png',
    stack: 'HTML, CSS, Swiper.',
    github: 'https://github.com/alex8023g/evklid',
  },
  {
    href: 'https://pomodoro-alpha-six.vercel.app/',
    image: '/img/pomodoro.png',
    stack: `React, Typescrypt, React-Router, Zustand, Drag'n'Drop, Rechart, Material
                  UI.`,
    github: 'https://github.com/alex8023g/pomodoro',
  },
  {
    href: 'https://80-78-248-80.cloudvps.regruhosting.ru/monitoringsi?sechID=63d37736eaaf2b2db53299b9&naimsechshort=ТН%20ВНК%20+%20ГН%20Восток%20-%20ТЭСК%20(Юг)',
    image: '/img/monitoringsi.png',
    stack: `React, Typescrypt, React-Router, Zustand, Drag'n'Drop, Material UI, Express, Mongo DB.`,
    github: 'https://github.com/alex8023g/monitoringSi',
  },
  {
    href: 'https://coin-front-end.vercel.app',
    image: '/img/coin.png',
    stack: `React, Typescrypt, React-Router, Material UI, Recharts, Express, WebSocket.`,
    github: 'https://github.com/alex8023g/coin-front-end',
  },
  {
    href: 'https://kommo-infinizai.vercel.app',
    image: '/img/infinizai.png',
    stack: `React, Typescrypt, React-Router, classnames`,
    github: 'https://github.com/alex8023g/kommo-infinizai',
  },
];

export default function Portfolio() {
  return (
    // <Layout>
    <ul className={st.ul}>
      {sites.map(({ image, href, stack, github }) => (
        <li key={href}>
          {<CardSite image={image} href={href} stack={stack} github={github} />}
        </li>
      ))}
    </ul>
    //  </Layout>
  );
}
