interface SiteLayoutProps {
    children: React.ReactNode;
  }
  
  export default async function SiteLayout({ children }: SiteLayoutProps) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {children}
      </div>
    );
  }