export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        min-h-[100dvh]
        w-full
        flex
        items-center
        justify-center
        bg-background
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}