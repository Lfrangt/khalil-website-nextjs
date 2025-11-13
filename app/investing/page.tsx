import InvestingSection from '@/components/sections/InvestingSection';

export const metadata = {
  title: 'Investing',
  description: 'My value investing philosophy and portfolio - following Buffett\'s principles for long-term wealth building in Web3 and traditional markets.',
  openGraph: {
    title: 'Investing | Khalil',
    description: 'My value investing philosophy and portfolio - following Buffett\'s principles for long-term wealth building in Web3 and traditional markets.',
  },
};

export default function InvestingPage() {
  return (
    <div className="pt-20">
      <InvestingSection />
    </div>
  );
}
