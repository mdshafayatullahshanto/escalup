// /src/data/services.js
// Complete data for the 7 engineering service categories

export const servicesData = [
  {
    id: 1,
    slug: 'mechanical-design-product-development',
    title: 'Mechanical Design & Product Development',
    shortDesc: 'End-to-end mechanical engineering from initial concept and kinematics to 3D parametric CAD and functional prototypes.',
    iconName: 'Cpu',
    tag: 'Core Mechanical',
    intro: 'We partner with manufacturers, OEMs, and product innovators to translate mechanical concepts into production-ready physical hardware. Whether developing new products from scratch (NPI) or modernizing existing machinery, our team applies rigorous mechanical engineering principles to ensure functionality, structural integrity, and commercial viability.',
    items: [
      'Mechanical Design & Applied Mechanics',
      'Product Design & Development (NPI)',
      '3D CAD Modeling & Parametric Design',
      'Mechanical Systems & Mechanism Design',
      'Kinematics & Linkage Design',
      'Reverse Engineering & Scan-to-CAD',
      'Product Concept Development & Optimization'
    ],
    deliverables: [
      'Fully parametric 3D CAD assemblies (SolidWorks, NX, Inventor, STEP)',
      'Motion simulation files & kinematics curves',
      'Concept sketches & 3D visualization renders',
      'Reverse-engineered CAD solid models from point clouds/scans',
      'Detailed mechanical design reports & specifications'
    ],
    tools: ['SolidWorks', 'Siemens NX', 'Autodesk Inventor', 'Fusion 360', 'AutoCAD'],
    typicalTurnaround: '3 - 10 business days for components, milestone schedules for assemblies',
    bestFor: 'Equipment manufacturers, consumer product companies, industrial machinery builders'
  },
  {
    id: 2,
    slug: 'manufacturing-engineering-dfma',
    title: 'Manufacturing Engineering & DFMA',
    shortDesc: 'Design for Manufacturing and Assembly optimization across sheet metal, CNC machining, injection molding, and tooling.',
    iconName: 'Wrench',
    tag: 'Production Ready',
    intro: 'Engineering drawings mean little if parts cannot be produced efficiently. We apply rigorous Design for Manufacturing & Assembly (DFMA) guidelines to strip unnecessary machining cost, simplify fastener counts, prevent assembly errors, and ensure tooling feasibility before steel is cut.',
    items: [
      'Design for Manufacturing & Assembly (DFMA)',
      'CNC Machining & CAM Design',
      'Sheet Metal & Structural Fabrication Design',
      'Plastic Injection Molding & Tooling Design',
      'Manufacturing Process Selection & Optimization',
      'Prototype Development & 3D Printing',
      'Production-Ready Design & Assembly Documentation'
    ],
    deliverables: [
      'DFMA review reports with cost & assembly reduction metrics',
      'Flat patterns with bend tables & K-factors for sheet metal',
      'Draft angle and parting line analyses for injection molded parts',
      'Tooling and fixture designs (jigs & fixtures)',
      'Exploded assembly instructions & shop floor work instructions'
    ],
    tools: ['SolidWorks Sheet Metal & Plastics', 'Siemens NX CAM', 'Inventor CAM', 'Fusion 360'],
    typicalTurnaround: '2 - 5 business days per design iteration / review package',
    bestFor: 'Contract manufacturers, fabrication shops, hardware startups entering production'
  },
  {
    id: 3,
    slug: 'cad-modeling-simulation-validation',
    title: 'CAD Modeling, Simulation & Design Validation',
    shortDesc: 'Rigorous structural FEA, stress, thermal, motion simulation, and accurate 2D engineering drafting.',
    iconName: 'Activity',
    tag: 'Validation & FEA',
    intro: 'Eliminate costly physical prototyping failures before production. escalup provides comprehensive Finite Element Analysis (FEA), stress analysis, mechanism motion simulation, and engineering validation to guarantee your designs perform reliably under real-world static, dynamic, and thermal loads.',
    items: [
      '3D Parametric & Surface Modeling',
      '2D Engineering Drawings',
      'Finite Element Analysis (FEA)',
      'Structural & Stress Analysis',
      'Motion & Mechanism Simulation',
      'Engineering Design Verification & Validation',
      'Material Selection & Failure Analysis'
    ],
    deliverables: [
      'Complete FEA simulation reports with safety factors (von Mises, deflection)',
      'Thermal gradient & heat transfer simulation summaries',
      'Dynamic motion trajectory & load reaction charts',
      'Detailed 2D drawings according to ISO/ASME Y14 standards',
      'Material recommendation matrices with strength-to-weight tradeoffs'
    ],
    tools: ['Ansys Mechanical', 'SolidWorks Simulation', 'Inventor Nastran', 'MATLAB'],
    typicalTurnaround: '3 - 7 business days depending on meshing complexity & boundary conditions',
    bestFor: 'Structural engineers, heavy machinery OEMs, aerospace & automotive tier-suppliers'
  },
  {
    id: 4,
    slug: 'engineering-standards-gdt-quality',
    title: 'Engineering Standards, GD&T & Quality Assurance',
    shortDesc: 'ASME Y14.5 / ISO 1101 GD&T application, 1D/2D tolerance stack-up analysis, and drawing verification audits.',
    iconName: 'CheckCircle2',
    tag: 'Precision Standards',
    intro: 'Loose tolerances cause assemblies to jam; overly tight tolerances inflate fabrication costs by 300%. escalup provides professional Geometric Dimensioning & Tolerancing (GD&T) to communicate functional requirements clearly between design engineering and quality inspection.',
    items: [
      'Geometric Dimensioning & Tolerancing (GD&T)',
      'Tolerance Stack-Up Analysis',
      'Engineering Drawing Review & Verification',
      'International Engineering Standards Compliance',
      'Design Quality Review & Design Gate Audits',
      'Material Specifications & Engineering Documentation',
      'Design for Reliability & Quality Improvement'
    ],
    deliverables: [
      'ASME Y14.5-2018 / ISO 1101 compliant 2D manufacturing drawings',
      'Worst-case & Statistical (RSS) tolerance stack-up calculation sheets',
      'Engineering drawing redline audits & compliance reports',
      'Datum scheme definition & CMM inspection plan recommendations',
      'Standardized title blocks & drawing revision control sheets'
    ],
    tools: ['AutoCAD', 'SolidWorks Drafting', 'Inventor Detailing', 'Excel Tolerance Worksheets'],
    typicalTurnaround: '1 - 3 business days for drawing sets, 48h drawing audits',
    bestFor: 'Precision engineering firms, defense contractors, medical device developers'
  },
  {
    id: 5,
    slug: 'mep-design-bim-coordination',
    title: 'MEP Design & BIM Coordination',
    shortDesc: 'Complete HVAC, plumbing, drainage, fire protection engineering, and clash-resolved BIM Revit models (LOD 200 - 400).',
    iconName: 'Layers',
    tag: 'Built Environment',
    intro: 'We deliver coordinated mechanical, electrical, plumbing, and fire safety design packages for commercial buildings, industrial facilities, and residential complexes. Our engineers calculate accurate loads, route systems logically, and coordinate everything in Revit BIM to detect and resolve spatial clashes before construction begins.',
    items: [
      'HVAC System Design',
      'Cooling Load Calculation & Energy Analysis',
      'Ventilation & Air Distribution Design',
      'Duct & Pipe Design',
      'VRF, Chiller, AHU & FCU System Design',
      'Fire Detection, Alarm & Protection System Design',
      'Plumbing & Water Supply Design',
      'Drainage System Design',
      'Tank & Pump Calculation',
      'MEP BIM Modeling & Coordination',
      'Clash Detection & Resolution',
      'MEP Shop Drawings & Technical Documentation'
    ],
    deliverables: [
      'HAP / Hourly Analysis cooling and heating load calculation reports',
      'LOD 300 / 350 / 400 Revit MEP models (.rvt, .ifc)',
      'Navisworks clash detection reports with assigned resolution actions',
      'Fabrication & construction shop drawings (.dwg, .pdf)',
      'Pipe & duct sizing schedules, pump head calculations, riser diagrams'
    ],
    tools: ['Autodesk Revit MEP', 'AutoCAD MEP', 'Navisworks Manage', 'HAP (Carrier)', 'Elite Fire'],
    typicalTurnaround: '5 - 15 business days per design stage or submission milestone',
    bestFor: 'General contractors, MEP consultants, design-build firms, BIM managers'
  },
  {
    id: 6,
    slug: 'plm-bom-engineering-data-management',
    title: 'PLM, BOM & Engineering Data Management',
    shortDesc: 'Structured Bill of Materials (BOM), Engineering Change Management (ECN/ECO), and PDM/PLM system configuration.',
    iconName: 'Database',
    tag: 'Data Architecture',
    intro: 'Disorganized CAD files, untracked revisions, and broken part numbers cost engineering teams thousands of wasted hours. We structure engineering data, build precise multi-level BOMs, organize part numbering conventions, and manage Engineering Change Orders (ECO/ECN) to maintain clean revision history.',
    items: [
      'Product Lifecycle Management (PLM)',
      'Bill of Materials (BOM) Development',
      'Product Data & Document Management',
      'Engineering Change Management (ECN/ECO/ECR)',
      'Product Configuration & Variant Management',
      'CAD Data & Revision Control',
      'Digital Product Documentation'
    ],
    deliverables: [
      'Indented multi-level Engineering & Manufacturing BOMs (EBOM/MBOM)',
      'ECN / ECO documentation and change impact assessment packages',
      'CAD vault organization & metadata schema templates',
      'Part numbering systems & standard hardware libraries',
      'ERP / MRP integration export spreadsheets'
    ],
    tools: ['Siemens Teamcenter', 'SolidWorks PDM Professional', 'Autodesk Vault', 'SAP PLM', 'Excel/VBA'],
    typicalTurnaround: '2 - 7 business days depending on assembly size and legacy audit depth',
    bestFor: 'Growing manufacturers migrating to PDM/PLM, engineering teams facing revision chaos'
  },
  {
    id: 7,
    slug: 'engineering-consultancy-project-management',
    title: 'Engineering Consultancy, Project Management & Automation',
    shortDesc: 'Feasibility studies, technical risk assessments, CAD automation scripts, and dedicated offshore project coordination.',
    iconName: 'Briefcase',
    tag: 'Consultancy & Tech',
    intro: 'Beyond drafting, escalup provides senior engineering guidance. From technical feasibility studies and root-cause failure investigations to CAD macro automation and remote project management, we help overseas leaders streamline workflows and accelerate delivery cycles.',
    items: [
      'Engineering Feasibility Studies',
      'Technical Design Review & Consultancy',
      'Engineering Project Planning & Management',
      'Engineering Risk Assessment & Mitigation',
      'Failure Investigation & Root Cause Analysis',
      'CAD Automation & Customization',
      'Engineering Workflow Optimization',
      'Technical Scope & Design Coordination',
      'Client & Stakeholder Technical Communication'
    ],
    deliverables: [
      'Comprehensive technical feasibility reports & trade studies',
      'Custom Python / SolidWorks API automation scripts to accelerate repetitive tasks',
      'Risk assessment matrices (FMEA) & mitigation roadmaps',
      'Weekly agile engineering progress dashboards & milestone tracking',
      'Executive technical presentations for stakeholders'
    ],
    tools: ['Python', 'SolidWorks API', 'MS Project', 'Jira', 'Power BI'],
    typicalTurnaround: 'Tailored milestone-based consulting packages or dedicated monthly advisory',
    bestFor: 'Engineering directors, procurement managers, startups needing technical oversight'
  }
];
