import ProgrammingSection from '@/components/sections/ProgrammingSection';

export const metadata = {
  title: 'Programming',
  description: 'My projects and tech stack — Pulse Watch (Apple Watch AI app), Cardano DApp development, AI Agents, and blockchain technology.',
  openGraph: {
    title: 'Programming | Khalil',
    description: 'My projects and tech stack — Pulse Watch (Apple Watch AI app), Cardano DApp development, AI Agents, and blockchain technology.',
  },
};

export default function ProgrammingPage() {
  return (
    <div className="pt-20">
      <ProgrammingSection />
    </div>
  );
}
