import React from 'react';

export default function Home() {
  const myFunc = (args: any) => {
    return `Hello ${args}`;
  };
  return (
    <main>
      <h1>Hello World || {myFunc('brother')}</h1>
    </main>
  );
}
