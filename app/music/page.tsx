import MusicSection from '@/components/sections/MusicSection';

export const metadata = {
  title: 'Music',
  description: 'Explore my music taste - from Khalil Fong\'s R&B to Cory Wong\'s Funk, Deserts Chang\'s folk, and Stevie Wonder\'s timeless soul music.',
  openGraph: {
    title: 'Music | Khalil',
    description: 'Explore my music taste - from Khalil Fong\'s R&B to Cory Wong\'s Funk, Deserts Chang\'s folk, and Stevie Wonder\'s timeless soul music.',
  },
};

export default function MusicPage() {
  return (
    <div className="pt-20">
      <MusicSection />
    </div>
  );
}
