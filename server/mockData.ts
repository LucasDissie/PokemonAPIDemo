// mockData.ts
import mongoose from 'mongoose';

export const mockDiscussions = [
  {
    _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId
    statement: "The Future of Renewable Energy",
    explanation: "Should we invest more in renewable energy?",
    createdBy: new mongoose.Types.ObjectId(), // Mock user ID, replace with actual user ID as needed
    arguments: [], // This can be filled later with argument IDs
    createdAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    statement: "Pros and Cons of Electric Vehicles",
    explanation: "Are electric vehicles the future of transportation?",
    createdBy: new mongoose.Types.ObjectId(),
    arguments: [],
    createdAt: new Date(),
  },
];

// Example mock arguments
export const mockArguments = [
  {
    _id: new mongoose.Types.ObjectId(),
    text: "I think we should invest more in renewable energy.",
    agreesWithStatementVotes: 5,
    disagreesWithStatementVotes: 1,
    position: 80,
    createdBy: new mongoose.Types.ObjectId(), // Mock user ID
    parentDiscussion: mockDiscussions[0]._id, // Link to the first discussion
  },
  {
    _id: new mongoose.Types.ObjectId(),
    text: "Investing in renewable energy is not the best approach right now.",
    agreesWithStatementVotes: 2,
    disagreesWithStatementVotes: 7,
    position: 20,
    createdBy: new mongoose.Types.ObjectId(), // Mock user ID
    parentDiscussion: mockDiscussions[0]._id, // Link to the first discussion
  },
  {
    _id: new mongoose.Types.ObjectId(),
    text: "Electric vehicles are essential for reducing pollution.",
    agreesWithStatementVotes: 10,
    disagreesWithStatementVotes: 0,
    position: 90,
    createdBy: new mongoose.Types.ObjectId(), // Mock user ID
    parentDiscussion: mockDiscussions[1]._id, // Link to the second discussion
  },
];
