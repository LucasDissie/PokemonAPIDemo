import { H3Event } from 'h3';
import { mockDiscussions } from '../mockData'; // Adjust the import path as necessary

export default defineEventHandler((event: H3Event) => {
  return mockDiscussions;
});