import { mkdownToHtml } from '../utils/markdown.js';
import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { markdown, options } = req.body;
  res.json({ html: mkdownToHtml(markdown, options) });
});

export { router };
