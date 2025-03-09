import mongoose, { Document, Schema } from 'mongoose';

// Define the Note interface
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
                    title: {
                              type: String,
                              required: [true, 'Title is required'], 
                              trim: true, // Remove extra spaces
                              maxlength: [100, 'Title cannot exceed 100 characters'],
                    },
                    content: {
                              type: String,
                              required: [true, 'Content is required'], 
                              trim: true, 
                    },
                    tags: {
                              type: [String], 
                              default: [], 
                    },
                    isPinned: {
                              type: Boolean,
                              default: false, 
                    },
                    createdBy: {
                              type: mongoose.Schema.Types.ObjectId, 
                              ref: 'User',
                              required: [true, 'CreatedBy is required'], 
                    },
                    isArchived: {
                              type: Boolean,
                              default: false, 
                    },
          },
          { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Add text index for searching
NoteSchema.index({ title: 'text', content: 'text', tags: 'text' });

// Create the Note model
const Note = mongoose.model<INote>('Note', NoteSchema);

// Export the Note model
export default Note;