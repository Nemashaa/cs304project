import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Baseball from "./pages/Baseball";
import EquipmentBooking from "./pages/EquipmentBooking";
import Batminton from "./pages/Batminton";
import DailyEvents from "./pages/DailyEvents";
import Facilities from "./pages/Facilities";
import Equipments from "./pages/Equipments";
import PaymentReceipt from "./pages/PaymentReceipt";
import Payment from "./pages/Payment";
import LOCKERS from "./pages/LOCKERS";
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/baseball":
        title = "";
        metaDescription = "";
        break;
      case "/equipmentbooking":
        title = "";
        metaDescription = "";
        break;
      case "/batminton":
        title = "";
        metaDescription = "";
        break;
      case "/dailyevents":
        title = "";
        metaDescription = "";
        break;
      case "/facilities":
        title = "";
        metaDescription = "";
        break;
      case "/equipments":
        title = "";
        metaDescription = "";
        break;
      case "/payment-receipt":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/lockers":
        title = "";
        metaDescription = "";
        break;
      case "/registrationform":
        title = "";
        metaDescription = "";
        break;
      case "/login-form":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/baseball" element={<Baseball />} />
      <Route path="/equipmentbooking" element={<EquipmentBooking />} />
      <Route path="/batminton" element={<Batminton />} />
      <Route path="/dailyevents" element={<DailyEvents />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/equipments" element={<Equipments />} />
      <Route path="/payment-receipt" element={<PaymentReceipt />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/lockers" element={<LOCKERS />} />
      <Route path="/registrationform" element={<RegistrationForm />} />
      <Route path="/login-form" element={<LoginForm />} />
      <Route path="/" element={<EventShedule />} />
    </Routes>
  );
}
export default App;
