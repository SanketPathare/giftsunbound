

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import FlashSalesSlider from './components/FlashSalesSlider';
import Footer from './components/Footer';
import BrowseByCategory from './components/BrowseByCategory';
import GiftVouchersSlider from './components/GiftVouchersSlider';
import PromoBanner from './components/PromoBanner';
import AwardsAchievement from './components/AwardsAchievement';
import CustomerReviews from './components/CustomerReviews';
import Newsletter from './components/Newsletter';



export default function Home() {
  return (
    <div className="font-sans">
      {/* Slider */}
      <div className="container mx-auto mt-8">
        <Slider />
      </div>
      {/* Main Content Area */}
      <main className="container mx-auto my-8">
        <FlashSalesSlider/>
        <BrowseByCategory/>
        <GiftVouchersSlider/>
        <PromoBanner/>
        <AwardsAchievement/>
        <CustomerReviews/>
      </main>
      <Newsletter/>
  
    </div>
  );
}