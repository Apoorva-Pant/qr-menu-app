import MenuSection from '../components/MenuSection';

export default function Home() {
  return (
    <div>
     <h1 className="text-3xl font-bold text-center my-4 text-[#3b2f2f]">
  Welcome to Napster Coffee <span className="animate-bounce">☕</span><br />
  <span className="text-xl font-normal text-[#5c4438]">
    Pick your favorite brew today!
  </span>
</h1>


      <MenuSection />
    </div>
  );
}