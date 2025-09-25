'use client';
import { sendFeedbackMsg } from '@/lib/sendFeedbackMsg';
import st from './support.module.css';
import { useState } from 'react';

export default function FeedbackForm() {
  const [msg, setMsg] = useState('');
  return (
    <>
      <textarea
        name='textarea-1'
        id='textarea-1'
        className={st.textarea1}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        value={msg}
      ></textarea>
      <button
        className={st.sendBtn}
        onClick={() => {
          sendFeedbackMsg(msg);
          setMsg('');
        }}
      >
        send
      </button>
    </>
  );
}
