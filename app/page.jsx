import MenuSection from '../components/MenuSection';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">
  Welcome to Napster Coffee <span className="animate-bounce">☕</span><br />
  <span className="text-xl font-normal">Pick your favorite brew today!</span>
</h1>

      <MenuSection />
    </div>
  );
}