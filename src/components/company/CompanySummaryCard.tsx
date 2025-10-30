import React from 'react';

interface CompanySummaryCardProps {
  isReseller: boolean;
  onToggleCompanyType: () => void;
}

export const CompanySummaryCard: React.FC<CompanySummaryCardProps> = ({ isReseller, onToggleCompanyType }) => {
  return (
    <div className="bg-white rounded-t shadow mb-6 p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-20 h-20 border border-gray-300 rounded mr-4 bg-white text-gray-400 text-5xl">
            {/* Company Icon Placeholder */}
            <span>🏢</span>
          </div>
          <div>
            <div className="flex items-center text-lg font-semibold text-gray-700">
              Company
              <span className="ml-3 text-sm flex items-center text-green-700 font-medium">
                <span className="w-3 h-3 bg-green-400 border border-green-700 rounded-full mr-2"></span>
                Enabled
              </span>
              {isReseller ? (
                <span className="ml-3 px-3 py-1 text-sm font-bold bg-blue-100 text-blue-700 border border-blue-300 rounded-full flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  RESELLER
                </span>
              ) : (
                <span className="ml-3 px-3 py-1 text-sm font-bold bg-purple-100 text-purple-700 border border-purple-300 rounded-full flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  END CUSTOMER
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mt-1 mb-0">AppDirect Demonstration 5</h1>
          </div>
        </div>
        <div>
          <button
            onClick={onToggleCompanyType}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors text-sm font-medium shadow-md"
            title="Toggle between Reseller and End Customer views"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>DEMO: Switch to {isReseller ? 'End Customer' : 'Reseller'}</span>
          </button>
        </div>
      </div>
    <div className="flex mt-6 divide-x divide-gray-200 bg-gray-50 rounded-b shadow-inner">
      {[
        { label: 'Free Trials', value: 0 },
        { label: 'Expired Free Trials', value: 0 },
        { label: 'Purchased Products', value: 0 },
        { label: 'Suspended Products', value: 0 },
        { label: 'Unpaid Invoices', value: 0 },
        { label: 'Total Spent', value: '$0.00' },
      ].map((item, idx) => (
        <div key={item.label} className="flex-1 text-center py-4">
          <div className="text-xl font-bold text-gray-700">{item.value}</div>
          <div className="text-xs text-gray-500 mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  </div>
  );
}; 