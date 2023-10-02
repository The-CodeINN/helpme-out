import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className=' font-inter'>
      <Header />
      <section className='bg-[#F4F6F8] pt-[87px]'>
        {children}
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
