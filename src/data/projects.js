// /src/data/projects.js
// Sample engineering portfolio projects across Mechanical, MEP, BIM, and PLM disciplines

export const projectCategories = ['All', 'Mechanical', 'MEP', 'BIM', 'PLM'];

export const projectsData = [
  {
    id: 1,
    title: 'Industrial Equipment Housing Redesign',
    category: 'Mechanical',
    categoryLabel: 'Mechanical & DFMA',
    description: 'Redesigned a heavy sheet-metal enclosure to eliminate 40% of weld joints, lowering fabrication costs while optimizing interior airflow and service access.',
    scope: '3D CAD Modeling · Sheet Metal DFMA · Flat Patterns · 2D Drawings',
    tools: ['SolidWorks', 'Sheet Metal', 'AutoCAD'],
    metrics: '28% production cost reduction',
    featured: true
  },
  {
    id: 2,
    title: 'Mechanism Design & Motion Study',
    category: 'Mechanical',
    categoryLabel: 'Mechanism & Kinematics',
    description: 'Developed a high-precision multi-bar linkage mechanism with dynamic kinematic analysis, torque curve validation, and tight tolerance stack-up review for smooth motion.',
    scope: 'Linkage Synthesis · Kinematic Simulation · ASME Y14.5 GD&T · Prototype Review',
    tools: ['Siemens NX', 'SolidWorks Motion', 'MATLAB'],
    metrics: 'Zero binding in prototype testing',
    featured: true
  },
  {
    id: 3,
    title: 'Commercial Building HVAC Design',
    category: 'MEP',
    categoryLabel: 'HVAC Engineering',
    description: 'Executed complete HVAC engineering for a 6-storey commercial facility including Carrier HAP cooling/heating load analysis, duct routing, VRF zoning, and equipment scheduling.',
    scope: 'Load Calculation · Duct & Pipe Sizing · Equipment Schedules · Riser Diagrams',
    tools: ['Carrier HAP', 'AutoCAD MEP', 'ASHRAE Standards'],
    metrics: 'Compliant with ASHRAE 90.1 energy baseline',
    featured: true
  },
  {
    id: 4,
    title: 'Fire & Plumbing Coordination Package',
    category: 'MEP',
    categoryLabel: 'Plumbing & Life Safety',
    description: 'Engineered comprehensive fire sprinkler coverage, hydraulic pump calculations, domestic water supply risers, and gravity drainage packages ready for site installation.',
    scope: 'Hydraulic Calculations · NFPA Compliance · Pump Sizing · Shop Drawings',
    tools: ['AutoCAD', 'Elite Fire', 'Revit MEP'],
    metrics: 'Approved on first submittal',
    featured: false
  },
  {
    id: 5,
    title: 'MEP BIM Model & Clash Resolution',
    category: 'BIM',
    categoryLabel: 'BIM & Clash Detection',
    description: 'Authored an LOD 300 Revit model of complex mechanical and electrical plant rooms, running Navisworks clash tests against structural beams to resolve 120+ clashes virtually.',
    scope: 'LOD 300 Revit Modeling · Navisworks Clash Matrix · Spatial Resolution · IFC Export',
    tools: ['Autodesk Revit', 'Navisworks Manage', 'BIM 360'],
    metrics: '124 clashes caught before field installation',
    featured: true
  },
  {
    id: 6,
    title: 'BOM & Revision Control Cleanup',
    category: 'PLM',
    categoryLabel: 'PLM & Data Governance',
    description: 'Restructured legacy drawing repositories and multi-level BOMs for a 450-part industrial product range, instituting strict ECN/ECO revision workflows and standard parts catalogs.',
    scope: 'Multi-Level Indented BOMs · PDM Schema Setup · ECN Workflow · Legacy Audit',
    tools: ['Siemens Teamcenter', 'SolidWorks PDM', 'SAP PLM'],
    metrics: '100% drawing-to-BOM parity achieved',
    featured: false
  }
];
