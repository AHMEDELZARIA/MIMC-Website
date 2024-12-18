export default function ItineraryMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-[#570326]">
      <div className="w-full">{children}</div>
    </section>
  );
}
