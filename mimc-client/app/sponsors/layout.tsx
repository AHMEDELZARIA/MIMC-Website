export default function BazaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 bg-[#570326]">
      <div className="w-full">{children}</div>
    </section>
  );
}
