import React from 'react';
import { ArrowUpCircle, ExternalLink, MessageSquare, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{story.title}</h2>
      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <ArrowUpCircle className="w-4 h-4 mr-1 text-orange-500" />
            <span>{story.points} points</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-1 text-blue-500" />
            <span>{story.num_comments} comments</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-green-500" />
            <span>{formatDistanceToNow(new Date(story.created_at))} ago</span>
          </div>
        </div>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          Read more
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="text-sm text-gray-500">
        by <span className="font-medium">{story.author}</span>
      </div>
    </div>
  );
};

export default StoryCard;