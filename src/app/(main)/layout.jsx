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
          className="w-16 h-16 bg-[#ff004a] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-rose-300 transition-colors"
        >
          <IoCall className="text-xl" />
        </a>
        <p className="hidden md:block text-white bg-[#ff004a] px-3 py-2 rounded-md shadow-lg">
          Call us
        </p>
      </div>

      <Footer />
    </div>
  );
}
