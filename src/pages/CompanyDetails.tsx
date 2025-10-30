import React, { useState } from 'react';
import { TopNavbar } from '../components/navigation/TopNavbar';
import { SecondaryNavbar } from '../components/navigation/SecondaryNavbar';
import { Sidebar } from '../components/navigation/Sidebar';
import { CompanySummaryCard } from '../components/company/CompanySummaryCard';
import { CompanyTabs } from '../components/company/CompanyTabs';
import { VendorInformation } from '../components/company/VendorInformation';

export default function CompanyDetails() {
  const [isReseller, setIsReseller] = useState(true);

  const handleToggleCompanyType = () => {
    setIsReseller(!isReseller);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNavbar />
      <SecondaryNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto p-8">
          <CompanySummaryCard isReseller={isReseller} onToggleCompanyType={handleToggleCompanyType} />
          <CompanyTabs activeTab="Vendor Information" />
          <VendorInformation isReseller={isReseller} />
        </div>
      </div>
    </div>
  );
} 