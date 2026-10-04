import { TopNav } from "./TopNav";
import { BottomTabBar } from "./BottomTabBar";
import { PageTransition } from "./PageTransition";
import { Footer } from "./Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <TopNav />
      <PageTransition className="mx-auto w-full max-w-6xl flex-1 px-4 pt-8 pb-28 sm:px-6 md:pt-12 md:pb-20">
        {children}
      </PageTransition>
      <Footer />
      <BottomTabBar />
    </div>
  );
}
