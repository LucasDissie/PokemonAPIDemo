import mongoose, { Schema, Document } from 'mongoose';

interface IDiscussion extends Document {
  statement: string;
  explanation: string;
  createdBy: mongoose.Schema.Types.ObjectId;
  arguments: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
}

const DiscussionSchema: Schema = new Schema({
  statement: { type: String, required: true },
  explanation: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  arguments: [{ type: Schema.Types.ObjectId, ref: 'Argument' }],
  createdAt: { type: Date, default: Date.now }
});

export const Discussion = mongoose.model<IDiscussion>('Discussion', DiscussionSchema);
