import { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import Hero from '@/components/pages/Hero'
import ModuleOverview from '@/components/modules/ModuleOverview'
import ModuleFeatures from '@/components/modules/ModuleFeatures'
import ModuleIntegrations from '@/components/modules/ModuleIntegrations'
import ImplementationTimeline from '@/components/modules/ImplementationTimeline'
import ModuleReports from '@/components/modules/ModuleReports'
import CommonPitfalls from '@/components/modules/CommonPitfalls'
import ModulePricing from '@/components/modules/ModulePricing'
import ModuleFAQ from '@/components/modules/ModuleFAQ'
import DownloadableResources from '@/components/modules/DownloadableResources'
import CTASection from '@/components/modules/CTASection'

export const metadata: Metadata = {
  title: 'Odoo Inventory: Real-Time Stock, Putaway, and Replenishment',
  description: 'Master inventory management with Odoo Inventory. Real-time stock tracking, multi-warehouse management, automated replenishment, and advanced reporting for businesses of all sizes.',
  keywords: ['Odoo Inventory', 'inventory management', 'stock tracking', 'warehouse management', 'replenishment rules', 'barcode scanning'],
  openGraph: {
    title: 'Odoo Inventory: Real-Time Stock, Putaway, and Replenishment',
    description: 'Master inventory management with Odoo Inventory. Real-time stock tracking, multi-warehouse management, automated replenishment, and advanced reporting.',
    images: ['https://odoomanics.com/_assets/og-inventory.png'],
  },
}

const inventoryData = {
  name: 'Odoo Inventory',
  description: 'Real-time stock tracking, multi-warehouse management, and automated replenishment for businesses of all sizes.',
  icon: '📦',
  features: [
    {
      title: 'Multi-Warehouse Management',
      description: 'Manage multiple warehouses, locations, and storage zones with complete visibility across your entire supply chain.',
      benefits: ['Centralized inventory control', 'Location-based tracking', 'Transfer management between warehouses']
    },
    {
      title: 'Real-Time Stock Tracking',
      description: 'Always know your exact stock levels with real-time updates across all sales channels and locations.',
      benefits: ['Live inventory updates', 'Automated stock adjustments', 'Cycle counting support']
    },
    {
      title: 'Advanced Routing Rules',
      description: 'Define sophisticated putaway and picking rules to optimize warehouse operations and reduce handling time.',
      benefits: ['Automated putaway strategies', 'Optimized picking routes', 'Location-based rules']
    },
    {
      title: 'Automated Replenishment',
      description: 'Set up intelligent reordering rules based on demand forecasting, lead times, and safety stock levels.',
      benefits: ['Demand-based reordering', 'Safety stock management', 'Lead time optimization']
    },
    {
      title: 'Barcode & QR Code Support',
      description: 'Streamline operations with mobile barcode scanning for receiving, picking, and inventory counting.',
      benefits: ['Mobile barcode scanning', 'QR code integration', 'Handheld device support']
    },
    {
      title: 'Lot & Serial Number Tracking',
      description: 'Track individual items by lot or serial number for complete traceability and compliance requirements.',
      benefits: ['Full traceability', 'Compliance support', 'Recall management']
    },
    {
      title: 'Demand Forecasting',
      description: 'Predict future demand using historical data and statistical models to optimize inventory levels.',
      benefits: ['Statistical forecasting', 'Trend analysis', 'Seasonal adjustments']
    },
    {
      title: 'Inventory Valuation',
      description: 'Multiple valuation methods including FIFO, LIFO, and weighted average with automatic cost updates.',
      benefits: ['Multiple valuation methods', 'Automatic cost calculations', 'Financial integration']
    }
  ],
  integrations: [
    { name: 'Sales', description: 'Automatic stock reservations and delivery scheduling' },
    { name: 'Purchase', description: 'Receive goods and update stock levels automatically' },
    { name: 'Manufacturing', description: 'Component consumption and finished goods production' },
    { name: 'eCommerce', description: 'Real-time stock visibility on your online store' },
    { name: 'POS', description: 'Synchronized inventory across retail locations' },
    { name: 'Accounting', description: 'Automatic inventory valuation and cost of goods sold' }
  ],
  faq: [
    {
      question: 'How does Odoo Inventory handle multi-warehouse scenarios?',
      answer: 'Odoo Inventory supports unlimited warehouses with individual locations, storage zones, and transfer management. You can set up routing rules for automatic putaway and track inventory across all locations in real-time.'
    },
    {
      question: 'Can I track lot and serial numbers for compliance?',
      answer: 'Yes, Odoo Inventory provides full lot and serial number tracking with complete traceability from supplier to customer. This is essential for industries like food, pharmaceuticals, and electronics that require compliance tracking.'
    },
    {
      question: 'How does automated replenishment work?',
      answer: 'Odoo uses demand forecasting algorithms combined with your configured safety stock levels and lead times to automatically generate purchase orders or manufacturing orders when inventory falls below reorder points.'
    },
    {
      question: 'What barcode scanning options are available?',
      answer: 'Odoo supports mobile barcode scanning through the mobile app, handheld devices, and integration with dedicated barcode scanners. You can scan during receiving, picking, and cycle counting operations.'
    },
    {
      question: 'How does inventory valuation work?',
      answer: 'Odoo supports multiple valuation methods including FIFO, LIFO, and weighted average. The system automatically calculates costs based on your chosen method and integrates with accounting for real-time financial reporting.'
    },
    {
      question: 'Can I integrate with external systems?',
      answer: 'Yes, Odoo Inventory integrates with external systems through APIs, webhooks, and pre-built connectors for popular eCommerce platforms, ERP systems, and warehouse management systems.'
    }
  ]
}

export default function InventoryPage() {
  return (
    <>
      <StructuredData type="organization" data={{}} />
      <StructuredData type="service" data={{ name: 'Odoo Inventory Implementation', description: 'Expert Odoo Inventory implementation with multi-warehouse management, automated replenishment, and real-time tracking.' }} />
      
      <Hero 
        title="Odoo Inventory: Real-Time Stock, Putaway, and Replenishment"
        subtitle="Master inventory management with advanced tracking and automation"
        description="Transform your inventory operations with Odoo's comprehensive inventory management system. From multi-warehouse tracking to automated replenishment, get complete control over your stock levels and warehouse operations."
        showCTA={false}
      />
      
      <ModuleOverview 
        name={inventoryData.name}
        description={inventoryData.description}
        icon={inventoryData.icon}
      />
      
      <ModuleFeatures features={inventoryData.features} />
      
      <ModuleIntegrations integrations={inventoryData.integrations} />
      
      <ImplementationTimeline module="Inventory" />
      
      <ModuleReports module="Inventory" />
      
      <CommonPitfalls module="Inventory" />
      
      <ModulePricing module="Inventory" />
      
      <ModuleFAQ faq={inventoryData.faq} />
      
      <DownloadableResources module="Inventory" />
      
      <CTASection module="Inventory" />
    </>
  )
}
