import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { IoCall } from "react-icons/io5";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {/* Floating Contact Us Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <a
          href="tel:8299338931"
          className="w-16 h-16 bg-brand text-brand-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-brand/90 transition-colors"
        >
          <IoCall className="text-xl" />
        </a>
        <p className="hidden md:block text-brand-foreground bg-brand px-3 py-2 rounded-md shadow-lg">
          Call us
        </p>
      </div>

      <Footer />
    </div>
  );
}
