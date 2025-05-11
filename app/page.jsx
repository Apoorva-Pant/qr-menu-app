import MenuSection from '../components/MenuSection';

export default function Home() {
  return (
    <>
      <section className="fixed top-16 left-0 w-full z-50 bg-base-200/80 backdrop-blur-md text-center py-4 shadow-md">
        <h1 className="text-3xl font-bold text-[#3b2f2f]">
          Welcome to Napster Coffee <span className="animate-bounce">☕</span><br />
          <span className="text-xl font-normal text-[#5c4438]">
            Pick your today's Brew:
          </span>
        </h1>
      </section>
      <div className="pt-40 px-4">
        <MenuSection />
      </div>
    </>
  );
}
