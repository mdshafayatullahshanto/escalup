// /src/data/faq.js
// Frequently Asked Questions for Escalup (exact 7 in order)

export const faqData = [
  {
    id: 1,
    question: 'Late design changes keep delaying our product releases. How do you reduce this?',
    answer: 'Late changes usually come from requirements that were not fully defined at the start. We begin with a requirements and scope review. We then check materials, loads, failure modes and mechanism behavior during concept and calculation stages, before detailed design starts. Issues are found earlier, when changes are cheaper to make.'
  },
  {
    id: 2,
    question: 'We have old parts with no CAD data, or models from different software. Can you work with them?',
    answer: 'Yes. We rebuild models from legacy drawings, physical parts, or 3D scan data. We also work with neutral formats such as STEP and IGES. Rebuilt models are fully parametric, so your team can edit them. They are delivered in your required software and drawing format.'
  },
  {
    id: 3,
    question: 'Our designs look correct in CAD but are costly or difficult to manufacture. How do you prevent this?',
    answer: 'We review every design for manufacturing and assembly before release. This covers machining limits, sheet metal bend rules, injection molding requirements, and assembly sequence. Where a feature is expensive or not practical to make, we suggest a change and explain the reason.'
  },
  {
    id: 4,
    question: 'Our parts do not fit at assembly, or suppliers question our drawings. What causes this and how do you help?',
    answer: 'These problems usually come from missing or incorrect tolerances, or unclear GD&T. We apply ASME Y14.5 or ISO 1101 as required and run tolerance stack-up analysis (worst-case and RSS) on critical fits. Every drawing is checked before release, so the manufacturer can read it without questions.'
  },
  {
    id: 5,
    question: 'Wrong revisions and BOM mismatches reach production. How do you handle product data?',
    answer: 'We structure the BOM, manage variants, and record every change through ECN, ECO and ECR documents. Revisions are version-controlled. We can work inside your PLM system, such as Teamcenter or Autodesk Vault, or follow your data rules. Repetitive CAD tasks can be automated with scripts or CAD APIs.'
  },
  {
    id: 6,
    question: 'How do you protect our data and manage communication when the team is in a different country?',
    answer: 'Each project has one point of contact. Scope, deliverables and file formats are agreed in writing before work starts, and any scope change is agreed with you before we begin. Project data is handled in a Microsoft 365 environment with multi-factor authentication and project-level access, under a mutual NDA signed before any data is shared. Communication runs through Microsoft Teams and Outlook, or your preferred platform. If your project needs a dedicated software or a secure environment, we work inside it and follow your security policies.'
  },
  {
    id: 7,
    question: 'Clashes between HVAC, fire, plumbing and structure are found only on site. How do you avoid this?',
    answer: 'We coordinate all MEP systems in a shared BIM model and run clash detection before drawings are issued. Designs are based on load calculations and follow the applicable codes: ASHRAE and NFPA for HVAC, NFPA, BNBC, RSC, PWD and JICA for fire, and BNBC and IPC for plumbing. The clash report is delivered with the drawings.'
  }
];
