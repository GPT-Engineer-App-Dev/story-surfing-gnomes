import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryCard from './StoryCard';
import StoryCardSkeleton from './StoryCardSkeleton';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const STORIES_PER_PAGE = 20;

const fetchTopStories = async (page) => {
  const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=${STORIES_PER_PAGE}&page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const HackerNewsList = ({ searchTerm }) => {
  const [page, setPage] = useState(0);

  const { data, isLoading, error, isPreviousData } = useQuery({
    queryKey: ['topStories', page],
    queryFn: () => fetchTopStories(page),
    keepPreviousData: true,
  });

  if (error) return <div className="text-red-500 text-center">Error: {error.message}</div>;

  const filteredStories = data?.hits.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div>
      <div className="space-y-4 mb-8">
        {isLoading
          ? Array(STORIES_PER_PAGE).fill().map((_, index) => <StoryCardSkeleton key={index} />)
          : filteredStories.map(story => <StoryCard key={story.objectID} story={story} />)
        }
      </div>
      <div className="flex justify-between items-center">
        <Button
          onClick={() => setPage(old => Math.max(0, old - 1))}
          disabled={page === 0}
          variant="outline"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span>Page {page + 1}</span>
        <Button
          onClick={() => {
            if (!isPreviousData && data.hits.length === STORIES_PER_PAGE) {
              setPage(old => old + 1);
            }
          }}
          disabled={isPreviousData || data?.hits.length < STORIES_PER_PAGE}
          variant="outline"
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HackerNewsList;