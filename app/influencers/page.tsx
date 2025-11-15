import InfluencersSection from '@/components/sections/InfluencersSection';

export const metadata = {
  title: 'Influencers',
  description: 'People and works that profoundly influenced my thinking, values, and life choices - from tech innovators to philosophers and writers.',
  openGraph: {
    title: 'Influencers | Khalil',
    description: 'People and works that profoundly influenced my thinking, values, and life choices - from tech innovators to philosophers and writers.',
  },
};

export default function InfluencersPage() {
  return (
    <div className="pt-20">
      <InfluencersSection />
    </div>
  );
}

