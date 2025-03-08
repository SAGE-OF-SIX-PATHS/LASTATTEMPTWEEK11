import express from 'express';
import Note from '../models/Note';
import { NotFoundError } from '../utils/errors';

const router = express.Router();

// GET /api/notes - List all notes
router.get('/', async (req, res) => {
          const notes = await Note.find();
          res.json(notes);
});

// GET /api/notes/:id - Get a specific note
router.get('/:id', async (req, res) => {
          const note = await Note.findById(req.params.id);
          if (!note) throw new NotFoundError('Note not found');
          res.json(note);
});

// POST /api/notes - Create a new note
router.post('/', async (req, res) => {
          const { title, content } = req.body;
          const note = new Note({ title, content });
          await note.save();
          res.status(201).json(note);
});

// DELETE /api/notes/:id - Delete a note
router.delete('/:id', async (req, res) => {
          const note = await Note.findByIdAndDelete(req.params.id);
          if (!note) throw new NotFoundError('Note not found');
          res.status(204).send();
});

export default router;