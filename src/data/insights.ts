import type { InsightArticle } from '../types/portfolio';

export const insightsData: InsightArticle[] = [
  {
    id: "sql-window-functions-retention",
    title: "Leveraging SQL Window Functions for Customer Retention Analysis",
    category: "SQL & Data Engineering",
    readTime: "5 min read",
    date: "March 2026",
    summary: "How to use LAG(), LEAD(), and ROW_NUMBER() window functions to calculate repeat purchase velocity and customer retention cohorts directly in relational databases.",
    tags: ["SQL", "PostgreSQL", "Data Analysis", "Cohort Retention"],
    content: [
      "In commercial data analysis, understanding customer repeat purchase behavior is vital for evaluating retention strategy effectiveness. Traditional SQL GROUP BY queries can aggregate total revenue per customer, but evaluating the time gap between consecutive orders requires Window Functions.",
      "By applying `LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)`, we can isolate the exact order timestamp prior to each transaction. Subtracting this value from the current order date yields the days elapsed between consecutive purchases.",
      "This approach enables data analysts to segment customers into 'Fast Re-purchasers' (<14 days), 'Standard Cohorts' (15-45 days), and 'Dormant Accounts' (>60 days), providing clear SQL views for marketing automation systems."
    ]
  },
  {
    id: "powerbi-executive-dashboard-design",
    title: "Designing Executive Power BI Dashboards That Drive Action",
    category: "Business Intelligence",
    readTime: "6 min read",
    date: "February 2026",
    summary: "Key UI/UX guidelines for structuring Power BI reports for senior leadership: from single-screen KPI architecture to DAX performance tuning.",
    tags: ["Power BI", "DAX", "UI/UX", "Dashboard Design"],
    content: [
      "Executive decision-makers rarely have time to navigate through dozens of cluttered chart elements. A successful BI dashboard must communicate business health within 5 seconds of opening.",
      "The '5-Second Rule' in dashboard architecture dictates that top-level KPI cards (Total Sales, Gross Profit %, Order Volume, Target Attainment) should be positioned at the top left. Secondary trend charts and regional maps belong in the center body.",
      "Furthermore, writing clean DAX measures using variables (`VAR / RETURN`) improves report rendering speed and simplifies maintenance when metrics are updated."
    ]
  },
  {
    id: "xai-financial-services-risk",
    title: "Why Explainable AI (XAI) is Essential for Risk Assessment in Financial Services",
    category: "AI & Decision Support",
    readTime: "7 min read",
    date: "February 2026",
    summary: "Synthesizing MSc dissertation research on algorithmic transparency, regulatory compliance, and building trust among financial credit officers.",
    tags: ["Explainable AI", "Financial Services", "Risk Analysis", "MSc Research"],
    content: [
      "As machine learning models take on greater responsibility in evaluating credit risk and loan default probabilities, the 'black-box' nature of complex neural networks poses compliance challenges under financial governance regulations.",
      "Explainable AI (XAI) frameworks such as SHAP (SHapley Additive exPlanations) and LIME decompose complex prediction scores into readable feature contribution waterfall charts.",
      "My MSc research demonstrated that providing credit risk officers with visual feature importance breakdowns significantly reduces evaluation latency for borderline loan applications while preventing over-reliance on inaccurate model predictions."
    ]
  },
  {
    id: "5-step-analytics-framework",
    title: "From Raw Data to Business Insight: A 5-Step Analytical Framework",
    category: "Business Analytics",
    readTime: "4 min read",
    date: "January 2026",
    summary: "A practical methodology for structuring unstructured business questions into repeatable SQL, Python, and BI analytical workflows.",
    tags: ["Business Analysis", "Methodology", "Problem Solving", "Analytics Framework"],
    content: [
      "Data analysis without a clear commercial question often results in vanity metrics that fail to influence strategic decisions. Every analytics project should follow a structured 5-step problem-solving pipeline.",
      "Step 1: Frame the Business Problem. Step 2: Validate Data Integrity & Grain. Step 3: Execute Exploratory SQL/Python Analysis. Step 4: Visualise Trends in Power BI/Tableau. Step 5: Deliver Actionable Business Recommendations.",
      "By maintaining focus on business recommendation rather than software syntax alone, analysts deliver true commercial value to stakeholders."
    ]
  }
];
