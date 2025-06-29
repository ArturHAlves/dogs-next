import style from './login.module.css';

import React from 'react';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.login}>
      <div className={style.forms}>{children}</div>
    </div>
  );
}
