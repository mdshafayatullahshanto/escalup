// /src/data/services.js
// The 7 core engineering service categories for Escalup (strict order everywhere)

export const servicesData = [
  {
    id: 1,
    slug: 'mechanical-design-product-development',
    title: 'Mechanical Design & Product Development',
    shortDesc: 'Mechanical design principles, full lifecycle product development (NPI), systems kinematics, material selection, eco-design, and automation.',
    iconName: 'Cpu',
    tag: 'Service 01',
    standardsSummary: 'ISO 12100, ISO 286, ASME Y14.100',
    standardsDetail: 'ISO 12100 (risk assessment and risk reduction), ISO 286 (limits and fits), ISO 14040 (life cycle assessment for eco-design), ASME Y14.100 (engineering drawing practices)',
    intro: 'Escalup delivers mechanical design and product development support for international engineering teams and manufacturers. From early concept definition and kinematic mechanism modeling to full lifecycle product development, we apply established mechanical engineering principles to deliver reliable, production-ready designs.',
    items: [
      'Mechanical Design Principles & Applied Mechanics',
      'Product Design & Full Lifecycle Development (NPI)',
      'Systems, Kinematics, Linkages & Mechanisms',
      'Material Selection & Failure Mode Analysis',
      'Sustainability & Eco-Design in Product Development',
      'Automation and Customization'
    ],
    deliverables: [
      'Parametric 3D CAD parts and assemblies in client drawing format',
      'Kinematic mechanism simulations and motion curves',
      'Material selection and failure mode reports',
      'Detailed manufacturing drawings with applied standards',
      'Design verification and technical documentation'
    ],
    tools: ['SolidWorks', 'Siemens NX', 'Inventor', 'Fusion 360', 'Creo']
  },
  {
    id: 2,
    slug: 'cad-parametric-modeling-simulation',
    title: 'CAD, Parametric Modeling & Simulation',
    shortDesc: '3D modeling, parametric and surfacing design, prototyping mockups, reverse engineering, FEA numerical simulation, and Model-Based Definition.',
    iconName: 'Box',
    tag: 'Service 02',
    standardsSummary: 'ISO 10303 (STEP), ISO 16792, ASME V&V 10',
    standardsDetail: 'ISO 10303 / STEP (CAD data exchange), ISO 16792 and ASME Y14.41 (digital product definition data practices), ASME V&V 10 (verification and validation of computational solid mechanics)',
    intro: 'We provide parametric CAD modeling and numerical simulation support for technology-focused companies and equipment builders. Our models feature structured feature trees and adhere to digital product definition standards, ensuring seamless integration into client repositories.',
    items: [
      '3D Modeling, Parametric & Surfacing Design',
      'Mockup Design & Rapid Prototyping (3D Printing)',
      'Reverse Engineering & Scan-to-CAD',
      'FEA & Numerical Simulation (Stress, Structural)',
      'Model-Based Definition (MBD) & Digital Product Definition'
    ],
    deliverables: [
      'Native parametric 3D CAD models with editable feature trees',
      'Reverse-engineered solid models from 3D scan data',
      'FEA stress, deflection, and structural calculation summaries',
      'Model-Based Definition (MBD) 3D annotations',
      'Neutral exchange formats (STEP AP242, IGES, Parasolid)'
    ],
    tools: ['SolidWorks', 'Siemens NX', 'Inventor', 'Ansys Fluent', 'MATLAB & Simulink']
  },
  {
    id: 3,
    slug: 'dfma-production-engineering',
    title: 'Design for Manufacturing & Production Engineering',
    shortDesc: 'Manufacturing processes and machining constraints (CNC/CAM), DFMA, sheet metal fabrication, plastic injection molding, and production drawings.',
    iconName: 'Wrench',
    tag: 'Service 03',
    standardsSummary: 'ISO 2768, ISO 13920, ISO 20457, AWS A2.4',
    standardsDetail: 'ISO 2768 (general tolerances), ISO 13920 (welding general tolerances), ISO 20457 (plastic moulded parts tolerances), AWS A2.4 (welding symbols)',
    intro: 'Our production engineering team reviews designs against real-world manufacturing constraints before fabrication begins. We optimize parts for CNC machining, sheet metal forming, and plastic injection molding to prevent assembly interference and eliminate unnecessary production costs.',
    items: [
      'Manufacturing Processes & Machining Constraints (CNC/CAM)',
      'Design for Manufacturing & Assembly (DFMA)',
      'Sheet Metal & Structural Fabrication Design',
      'Plastic Injection Molding & Tooling DFM',
      'Detailed Drawings & BOM for Manufacturing Design'
    ],
    deliverables: [
      'DFMA review reports and geometry optimization recommendations',
      'Unfolded sheet metal flat patterns with tooling and bend specs',
      'Tooling and injection molding draft analysis reports',
      'Complete 2D manufacturing drawings with BOM',
      'Fabrication and weldment detail prints with standard weld symbols'
    ],
    tools: ['SolidWorks', 'Siemens NX', 'Inventor', 'Tekla', 'AutoCAD']
  },
  {
    id: 4,
    slug: 'engineering-standards-gdt-quality',
    title: 'Engineering Standards, GD&T & Quality',
    shortDesc: 'Geometric Dimensioning & Tolerancing (ASME Y14.5 / ISO 1101), tolerance stack-up analysis, regulatory standards, and drawing gate audits.',
    iconName: 'CheckCircle2',
    tag: 'Service 04',
    standardsSummary: 'ASME Y14.5, ISO 1101, ISO 5459',
    standardsDetail: 'ASME Y14.5, ISO 1101, ISO 5459 (datums), ISO 14405 (size tolerancing), ISO 8015 (GPS fundamentals)',
    intro: 'We apply ASME and ISO dimensioning standards to define precise functional relationships between mating components. Our engineers perform 1D and statistical tolerance stack-up analyses to ensure assembly fit and provide clear inspection criteria for suppliers.',
    items: [
      'Geometric Dimensioning & Tolerancing (ASME Y14.5 / ISO 1101)',
      'Tolerance Stack-Up Analysis (1D / Worst-Case / RSS)',
      'Design Standards & Regulatory Compliance',
      'Drawing Quality Verification & Design Gate Audits'
    ],
    deliverables: [
      'Production drawings compliant with ASME Y14.5 or ISO 1101',
      'Tolerance stack-up calculation sheets (worst-case and RSS)',
      'Drawing quality verification and compliance checklists',
      'Datum scheme definitions and functional gauge considerations',
      'Standardized drawing borders and title block configurations'
    ],
    tools: ['AutoCAD', 'SolidWorks', 'Inventor', 'Siemens NX']
  },
  {
    id: 5,
    slug: 'plm-digital-engineering-automation',
    title: 'PLM, Digital Engineering & Automation',
    shortDesc: 'Product data management, engineering change management (ECN/ECO/ECR), BOM architecture, CAD API automation, and software scripting.',
    iconName: 'Database',
    tag: 'Service 05',
    standardsSummary: 'ISO 10007, STEP AP242',
    standardsDetail: 'ISO 10007 (configuration management), ISO 10303-242 / STEP AP242 (product data exchange)',
    intro: 'Escalup organizes engineering data and automates repetitive modeling workflows. We configure multi-level BOM architectures, execute formal Engineering Change Orders (ECO/ECN), and write custom CAD API scripts to support consistent data governance.',
    items: [
      'PLM & Product Data Management',
      'Engineering Change Management (ECN / ECO / ECR)',
      'BOM Architecture & Variant Configuration',
      'CAD API Automation & Customization',
      'Software Scripting for Engineering'
    ],
    deliverables: [
      'Multi-level indented Engineering and Manufacturing BOMs',
      'Documented ECN, ECO, and ECR engineering change records',
      'PLM vault attribute mapping and part revision control records',
      'Custom CAD API macros and automation scripts',
      'Variant configuration matrices and data schemas'
    ],
    tools: ['Teamcenter', 'SAP', 'Autodesk Vault', 'SolidWorks PDM']
  },
  {
    id: 6,
    slug: 'project-management-offshore-support',
    title: 'Engineering Project Management & Offshore Support',
    shortDesc: 'Technical scope management, architecture review, risk assessment (DFMEA), Agile/Scrum project management, and offshore client communication.',
    iconName: 'Briefcase',
    tag: 'Service 06',
    standardsSummary: 'ISO 21502, ISO 31000, IEC 60812',
    standardsDetail: 'ISO 21502 (project management guidance), ISO 31000 (risk management), IEC 60812 and the AIAG & VDA FMEA Handbook (FMEA / DFMEA)',
    intro: 'We support international engineering leadership through dedicated technical project management and offshore engineering engagement. Our team participates in client standups, tracks technical deliverables through milestone gates, and performs root-cause analysis when issues arise.',
    items: [
      'Project Management & Technical Scope Management',
      'Architecture Review',
      'Engineering Risk Assessment & Mitigation (DFMEA)',
      'Agile / Scrum Project Management',
      'Cross-Functional Team Leadership & Mentorship',
      'Offshore Client Engagement & Technical Stakeholder Communication',
      'Analytical Problem-Solving & Root-Cause Analysis (RCA)'
    ],
    deliverables: [
      'Project scope baseline and milestone delivery schedules',
      'Design Failure Mode and Effects Analysis (DFMEA) matrices',
      'Root-cause analysis (RCA) investigation summaries',
      'Regular technical status updates and progress logs',
      'Technical architecture and engineering review documentation'
    ],
    tools: ['Microsoft Teams', 'Outlook', 'SharePoint', 'Jira']
  },
  {
    id: 7,
    slug: 'bim-mep-design-engineering',
    title: 'BIM & MEP Design Engineering',
    shortDesc: 'BIM modeling for MEP, HVAC system design, ventilation, fire-safety, plumbing and drainage, load calculations, duct and pipe design, and clash coordination.',
    iconName: 'Layers',
    tag: 'Service 07',
    standardsSummary: 'ISO 19650, ASHRAE, NFPA, IPC',
    standardsDetail: 'BIM and data: ISO 19650, ISO 16739 / IFC; HVAC: ASHRAE 62.1, ASHRAE 55, ASHRAE 90.1, NFPA 90A, IMC, SMACNA; Fire: NFPA 13, NFPA 14, NFPA 20, NFPA 72, NFPA 92, NFPA 101; Plumbing: IPC; Local codes: BNBC, RSC, PWD, JICA',
    intro: 'Our BIM and MEP engineering team delivers coordinated mechanical, plumbing, and fire-safety packages for commercial and industrial facilities. We perform rigorous load calculations, route ductwork and piping, and resolve multi-discipline spatial clashes in Revit and Navisworks prior to site installation.',
    items: [
      'Building Information Modeling (BIM) for MEP',
      'HVAC System Design',
      'Ventilation & Air Distribution Design',
      'Fire-Safety Design',
      'Plumbing and Drainage Design',
      'Load Calculation & Energy Analysis',
      'Duct & Pipe Design',
      'Tank & Pump Calculation',
      'Coordination & Clash Detection',
      'MEP Documentation'
    ],
    deliverables: [
      'Coordinated Revit MEP models (LOD 300 to 400)',
      'Navisworks multi-discipline clash detection reports',
      'Cooling and heating load calculation reports',
      'HVAC ductwork, piping layouts, and equipment schedules',
      'Fire sprinkler, standpipe layouts, and pump room details',
      'Plumbing riser diagrams, water supply, and drainage layouts',
      'Contractor shop drawings and pre-fabrication spool sheets'
    ],
    tools: ['Revit', 'AutoCAD', 'Navisworks Manage', 'Carrier HAP']
  }
];

// Summary table data for the Services page
export const standardsSummaryTable = [
  { service: 'Mechanical Design', keyStandards: 'ISO 12100, ISO 286, ASME Y14.100' },
  { service: 'CAD & Simulation', keyStandards: 'ISO 10303 (STEP), ISO 16792, ASME V&V 10' },
  { service: 'DFM', keyStandards: 'ISO 2768, ISO 13920, ISO 20457, AWS A2.4' },
  { service: 'GD&T & Quality', keyStandards: 'ASME Y14.5, ISO 1101, ISO 5459' },
  { service: 'PLM', keyStandards: 'ISO 10007, STEP AP242' },
  { service: 'Project Management', keyStandards: 'ISO 21502, ISO 31000, IEC 60812' },
  { service: 'BIM & MEP', keyStandards: 'ISO 19650, ASHRAE, NFPA, IPC' }
];

export const standardsDisclaimer = 'We apply the standards required by the project and the client. The governing standards and editions are confirmed at the Requirements & Scope stage.';
