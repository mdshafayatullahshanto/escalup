// /src/data/company.js
// Central company contact info, working hours, and conversion links

export const companyData = {
  name: 'escalup',
  tagline: 'Offshore Engineering Services | CAD · MEP · BIM',
  subheadline: 'We bring people and engineering together to build things better.',
  description: 'escalup is your offshore engineering partner. We deliver Mechanical, Product and MEP design support for manufacturers, engineering firms and contractors worldwide, with clear communication and production-ready documentation.',
  
  location: {
    area: 'Uttara',
    city: 'Dhaka',
    postalCode: '1230',
    country: '',
    fullAddress: 'Sector 10, Uttara, Dhaka-1230',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.370503080775!2d90.3802778!3d23.8741366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b6de8f207%3A0x638eb6830d10167d!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1713500000000!5m2!1sen!2sbd'
  },
  
  contact: {
    email: 'contact.escalup@gmail.com',
    secondaryEmail: 'contact.escalup@gmail.com',
    phone: '+880 1700-000000',
    calendlyUrl: 'https://cal.com/escalup/book-a-call',
    bookingUrl: 'https://cal.com/escalup/book-a-call',
    linkedinUrl: 'https://www.linkedin.com/company/escalup',
    capabilityStatementPdf: '/escalup-capability-statement.pdf'
  },

  workingHours: {
    timezone: 'Asia/Dhaka (BST, UTC+6)',
    schedule: 'Monday – Friday, 09:00 – 18:00 BST',
    weekendSupport: 'Available on-demand for critical project releases',
    overlaps: [
      {
        city: 'London (Europe)',
        zone: 'GMT / BST',
        overlapHours: '4 – 5 Hours Morning Overlap',
        note: 'Review submissions in your morning; overnight drafting turnaround'
      },
      {
        city: 'Dubai (Middle East)',
        zone: 'GST (UTC+4)',
        overlapHours: '6 – 7 Hours Direct Alignment',
        note: 'Near synchronous business hours collaboration'
      },
      {
        city: 'Sydney (Asia-Pacific)',
        zone: 'AEST / AEDT',
        overlapHours: '5 – 6 Hours Shared Workday',
        note: 'Direct daytime standups and milestone reviews'
      },
      {
        city: 'New York (North America)',
        zone: 'EST / EDT',
        overlapHours: 'Dedicated Overnight Sprints',
        note: 'Submit requests at 5 PM EST, receive deliverables by 9 AM EST'
      }
    ]
  },

  trustBadges: [
    'NDA executed before kickoff',
    'Client owns 100% of IP & source CAD',
    'Guaranteed quote within 24 hours',
    'Time-zone overlap: International Regional Hubs',
    'ASME & ISO international drawing standards'
  ]
};
