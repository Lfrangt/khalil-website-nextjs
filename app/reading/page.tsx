import ReadingSection from '@/components/sections/ReadingSection';

export const metadata = {
  title: 'Reading',
  description: 'My curated reading list - from technical books to humanities classics, investment philosophy to literary works.',
  openGraph: {
    title: 'Reading | Khalil',
    description: 'My curated reading list - from technical books to humanities classics, investment philosophy to literary works.',
  },
};

export default function ReadingPage() {
  return (
    <div className="pt-20">
      <ReadingSection />
    </div>
  );
}
