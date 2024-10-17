import mongoose, { Schema, Document } from 'mongoose';

interface IArgument extends Document {
  text: string;
  agreesWithStatementVotes: number;
  disagreesWithStatementVotes: number;
  position: number; // Value between 0-100, initial position set by the user
  createdBy: mongoose.Schema.Types.ObjectId;
  parentDiscussion: mongoose.Schema.Types.ObjectId | null;
  parentArgument: mongoose.Schema.Types.ObjectId | null;
  replies: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
}

const ArgumentSchema: Schema = new Schema({
  text: { type: String, required: true },
  agreesWithStatementVotes: { type: Number, default: 0 },  // Tracks the number of upvotes for agreement
  disagreesWithStatementVotes: { type: Number, default: 0 }, // Tracks the number of downvotes for disagreement
  position: { type: Number, required: true, min: 0, max: 100 },  // Initial position on the agree/disagree spectrum (0 = fully disagree, 100 = fully agree)
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  parentDiscussion: { type: Schema.Types.ObjectId, ref: 'Discussion', default: null },
  parentArgument: { type: Schema.Types.ObjectId, ref: 'Argument', default: null },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Argument' }],
  createdAt: { type: Date, default: Date.now }
});

export const Argument = mongoose.model<IArgument>('Argument', ArgumentSchema);
