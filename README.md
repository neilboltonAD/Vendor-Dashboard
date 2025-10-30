# Vendor Dashboard

A comprehensive React application providing a unified management interface for **both Microsoft resellers and end-customers**. Built with React, TypeScript, and Tailwind CSS, this dashboard seamlessly integrates Microsoft Partner Center capabilities for complete vendor management.

## 🎯 Key Feature: Unified View

**Toggle between Reseller and End Customer views** with a single click! The dashboard dynamically adapts to show the appropriate features and data for each company type.

## 🔗 Features

### For Resellers (Indirect CSP Partners):
- **Reseller Onboarding System**
  - Configure MPN ID (Microsoft Partner Network ID) with validation
  - Send partnership invitations to establish CSP relationships
  - Email templates and partnership request links
  - Real-time validation and loading states

- **Partner Centre Insights Dashboard**
  - Overview metrics: Total Seats, Assigned Seats, Active Users, Monthly Revenue
  - Per-customer analytics with deployment and usage tracking
  - Subscription details with revenue breakdown
  - Automated recommendations based on utilization patterns

- **Azure Cost Management**
  - Real-time Azure spending monitoring per customer
  - Daily cost tracking with monthly projections
  - Cost threshold alerts (Under Budget, Near Threshold, Over Budget)
  - Visual budget utilization indicators
  - Per-customer Azure Plan management

- **GDAP Relationships Management**
  - Manage Granular Delegated Admin Privileges for end-customers
  - View and create GDAP relationships
  - Role-based access control
  - Auto-renewal settings

- **Authorization Status Tracking**
  - CSP compliance monitoring
  - Security requirements tracking
  - Detailed warnings for unauthorized resellers

### For End Customers:
- **Customer Tenant Management**
  - Microsoft 365 tenant information and configuration
  - Admin user management (Global and Billing admins)
  - Microsoft Customer Agreement status
  - Tenant domain details and UUID

- **GDAP Relationships**
  - View delegated admin privileges granted to partners
  - Manage relationship permissions
  - Track relationship expiration and auto-renewal

- **Special Qualifications**
  - Track special program eligibility
  - Request new qualifications
  - View qualification status

- **Azure Settings**
  - Azure Reservations permissions
  - Cost Management configuration
  - Azure Management Permissions

- **Deployment and Usage Analytics**
  - License entitlements and utilization
  - Active user metrics (28-day rolling)
  - Deployment percentage tracking
  - Usage analytics with recommendations

### Universal Features (Both Views):
- **Vendor Selection**: Microsoft, Adobe, and Google integrations
- **Modern UI Components**: Built with React 18 and TypeScript
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Interactive Elements**: Toggles, modals, collapsible sections
- **Demo Toggles**: Easy switching between states for demonstrations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/neilboltonAD/Vendor-Dashboard.git
cd Vendor-Dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

### Available Scripts

- `npm start`: Runs the app in development mode on port 3002
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/
│   ├── company/           # Company-specific components
│   │   ├── CompanySummaryCard.tsx      # Company header with reseller/customer toggle
│   │   ├── CompanyTabs.tsx             # Tab navigation
│   │   ├── VendorInformation.tsx       # Vendor selector
│   │   ├── MicrosoftSection.tsx        # Main Microsoft integration (2800+ lines)
│   │   ├── CompanyDetailsAdobe.tsx     # Adobe integration
│   │   └── ...
│   ├── form/              # Form components (Button, Toggle, RadioButton)
│   ├── layout/            # Layout components (Card, Section, ExpandableSection)
│   ├── navigation/        # Navigation components (TopNavbar, SecondaryNavbar, Sidebar)
│   ├── typography/        # Typography components (Heading, Text)
│   └── misc/              # Miscellaneous components (Avatar, Modal, HelpTooltip)
├── pages/                 # Page components
│   └── CompanyDetails.tsx # Main page with state management
├── App.tsx               # Main App component
├── index.tsx             # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **Mantine UI**: Component library for notifications and UI elements
- **Lucide React**: Beautiful icon library
- **Create React App**: Zero-configuration build tool

## 🔧 Key Components

### State Management
The app uses React's built-in state management with `useState` and `useEffect`. The main state for company type (reseller vs end customer) is managed in `CompanyDetails.tsx` and passed down as props.

### Company Type Toggle
Located in `CompanySummaryCard.tsx`, this prominent toggle button allows switching between:
- **Reseller View**: Shows MPN ID, Partner Centre Insights, Azure Cost Management, GDAP for customers
- **End Customer View**: Shows tenant information, deployment analytics, Azure settings, own GDAP relationships

### Microsoft Section
The largest component (`MicrosoftSection.tsx` - 2800+ lines) handles all Microsoft-specific functionality and dynamically adapts based on the `isResellerCompany` prop.

## 📊 Data Sources

### Microsoft Partner Center Integration
- Partner Center Insights API for usage analytics
- Azure Cost Management API for spend tracking
- GDAP API for relationship management
- Partner Center security status

*Note: Current implementation uses simulated data for demonstration purposes.*

## 🎯 Demo Features

### Toggle Controls
1. **Company Type Toggle** (CompanySummaryCard): Switch between Reseller and End Customer
2. **Configuration Status Toggle** (MicrosoftSection): Switch between onboarding and configured states
3. **Authorization Status Toggle** (MicrosoftSection): Toggle CSP authorization for demo

### Sample Data
- 3 end-customers with varying deployment and usage metrics
- Azure Plans with different cost scenarios (under, near, over budget)
- Multiple GDAP relationships
- Special qualifications and compliance statuses

## 🔐 Security & Compliance

- Tracks Microsoft Partner Center security requirements
- Monitors CSP authorization status
- GDAP (Granular Delegated Admin Privileges) management
- Multi-Factor Authentication (MFA) compliance tracking

## 🌐 Vendor Integrations

- **Microsoft**: Full Partner Center integration (primary)
- **Adobe**: Basic integration support
- **Google**: Placeholder for Google Workspace integration

## 📖 Documentation References

- [Microsoft Partner Center Documentation](https://learn.microsoft.com/en-us/partner-center/)
- [Partner Center Insights API](https://learn.microsoft.com/en-us/partner-center/develop/partner-center-analytics-resources)
- [Azure Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/)
- [GDAP Overview](https://learn.microsoft.com/en-us/partner-center/gdap-introduction)
- [CSP Security Requirements](https://learn.microsoft.com/en-us/partner-center/announcements/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Microsoft Partner Center API for real-time insights
- Azure Cost Management API for spend tracking
- Icons from [Lucide React](https://lucide.dev)
- UI Components from [Mantine UI](https://mantine.dev)
- Styling with [Tailwind CSS](https://tailwindcss.com)

## 🏗️ Project History

This project merges functionality from two separate dashboards:
- **Reseller Dashboard**: For Microsoft indirect CSP resellers
- **End Customer Dashboard**: For Microsoft 365 end customers

Both views are now unified into a single, cohesive interface with seamless toggling between company types.

---

**Built with ❤️ for Microsoft Cloud Solution Provider (CSP) partners and their customers**
