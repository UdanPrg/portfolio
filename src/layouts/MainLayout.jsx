import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-row items-center justify-center h-[var(--main-height)] bg-gray-100">
        <Sidebar />
        <div className="flex-1 h-full bg-gray-100 overflow-y-auto">
          <div>
            {children}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
