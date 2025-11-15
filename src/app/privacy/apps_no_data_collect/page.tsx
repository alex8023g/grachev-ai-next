import { sendFeedbackMsg } from '@/lib/sendFeedbackMsg';
import st from './privacy.module.css';

export default function PrivacyNoDataCollectAppsPage() {
  return (
    <>
      <h1>Privacy policy application</h1>
      <p>
        This is the privacy policy for application developed by Grachev Aleksei. We are
        committed to protecting your privacy and ensuring the security of your personal
        information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We do not collect any personal information from users. All data entered into the
        app is stored locally on your device and is not shared with any third parties.
      </p>
      <h2>Data Security</h2>
      <p>
        We take data security seriously and have implemented measures to protect your data
        from unauthorized access, disclosure, or destruction. However, please note that no
        method of transmission over the internet or method of electronic storage is 100%
        secure, and we cannot guarantee absolute security.
      </p>
    </>
  );
}
