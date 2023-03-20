// const greeting: string = 'Hello World!';

// const number: number[] = [1, 2, 3];

// Create tsc config file
// tsc --init

// npm init -y
// npm i express

// npm i -D typescript ts-node nodemon  @types/node @types/express

import express, { Application, Request, Response, NextFunction } from 'express';

// const app: express.Application = express(); // <= Prepend with `express.` if  you don't import `express` as a module
const app: Application = express();

// Just an example function. not actually part of the app
const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response) => {
  // This will run whenever the route gets hit
  console.log(add(5, 3));
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server Running');
});
