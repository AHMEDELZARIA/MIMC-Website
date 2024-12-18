export default function BuyTicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4 bg-[#570326]">
      <div className="w-full px-4 md:px-8">{children}</div>
    </section>
  );
}
