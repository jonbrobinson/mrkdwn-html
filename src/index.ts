import express, { NextFunction, Request, Response } from 'express';
import { MarkdownRoutes } from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/markdown', MarkdownRoutes);

app.use(express.urlencoded({ extended: true }));
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
