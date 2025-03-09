import mongoose, { Document, Schema } from 'mongoose';

export interface INote extends Document {
          title: string;
          content: string;
          tags: string[];
          isPinned: boolean;
          createdAt: Date;
          updatedAt: Date;
          createdBy: mongoose.Types.ObjectId;
          isArchived: boolean;
}

const NoteSchema: Schema = new Schema(
          {
                    title: { type: String, required: true, trim: true, maxlength: 100 },
                    content: { type: String, required: true, trim: true },
                    tags: { type: [String], default: [] },
                    isPinned: { type: Boolean, default: false },
                    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
                    isArchived: { type: Boolean, default: false },
          },
          { timestamps: true }
);

const Note = mongoose.model<INote>('Note', NoteSchema);
export default Note;