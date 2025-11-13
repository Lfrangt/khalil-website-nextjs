import ProgrammingSection from '@/components/sections/ProgrammingSection';

export const metadata = {
  title: 'Programming',
  description: 'My Cardano DApp development projects and tech stack - Plutus smart contracts, Web3 frontend integration, and blockchain technology.',
  openGraph: {
    title: 'Programming | Khalil',
    description: 'My Cardano DApp development projects and tech stack - Plutus smart contracts, Web3 frontend integration, and blockchain technology.',
  },
};

export default function ProgrammingPage() {
  return (
    <div className="pt-20">
      <ProgrammingSection />
    </div>
  );
}
