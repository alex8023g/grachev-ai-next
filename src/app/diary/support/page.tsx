import st from './support.module.css';
import FeedbackForm from './FeedbackForm';

export default function SupportPage() {
  return (
    <>
      <h2 className={st.h2}>Support section</h2>
      <p>
        If you have any questions, please contact me at{' '}
        <a href='mailto:grachevdev@gmail.com'>grachevdev@gmail.com</a>
      </p>
      <p>or send me a message via the form below</p>
      <FeedbackForm />
    </>
  );
}
