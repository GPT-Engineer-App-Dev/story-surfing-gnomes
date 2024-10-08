import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HackerNewsList from '../components/HackerNewsList';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Hacker News Top Stories</h1>
          <HackerNewsList />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Index;