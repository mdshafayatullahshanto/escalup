// /src/data/company.js
// Central company positioning, contact info, and operational details

export const companyData = {
  name: 'escalup',
  tagline: 'Offshore Engineering Services | Mechanical Design · BIM · MEP',
  subheadline: 'Scale Your Project Team with Dedicated Offshore Talent.',
  description: 'escalup is an offshore engineering services company. We provide Mechanical Design, BIM and MEP Design support to large international clients, including AI-driven and technology-focused companies, through an offshore model. Data security is a strict requirement for us. We handle project data in a Microsoft environment primarily and adapt to the client\'s software and environment when needed.',
  
  founder: {
    name: 'Md. Shafayat Ullah Shanto',
    formattedName: '***Md. Shafayat Ullah Shanto***',
    title: 'Founder & Lead Mechanical Engineer, escalup',
    bio: 'A mechanical engineer with a background in mechanical design, industrial product development, CAD modeling, engineering documentation, PLM and MEP engineering, including HVAC, fire protection and plumbing systems.'
  },

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
    calendlyUrl: 'https://cal.com/escalup/book-a-call?overlayCalendar=true',
    bookingUrl: 'https://cal.com/escalup/book-a-call?overlayCalendar=true',
    linkedinUrl: 'https://www.linkedin.com/company/escalup',
    capabilityStatementPdf: '/escalup-capability-statement.pdf'
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/escalup'
  },

  workingHours: {
    timezone: 'Asia/Dhaka (BST, UTC+6)',
    schedule: 'Monday – Friday, agreed with client at project start',
    note: 'Working hours and availability are agreed with you at project start.'
  },

  commitments: [
    'Work carried out under a mutual NDA',
    'Native parametric CAD files in client drawing format',
    'Client owns all project IP',
    'Data handled primarily in a Microsoft 365 environment',
    'Adaptable to client software, templates, and secure platforms'
  ]
};
