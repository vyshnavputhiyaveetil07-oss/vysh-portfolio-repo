import type { SkillCategory, ToolItem } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    title: "Business Analytics & Strategy",
    description: "Framing commercial questions, defining metrics, gathering requirements, and communicating with stakeholders.",
    iconName: "Briefcase",
    skills: [
      "KPI Reporting",
      "Requirements Gathering",
      "Stakeholder Management",
      "Business Analysis",
      "Business Analytics",
      "Data Analysis",
      "Business Intelligence"
    ]
  },
  {
    title: "Data & Database Querying",
    description: "Querying, cleaning, transforming, and modeling data across structured databases.",
    iconName: "Database",
    skills: [
      "SQL (PostgreSQL)",
      "Python (Pandas, NumPy)",
      "Microsoft Excel",
      "Data Cleaning & Wrangling",
      "Exploratory Data Analysis",
      "CTEs & Window Functions"
    ]
  },
  {
    title: "Visualisation & BI Dashboards",
    description: "Designing executive dashboards, interactive KPI views, and user-friendly visual reports.",
    iconName: "BarChart3",
    skills: [
      "Microsoft Power BI",
      "Tableau",
      "Data Visualisation",
      "Dashboard Development",
      "DAX Measure Writing",
      "KPI Architecture"
    ]
  },
  {
    title: "Research & Analysis",
    description: "Executing research methodologies, survey data interpretation, and statistical evaluation.",
    iconName: "FileSpreadsheet",
    skills: [
      "Statistical Analysis",
      "Survey Data Analysis",
      "Explainable AI (XAI) Concepts",
      "Reporting & Documentation",
      "Cross-Industry Comparisons"
    ]
  }
];

export const verifiedTools: ToolItem[] = [
  {
    name: "SQL",
    category: "Database & Querying",
    description: "Writing relational SQL queries using CTEs, JOINs, Window Functions, and GROUP BY aggregations for business insights.",
    proficiencyNote: "Core technical tool used daily for dataset extraction and aggregation.",
    icon: "Database",
    featuredCode: `SELECT r.region, p.category, 
       SUM(o.sales) AS total_revenue,
       RANK() OVER (PARTITION BY r.region ORDER BY SUM(o.sales) DESC) AS rank
FROM sales_orders o
JOIN products p ON o.product_id = p.product_id
JOIN regions r ON o.region_id = r.region_id
GROUP BY r.region, p.category;`
  },
  {
    name: "Python",
    category: "Data Processing & EDA",
    description: "Utilising Pandas, NumPy, Matplotlib, and Seaborn for data wrangling, missing value handling, and exploratory analysis.",
    proficiencyNote: "Applied in data cleaning pipelines and exploratory customer segmentation.",
    icon: "Code2",
    featuredCode: `import pandas as pd
import seaborn as sns

df = pd.read_csv('retail_transactions.csv')
clean_df = df.dropna(subset=['CustomerID'])
clean_df['Revenue'] = clean_df['Quantity'] * clean_df['UnitPrice']
monthly_summary = clean_df.groupby('InvoiceMonth')['Revenue'].sum()`
  },
  {
    name: "Power BI",
    category: "Business Intelligence",
    description: "Building interactive dashboards, Star Schema data models, DAX measures, and drill-through executive reporting views.",
    proficiencyNote: "Primary BI tool for enterprise KPI visualisations and time-intelligence reporting.",
    icon: "LayoutDashboard",
    featuredCode: `Total Net Profit = SUM(Sales[Profit])
YoY Profit Growth % = 
VAR PrevYear = CALCULATE([Total Net Profit], SAMEPERIODLASTYEAR(Dim_Date[Date]))
RETURN DIVIDE([Total Net Profit] - PrevYear, PrevYear, 0)`
  },
  {
    name: "Microsoft Excel",
    category: "Spreadsheet Analytics",
    description: "Constructing automated financial workbooks using Pivot Tables, XLOOKUP, SUMIFS, dynamic arrays, and custom charts.",
    proficiencyNote: "Extensively used for fast scenario analysis, lookup modeling, and summary tables.",
    icon: "FileSpreadsheet",
    featuredCode: `=XLOOKUP(A2, Products[SKU], Products[UnitPrice], "Not Found")
=SUMIFS(Sales[Amount], Sales[Region], "London", Sales[Year], 2025)`
  },
  {
    name: "Tableau",
    category: "Visual Analytics",
    description: "Developing visual worksheets, calculated fields, dashboard storyboards, and interactive geographic maps.",
    proficiencyNote: "Utilised for exploratory healthcare data stories and interactive visual maps.",
    icon: "PieChart",
    featuredCode: `// Tableau Calculated Field: Profit Status
IF [Profit Ratio] > 0.15 THEN "High Margin"
ELSEIF [Profit Ratio] >= 0 THEN "Standard Margin"
ELSE "Unprofitable"
END`
  }
];
