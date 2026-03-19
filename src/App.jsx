import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Layout Components
import Header from './Components/Header'
import Footer from './Components/Footer'

// Public Pages
import Home from './Components/Home'
import About from './Components/About'
import InvestorCharter from './Components/InvestorCharter'
import ComplaintBoard from './Components/ComplaintBoard'
import Services from './Components/Services'
import MITC from './Components/MITC'
import Pricing from './Components/Pricing'
import Payment from './Components/Payment'

// Compliance & Legal
import GrievanceRedressal from './Components/GrievanceRedressal'
import TermsConditions from './Components/TermsConditions'
import PrivacyPolicy from './Components/PrivacyPolicy'
import RefundPolicy from './Components/RefundPolicy'
import DisclaimerDisclosures from './Components/DisclaimerDisclosures'
import ServiceAgreement from './Components/ServiceAgreement'
import Commodities from './Components/Commodities'


function App() {


  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-200 selection:bg-indigo-500/30">

      <Header />

      <main className="grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/investor-charter" element={<InvestorCharter />} />
          <Route path="/complaint-board" element={<ComplaintBoard />} />
          <Route path="/mitc" element={<MITC />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer-disclosures" element={<DisclaimerDisclosures />} />
          <Route path="/service-agreement" element={<ServiceAgreement />} />
          <Route path="/commodities" element={<Commodities />} />

          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />


    </div>
  )
}

export default App;