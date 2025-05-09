import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full dark:bg-[#1F1F1F]">       
    {/* 避免切換顏色的衝突 */}
      <Navbar />
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;