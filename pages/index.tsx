import { css } from '@emotion/react';

const emotionStyles = css([
  {
    position: 'fixed',
    top: 300,
    left: 300,
    opacity: 100,
  },
]);

export default function Home() {
  return <div css={emotionStyles}><h1>Hello</h1></div>
}
