// server/api/arguments.ts
import { Argument } from '~/models/Argument';
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  // Get the query parameters
  const query = getQuery(event);
  
  let returnArguments;

  // Check if 'discussionId' is provided in the query
  if (query.discussionId) {
    returnArguments = await Argument.find({ parentDiscussion: query.discussionId });
  } 
  // Check if 'parentArgumentId' is provided in the query
  else if (query.parentArgumentId) {
    returnArguments = await Argument.find({ parentArgument: query.parentArgumentId });
  } 
  // If no query is provided, return all arguments
  else {
    returnArguments = await Argument.find();
  }

  // Return the filtered arguments
  return returnArguments;
});
