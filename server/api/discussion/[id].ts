import { H3Event } from 'h3';
import { mockDiscussions } from '../../mockData'; // Adjust the import path as necessary
import type { Discussion } from '~/models/Discussion';


export type DiscussionResponse = {
    success: boolean;
    data?: typeof Discussion;
    error?: string;
  };

export default defineEventHandler((event: H3Event) => {
    const id = getRouterParam(event, 'id');
    if (!id) {
        return {
            success: false,
            error: 'No id provided',
        };
    }
    else {
        return {
            success: true,
            data: mockDiscussions.find(discussion => discussion._id.toString() === id),
        };
    }
});