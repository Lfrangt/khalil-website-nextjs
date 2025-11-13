import MoviesSection from '@/components/sections/MoviesSection';

export const metadata = {
  title: 'Movies',
  description: 'My favorite films that have deeply influenced me - from the romantic dialogues in Before Trilogy to the dreams in La La Land.',
  openGraph: {
    title: 'Movies | Khalil',
    description: 'My favorite films that have deeply influenced me - from the romantic dialogues in Before Trilogy to the dreams in La La Land.',
  },
};

export default function MoviesPage() {
  return (
    <div className="pt-20">
      <MoviesSection />
    </div>
  );
}
