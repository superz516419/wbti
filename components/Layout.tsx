interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center">
      <div
        className={`w-full max-w-md min-h-screen bg-slate-50 flex flex-col px-5 py-6 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
