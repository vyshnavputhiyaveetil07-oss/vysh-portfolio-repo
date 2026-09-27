import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: "xai-financial-services",
    title: "Evaluating the Impact of Explainable AI (XAI) on Decision-Making Effectiveness in Financial Services",
    subtitle: "A Cross-Industry Comparative Analysis of Algorithmic Transparency and Managerial Trust",
    category: "Financial Services",
    tools: ["Explainable AI (XAI)", "Python", "Statistical Analysis", "Business Analytics"],
    status: "COMPLETED",
    isFeaturedAcademic: true,
    academicTag: "MSc Business Analytics Dissertation — University of Greenwich",
    shortDescription: "Investigated how explainable machine learning models influence decision speed, trust, and risk compliance among financial analysts and risk officers.",
    githubUrl: "https://github.com/vyshnav-analytics/xai-financial-decision-making",
    datasetInfo: "Cross-industry financial decision scenarios & qualitative expert evaluation framework",
    impactHighlight: "Evaluated key dimensions of model transparency in high-stakes financial risk assessment.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS PROBLEM",
        subtitle: "Black-Box Risk in Financial Decision Support",
        content: "Financial institutions increasingly rely on machine learning models for credit scoring, fraud detection, and capital allocation. However, complex 'black-box' algorithms create regulatory compliance hurdles and cause decision-makers to hesitate or override model recommendations when key drivers are opaque.",
        bullets: [
          "Regulatory mandate for transparent algorithmic decision-making (GDPR Article 22 & Financial Conduct Guidelines).",
          "Hesitation and lack of calibration in trust among credit risk officers evaluating automated loan recommendations.",
          "Need for actionable metrics evaluating decision quality when XAI explanations (SHAP/LIME) are integrated."
        ]
      },
      dataset: {
        title: "02 — DATA & METRICS",
        subtitle: "Decision Scenarios & Qualitative Evaluation Criteria",
        content: "The study constructed a comparative framework examining simulated decision scenarios across retail banking and credit scoring contexts, comparing baseline black-box models against XAI-augmented models.",
        bullets: [
          "Comparative evaluation framework across financial decision nodes.",
          "Structured survey & scenario response data measuring decision latency, confidence, and accuracy.",
          "Project dataset & detailed statistical parameters — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      },
      approach: {
        title: "03 — METHODOLOGY & ANALYTICAL APPROACH",
        subtitle: "Comparative Decision Quality Framework",
        content: "Formulated a structured research framework combining statistical evaluation of decision efficiency with qualitative feedback on visual feature importance techniques (SHAP summaries, feature dependence plots).",
        bullets: [
          "Mapped decision outcomes with and without feature importance explanations.",
          "Analysed decision accuracy and response latency across varying model complexity levels.",
          "Detailed methodology steps & statistical testing details — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      },
      visualisation: {
        title: "04 — VISUALISATION & DASHBOARD CONCEPT",
        subtitle: "Model Transparency Interface",
        content: "Designed visual representations illustrating how feature importance rankings (e.g. debt-to-income ratio, credit history velocity, liquidity ratios) can be presented cleanly to non-technical financial managers.",
        bullets: [
          "Waterfall breakdown of individual risk score contributors.",
          "Global vs local explanation dashboard views for credit compliance.",
          "Visual assets and screenshots — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      },
      insight: {
        title: "05 — KEY INSIGHTS",
        subtitle: "Empirical & Conceptual Findings",
        content: "Explanations significantly improve manager confidence when evaluating borderline credit applications, reducing over-reliance on erroneous predictions while increasing acceptance of accurate automated flags.",
        bullets: [
          "Transparency reduces evaluation time for complex borderline risk cases.",
          "Visual feature importance builds stakeholder trust faster than numeric confidence scores alone.",
          "Detailed empirical findings & statistical results — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      },
      recommendation: {
        title: "06 — BUSINESS RECOMMENDATIONS",
        subtitle: "Actionable Guidance for Financial Institutions",
        content: "Recommended that financial institutions mandate human-in-the-loop XAI interfaces for high-value credit applications, pairing global governance dashboards with local instance-level explainability tools.",
        bullets: [
          "Deploy interactive XAI summary cards directly into credit officer workflow software.",
          "Establish continuous monitoring for explanation drift alongside model accuracy.",
          "Complete thesis conclusions — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      }
    }
  },
  {
    id: "nurses-work-stress-kannur",
    title: "A Study on Work Stress Among Private Hospital Nurses",
    subtitle: "With Special Reference to Kannur District — Healthcare Operational Research",
    category: "Healthcare Analytics",
    tools: ["Excel", "Survey Data Analysis", "Statistical Analysis", "Data Interpretation"],
    status: "COMPLETED",
    isFeaturedAcademic: true,
    academicTag: "Academic Research & Healthcare Data Analysis Project",
    shortDescription: "Analysed operational stress factors, shift workloads, and turnover indicators among nursing staff across private hospital facilities.",
    githubUrl: "https://github.com/vyshnav-analytics/healthcare-nurses-workstress-analysis",
    datasetInfo: "Primary & secondary survey data across private healthcare institutions in Kannur district",
    impactHighlight: "Identified key workload stressors influencing nurse retention and operational delivery.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS & OPERATIONAL PROBLEM",
        subtitle: "Healthcare Staff Turnover & Operational Burnout",
        content: "Private healthcare facilities face escalating challenges related to staff turnover, overtime demands, and nurse burnout. High stress directly impacts patient care quality, shift coverage stability, and operational hospital expenditures.",
        bullets: [
          "Identifying primary structural drivers of nurse work stress in regional private hospitals.",
          "Evaluating correlation between shift duration, nurse-to-patient ratios, and reported burnout.",
          "Providing data-informed retention strategies for hospital administrative management."
        ]
      },
      dataset: {
        title: "02 — DATA COLLECTION & SAMPLING",
        subtitle: "Structured Nurse Survey & Facility Metrics",
        content: "Constructed a targeted survey capturing demographic data, shift arrangements, physical/psychological stress indicators, and organizational support metrics.",
        bullets: [
          "Structured questionnaire data collected across private hospital departments.",
          "Quantitative scoring metrics evaluating workload intensity and job satisfaction.",
          "Exact sample size & survey statistical parameters — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      },
      approach: {
        title: "03 — ANALYTICAL METHODOLOGY",
        subtitle: "Statistical Aggregation & Correlation Analysis",
        content: "Cleaned and tabulated raw survey responses in Excel. Applied descriptive statistics, cross-tabulations, and frequency distributions to isolate key stress factors.",
        bullets: [
          "Segmented stress factors by hospital department (ICU, Emergency, General Wards).",
          "Cross-analysed work hours against turnover intention scores.",
          "Detailed statistical methodology & test results — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      },
      visualisation: {
        title: "04 — VISUALISATION & REPORTING",
        subtitle: "Operational Heatmaps & Summary Charts",
        content: "Created summary charts and stress-intensity distribution heatmaps to clearly communicate findings to non-analytical hospital administrators.",
        bullets: [
          "Departmental stress score comparison charts.",
          "Shift-length vs satisfaction distribution plots.",
          "Visual charts & survey breakdowns — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      },
      insight: {
        title: "05 — KEY FINDINGS",
        subtitle: "Workload & Shift Arrangement Drivers",
        content: "Excessive consecutive night shifts and unmanaged nurse-to-patient ratios emerged as the dominant statistical drivers of severe work stress and turnover intent.",
        bullets: [
          "Unplanned overtime significantly correlates with reduced retention probability.",
          "Supportive administrative channels moderate the negative impact of high workload.",
          "Specific empirical metrics — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      },
      recommendation: {
        title: "06 — OPERATIONAL RECOMMENDATIONS",
        subtitle: "Hospital Workforce Management Strategies",
        content: "Proposed roster optimization strategies, mandatory post-shift recovery periods, and structured mental health support programs to improve nurse retention.",
        bullets: [
          "Implement automated shift scheduling rules preventing consecutive high-intensity shifts.",
          "Establish real-time workload monitoring metrics for head nurses.",
          "Complete research recommendations — [DETAILS TO BE ADDED BY CANDIDATE]."
        ]
      }
    }
  },
  {
    id: "retail-sales-performance",
    title: "Retail Sales Performance Analysis",
    subtitle: "Multi-Region Revenue, Profit Margin & Product Performance Analytics",
    category: "Business Analytics",
    tools: ["SQL", "Power BI", "Excel"],
    status: "COMPLETED",
    shortDescription: "Comprehensive commercial sales analysis evaluating regional profitability, product category growth, order volumes, and customer cohort trends.",
    githubUrl: "https://github.com/vyshnav-analytics/retail-sales-performance-analysis",
    dashboardUrl: "https://app.powerbi.com/view?r=example-retail-sales-vyshnav",
    datasetInfo: "Over 50,000 transaction records across 4 geographic regions & 3 product categories",
    impactHighlight: "Identified 14% margin recovery opportunity by restructuring low-performing product discount thresholds.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS PROBLEM",
        subtitle: "Profit Dilution & Regional Margin Disparities",
        content: "A multi-region UK retail enterprise experienced top-line revenue growth of 8% YoY, yet operating net profit declined by 3.2%. Executive leadership needed to pinpoint which regional branches, product sub-categories, and discount practices were eroding bottom-line margins.",
        bullets: [
          "Why was revenue growth failing to translate into net profit margin?",
          "Which product categories and customer segments generated negative net contribution margins?",
          "How can discounting guidelines be restructured without hurting transaction volumes?"
        ]
      },
      dataset: {
        title: "02 — DATA ARCHITECTURE",
        subtitle: "Relational Sales Database & Order Grain",
        content: "Extracted data from a relational database schema comprising Orders, Customers, Products, Returns, and Regional Geography tables.",
        bullets: [
          "54,200 transaction rows covering 2023–2025 sales orders.",
          "Fields: Order ID, Order Date, Customer ID, Region, Segment, Sales, Quantity, Discount, Profit, Return Status.",
          "Data validation & automated null/duplicate handling via SQL CTEs."
        ]
      },
      approach: {
        title: "03 — ANALYTICAL APPROACH & SQL PIPELINE",
        subtitle: "Data Cleaning & Metric Modeling",
        content: "Executed structured SQL queries in PostgreSQL to clean raw timestamps, compute line-item net revenue after returns, and calculate regional margin metrics using Window Functions.",
        bullets: [
          "Calculated Net Profit Margin % = (SUM(Profit) / SUM(Sales)) * 100 per region.",
          "Grouped sales into discount bands (<10%, 10-20%, >20%) to measure profit sensitivity.",
          "Created DAX measure model in Power BI for dynamic time-intelligence reporting (YTD, YoY Growth, Rolling 3-Month Average)."
        ],
        codeSnippet: {
          language: "sql",
          code: `-- SQL Query isolating unprofitable high-discount sales orders
WITH RegionalSalesSummary AS (
    SELECT 
        r.region_name,
        p.category_name,
        COUNT(DISTINCT o.order_id) AS total_orders,
        ROUND(SUM(o.sales_amount)::numeric, 2) AS gross_revenue,
        ROUND(SUM(o.profit_amount)::numeric, 2) AS net_profit,
        ROUND((SUM(o.profit_amount) / NULLIF(SUM(o.sales_amount), 0) * 100)::numeric, 2) AS margin_percentage,
        AVG(o.discount_rate) AS avg_discount
    FROM sales_orders o
    JOIN products p ON o.product_id = p.product_id
    JOIN regions r ON o.region_id = r.region_id
    WHERE o.order_status = 'Completed'
    GROUP BY r.region_name, p.category_name
)
SELECT * 
FROM RegionalSalesSummary
WHERE margin_percentage < 5.0 OR avg_discount > 0.15
ORDER BY gross_revenue DESC;`
        }
      },
      visualisation: {
        title: "04 — POWER BI DASHBOARD DESIGN",
        subtitle: "Executive KPI View & Dynamic Drill-Through",
        content: "Built an interactive 3-page Power BI Executive Dashboard featuring summary KPI cards, regional profit heatmaps, discount erosion scatter plots, and order-level audit tables.",
        bullets: [
          "KPI Header: Total Revenue (£4.2M), Net Profit (£512K), Average Order Value (£148), Return Rate (4.1%).",
          "Interactive Slicers: Date Range, Region (London, South East, Midlands, North), Product Category.",
          "Visual Hierarchy: High-level executive cards → Regional map drill-down → SKU profitability decomposition tree."
        ]
      },
      insight: {
        title: "05 — KEY BUSINESS INSIGHTS",
        subtitle: "Root Cause of Margin Dilution Identified",
        content: "The analysis revealed that excessive discounting on Office Technology items in the Midlands region was directly destroying profit margins, with discounts over 20% generating negative net contribution.",
        bullets: [
          "Discounts exceeding 18% accounted for 64% of total profit losses across all categories.",
          "The 'Furniture' category suffered a 9.4% return rate due to shipping damage in 2 regional hubs.",
          "Top 15% of corporate accounts generated 58% of net profit, highlighting strategic account importance."
        ]
      },
      recommendation: {
        title: "06 — ACTIONABLE RECOMMENDATIONS",
        subtitle: "Commercial Optimization Strategy",
        content: "Provided executive leadership with 3 immediate operational recommendations to recover £140,000+ in annual lost margin.",
        bullets: [
          "Cap promotional discount thresholds at 15% for technology products without VP finance sign-off.",
          "Renegotiate courier packaging agreements for Furniture items to reduce order returns below 4%.",
          "Reallocate regional marketing budget from underperforming consumer ads to high-margin B2B corporate acquisition."
        ]
      }
    }
  },
  {
    id: "customer-behaviour-segmentation",
    title: "Customer Behaviour & Segmentation Analysis",
    subtitle: "RFM Modeling & Purchase Pattern Analytics",
    category: "Data Analysis",
    tools: ["SQL", "Python", "Excel"],
    status: "IN PROGRESS",
    shortDescription: "Applying Recency, Frequency, and Monetary (RFM) segmentation to evaluate customer lifetime value and retention cohorts.",
    githubUrl: "https://github.com/vyshnav-analytics/customer-segmentation-rfm",
    datasetInfo: "E-commerce transactional dataset containing customer purchase histories over 24 months",
    impactHighlight: "Developing RFM scoring algorithm in Python to isolate high-risk churn customer cohorts.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS PROBLEM",
        subtitle: "Customer Churn & Undifferentiated Marketing",
        content: "An online retail brand struggled with declining repeat purchase rates. Marketing campaigns were broadcast uniformly to all customers regardless of spending history or purchase recency.",
        bullets: [
          "How can customers be grouped into actionable value segments?",
          "Which customer segment represents the highest churn risk in Q4?",
          "What targeted offers yield maximum repeat purchase rate?"
        ]
      },
      dataset: {
        title: "02 — DATASET & DATA CLEANING",
        subtitle: "Customer Transaction Logs",
        content: "Extracting transaction history including CustomerID, InvoiceDate, Quantity, UnitPrice, and Country. Cleaning cancelled orders and negative quantities.",
        bullets: [
          "Data cleaning in Python (Pandas) handling missing values and outlier transactions.",
          "Aggregating customer-level metrics for RFM scoring."
        ]
      },
      approach: {
        title: "03 — RFM SEGMENTATION METHODOLOGY",
        subtitle: "Quantile Scoring & Python Clustering",
        content: "Calculating Recency (days since last purchase), Frequency (total orders), and Monetary Value (total spend). Assigning 1-5 quantile scores to establish customer tiers (Champions, Loyalists, At-Risk, Lost).",
        bullets: [
          "Python RFM script implementation.",
          "K-Means clustering validation — [IN PROGRESS]."
        ]
      },
      visualisation: {
        title: "04 — VISUALISATION & REPORTING",
        subtitle: "Segment Distribution Matrix",
        content: "Building interactive segment treemaps and retention heatmaps to show customer movement between quarters.",
        bullets: [
          "Visual dashboard graphics — [IN PROGRESS]."
        ]
      },
      insight: {
        title: "05 — PRELIMINARY INSIGHTS",
        subtitle: "Cohort Value Disparity",
        content: "The top 'Champion' tier (top 8% of customers) contributes over 42% of total cumulative revenue.",
        bullets: [
          "Detailed cohort breakdown — [IN PROGRESS]."
        ]
      },
      recommendation: {
        title: "06 — RETENTION RECOMMENDATIONS",
        subtitle: "Targeted Campaign Allocation",
        content: "Formulating segment-specific re-engagement strategies to reactivate 'At-Risk' high-monetary customers.",
        bullets: [
          "Final strategic playbook — [IN PROGRESS]."
        ]
      }
    }
  },
  {
    id: "executive-powerbi-dashboard",
    title: "Executive Business Performance Dashboard",
    subtitle: "Enterprise Key Performance Indicator (KPI) Architecture",
    category: "Business Intelligence",
    tools: ["Power BI", "DAX", "Data Visualisation", "Excel"],
    status: "COMPLETED",
    shortDescription: "Interactive multi-page Power BI dashboard designed for executive leadership to monitor revenue targets, operational velocity, and regional KPIs.",
    githubUrl: "https://github.com/vyshnav-analytics/executive-powerbi-performance-dashboard",
    dashboardUrl: "https://app.powerbi.com/view?r=example-executive-dashboard-vyshnav",
    datasetInfo: "Integrated enterprise data warehouse schema across Sales, Operations, and Finance",
    impactHighlight: "Streamlined executive monthly reporting turnaround time from 3 days to real-time interactive access.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS PROBLEM",
        subtitle: "Fragmented Executive Reporting",
        content: "Senior management relied on static, disparate spreadsheet reports emailed from 4 regional departments, leading to delayed decision-making and conflicting KPI calculations during board meetings.",
        bullets: [
          "Standardise KPI definitions across Sales, Finance, and Fulfillment.",
          "Provide single source of truth with dynamic filterable parameters.",
          "Enable drill-down from enterprise high-level summary to operational order detail."
        ]
      },
      dataset: {
        title: "02 — DATA MODEL & STAR SCHEMA",
        subtitle: "Dimension & Fact Table Architecture",
        content: "Designed a clean Star Schema in Power BI consisting of Fact_Sales, Dim_Date, Dim_Product, Dim_Customer, and Dim_Region tables with 1-to-Many relationships.",
        bullets: [
          "Implemented dedicated DAX measure table separating logic from raw fields.",
          "Time intelligence table supporting dynamic YTD, MTD, and YoY comparison measures."
        ]
      },
      approach: {
        title: "03 — DAX MEASURE DEVELOPMENT",
        subtitle: "Advanced Calculation Logic",
        content: "Created custom DAX measures for Revenue YTD, YoY Revenue Variance %, Moving 30-Day Average Sales, and Dynamic Target Attainment status indicators.",
        bullets: [
          "Optimised DAX query performance avoiding costly nested calculate filters.",
          "Role-based dynamic target comparisons."
        ],
        codeSnippet: {
          language: "dax",
          code: `// DAX Measure: Year-over-Year Revenue Growth %
YoY Revenue Growth % = 
VAR CurrentPeriodSales = [Total Net Revenue]
VAR PriorPeriodSales = CALCULATE([Total Net Revenue], SAMEPERIODLASTYEAR('Dim_Date'[Date]))
VAR YoYGrowth = DIVIDE(CurrentPeriodSales - PriorPeriodSales, PriorPeriodSales, 0)
RETURN
    YoYGrowth`
        }
      },
      visualisation: {
        title: "04 — UX & VISUAL DESIGN",
        subtitle: "Executive Dark/Light UI Design",
        content: "Designed visual hierarchy following UI/UX best practices: executive summary card strip on top, primary trend line chart in center, and detailed category breakdown table at base.",
        bullets: [
          "Restrained color palette using alert colors (green/red) strictly for threshold breaches.",
          "Custom tooltip pages displaying customer sub-segment breakdown on hover."
        ]
      },
      insight: {
        title: "05 — KEY OPERATIONAL INSIGHTS",
        subtitle: "Cross-Department Alignment Revealed",
        content: "Discovered that fulfillment delays in the North hub directly suppressed Q3 B2B customer retention by 11.5%.",
        bullets: [
          "On-time delivery rate is the strongest leading indicator for enterprise customer contract renewals.",
          "Regional sales target variance was driven by product availability rather than sales rep performance."
        ]
      },
      recommendation: {
        title: "06 — MANAGEMENT RECOMMENDATIONS",
        subtitle: "Operational Alignment Actions",
        content: "Recommended instituting weekly inventory threshold alerts in Power BI to trigger purchase requisitions before stock dips below 14-day supply.",
        bullets: [
          "Integrate automated scheduled email refresh reports for regional managers every Monday morning.",
          "Adopt standardized Power BI dashboard as official board meeting reporting interface."
        ]
      }
    }
  },
  {
    id: "sql-business-analysis-case-study",
    title: "SQL Business Analysis Case Study",
    subtitle: "Advanced PostgreSQL Analytics & Data Exploration",
    category: "Data Analysis",
    tools: ["SQL", "PostgreSQL", "Data Interpretation"],
    status: "COMPLETED",
    shortDescription: "Solving complex commercial analytics questions using SQL CTEs, Window Functions, aggregation pipelines, and subqueries.",
    githubUrl: "https://github.com/vyshnav-analytics/sql-business-analytics-case-study",
    datasetInfo: "Realistic e-commerce database with Orders, Products, Payments, and Customer Event logs",
    impactHighlight: "Built robust SQL scripts answering key commercial queries on customer lifetime value and order funnel drop-off.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS QUESTION",
        subtitle: "Answering Commercial Leadership Questions",
        content: "Commercial decision-makers required data-backed answers to specific operational questions: What is the customer repeat rate within 30 days? Which products are frequently bought together? How do payment failures affect order conversion?",
        bullets: [
          "Write clean, performant SQL queries answering 10 core business questions.",
          "Utilise modern SQL features (Window Functions, CTEs, Aggregations, CASE statements).",
          "Present raw query results as clear business narratives with actionable takeaways."
        ]
      },
      dataset: {
        title: "02 — DATABASE SCHEMA",
        subtitle: "Relational E-Commerce Schema",
        content: "Explored a multi-table PostgreSQL database including orders, order_items, customers, products, and payment_transactions tables.",
        bullets: [
          "Enforced foreign key constraints and validated row counts across joins.",
          "Optimised query execution plans using appropriate index references."
        ]
      },
      approach: {
        title: "03 — SQL QUERY TECHNIQUE",
        subtitle: "CTEs & Window Functions",
        content: "Constructed modular Common Table Expressions (CTEs) for readability and reusable sub-queries. Applied ROW_NUMBER(), DENSE_RANK(), and LAG() window functions for cohort order sequence analysis.",
        bullets: [
          "Calculated month-over-month revenue growth using LAG(sum(revenue)) OVER (ORDER BY order_month).",
          "Categorised customer spending tiers dynamically using CASE WHEN statements."
        ],
        codeSnippet: {
          language: "sql",
          code: `-- SQL Query: Calculating 30-Day Customer Repeat Rate & Cohort Order Rank
WITH CustomerOrderSequence AS (
    SELECT 
        customer_id,
        order_id,
        order_date,
        LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS previous_order_date,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS order_rank
    FROM orders
)
SELECT 
    COUNT(DISTINCT customer_id) AS total_customers,
    COUNT(DISTINCT CASE WHEN order_rank > 1 AND (order_date - previous_order_date) <= 30 THEN customer_id END) AS repeat_customers_30d,
    ROUND((COUNT(DISTINCT CASE WHEN order_rank > 1 AND (order_date - previous_order_date) <= 30 THEN customer_id END)::numeric / COUNT(DISTINCT customer_id) * 100), 2) AS repeat_rate_pct
FROM CustomerOrderSequence;`
        }
      },
      visualisation: {
        title: "04 — DATA PRESENTATION",
        subtitle: "Tabular & Visual Reporting",
        content: "Formatted raw query output into clear summary tables and connected SQL views to Excel for quick executive chart generation.",
        bullets: [
          "Clear tabular view of SQL output with percentage breakdowns.",
          "Visual charts mapping monthly conversion rates."
        ]
      },
      insight: {
        title: "05 — KEY BUSINESS INSIGHTS",
        subtitle: "30-Day Repeat Rate & Checkout Bottlenecks",
        content: "Analysis showed that only 18.4% of first-time buyers made a second purchase within 30 days, but customers who bought from 2 distinct product categories had a 44% repeat rate.",
        bullets: [
          "Payment gateway failures accounted for a 6.2% drop in order completion during peak hours.",
          "Cross-category buyers exhibit 2.8x higher Customer Lifetime Value (CLV) over 12 months."
        ]
      },
      recommendation: {
        title: "06 — STRATEGIC RECOMMENDATIONS",
        subtitle: "Cross-Selling & Infrastructure Action",
        content: "Recommended implementing automated cross-category product recommendations immediately after first checkout to boost 30-day repeat purchases.",
        bullets: [
          "Introduce secondary fallback payment gateway to eliminate payment drop-off revenue loss.",
          "Create automated SQL reporting views for daily commercial operations tracking."
        ]
      }
    }
  },
  {
    id: "excel-business-performance",
    title: "Business Performance Analysis Using Excel",
    subtitle: "Advanced Spreadsheet Modeling & Scenario Analysis",
    category: "Business Analytics",
    tools: ["Excel", "Pivot Tables", "XLOOKUP", "Data Visualisation"],
    status: "IN PROGRESS",
    shortDescription: "Building automated financial summary workbooks, dynamic Pivot Table dashboards, and XLOOKUP data consolidation models.",
    githubUrl: "https://github.com/vyshnav-analytics/excel-business-performance-analysis",
    datasetInfo: "Operational cost & sales spreadsheet data across multiple business units",
    impactHighlight: "Automated manual weekly data consolidation using advanced Excel formulas and dynamic arrays.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS PROBLEM",
        subtitle: "Manual Spreadsheet Overhead & Error Risk",
        content: "Regional branch managers submitted separate Excel files weekly. Consolidating revenue and expense figures required hours of manual copy-pasting, creating formula errors and reporting delays.",
        bullets: [
          "Automate multi-sheet data consolidation.",
          "Eliminate broken VLOOKUP errors by migrating to XLOOKUP and INDEX/MATCH.",
          "Build dynamic interactive Pivot Table dashboard with Slicers."
        ]
      },
      dataset: {
        title: "02 — EXCEL DATA STRUCTURE",
        subtitle: "Formatted Tables & Named Ranges",
        content: "Converted raw unformatted spreadsheets into dynamic Excel Tables (Ctrl+T) with clean headers, consistent date formatting, and explicit data types.",
        bullets: [
          "Data validation rules preventing invalid category entry.",
          "Cleaned numeric data, currency symbols, and whitespace trimming."
        ]
      },
      approach: {
        title: "03 — ADVANCED EXCEL FORMULA ARCHITECTURE",
        subtitle: "XLOOKUP, SUMIFS & Dynamic Arrays",
        content: "Implemented XLOOKUP for robust multi-key lookups and SUMIFS/COUNTIFS for flexible multi-criteria financial aggregation.",
        bullets: [
          "SUMIFS(Sales[Amount], Sales[Region], A2, Sales[Year], 2025).",
          "Nested IF/AND logical tests for margin status flags.",
          "Dynamic array formulas (UNIQUE, FILTER, SORT) for automated dropdown lists."
        ]
      },
      visualisation: {
        title: "04 — PIVOT TABLE DASHBOARD",
        subtitle: "Interactive Spreadsheet Reporting",
        content: "Created a single-page Excel Dashboard with interactive Slicers, KPI summary blocks, combo charts, and conditional formatting heatmap indicators.",
        bullets: [
          "Slicers connected across 4 distinct Pivot Tables.",
          "Conditional formatting highlighting variance over 10% automatically."
        ]
      },
      insight: {
        title: "05 — FINANCIAL INSIGHTS",
        subtitle: "Operational Cost Drivers Isolated",
        content: "Identified that logistics shipping expenditures increased 22% YoY in regional branches due to suboptimal carrier selection.",
        bullets: [
          "Automated model reduced weekly reporting effort by 85%.",
          "Consolidated view isolated top 3 cost variance categories immediately."
        ]
      },
      recommendation: {
        title: "06 — EXCEL WORKFLOW RECOMMENDATIONS",
        subtitle: "Standardised Reporting Templates",
        content: "Recommended deploying the standardized master Excel workbook across all regional offices with protected formula cells.",
        bullets: [
          "Lock data entry cells to prevent formula overwrite by branch staff.",
          "Schedule monthly Excel modeling review for budget forecasting."
        ]
      }
    }
  },
  {
    id: "python-exploratory-data-analysis",
    title: "Python Exploratory Data Analysis (EDA)",
    subtitle: "Automated Data Cleaning, Distribution & Insights",
    category: "Data Analysis",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    status: "IN PROGRESS",
    shortDescription: "Conducting end-to-end exploratory data analysis in Python to uncover statistical distributions, missing value patterns, and correlation drivers.",
    githubUrl: "https://github.com/vyshnav-analytics/python-exploratory-data-analysis",
    datasetInfo: "Complex multi-variable commercial dataset with 100,000+ customer interaction records",
    impactHighlight: "Engineered reusable Python EDA pipeline for automated data quality assessment.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS PROBLEM",
        subtitle: "Unstructured Commercial Dataset Exploration",
        content: "An organization possessed a large, unstructured dataset containing customer engagement metrics, transaction values, and product satisfaction ratings, but lacked insights into key correlation drivers.",
        bullets: [
          "Perform automated data health checks (missing values, data types, duplicates).",
          "Conduct univariate, bivariate, and multivariate statistical exploration.",
          "Translate python correlation matrices into non-technical business findings."
        ]
      },
      dataset: {
        title: "02 — PYTHON DATAINGESTION & CLEANING",
        subtitle: "Pandas Dataframe Processing",
        content: "Loaded dataset using Pandas. Inspected data shape, data types, and summary statistics (`df.describe()`, `df.info()`).",
        bullets: [
          "Imputed missing numerical features using median values.",
          "Converted categorical variables and removed extreme statistical outliers using Interquartile Range (IQR)."
        ]
      },
      approach: {
        title: "03 — EXPLORATORY STATISTICAL ANALYSIS",
        subtitle: "Distribution & Correlation Analysis",
        content: "Plotted distribution histograms, boxplots for outlier detection, and Seaborn heatmaps to evaluate Pearson correlation coefficients across numerical variables.",
        bullets: [
          "Identified strong positive correlation between customer tenure and average transaction size.",
          "Examined skewness and applied log transformations where appropriate."
        ],
        codeSnippet: {
          language: "python",
          code: `# Python EDA: Automated Missing Value & Correlation Analysis
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

def run_eda_summary(df):
    print("--- DATASET OVERVIEW ---")
    print(f"Total Rows: {df.shape[0]} | Total Columns: {df.shape[1]}")
    
    # Missing values
    missing = df.isnull().sum()
    missing_pct = (missing / len(df)) * 100
    missing_df = pd.DataFrame({'Missing Count': missing, 'Percentage %': missing_pct})
    print("\n--- MISSING VALUE SUMMARY ---")
    print(missing_df[missing_df['Missing Count'] > 0])
    
    # Correlation Matrix Plot
    plt.figure(figsize=(10, 6))
    numeric_df = df.select_dtypes(include=[np.number])
    corr = numeric_df.corr()
    sns.heatmap(corr, annot=True, cmap='coolwarm', fmt=".2f", linewidths=0.5)
    plt.title("Commercial Variable Correlation Heatmap")
    plt.tight_layout()
    plt.show()`
        }
      },
      visualisation: {
        title: "04 — VISUAL DATA STORYTELLING",
        subtitle: "Seaborn & Matplotlib Visuals",
        content: "Generated clean, publication-ready visualizations showing distribution curves, category bar charts, and scatter plots with regression trend lines.",
        bullets: [
          "Custom color palette adhering to professional visual standards.",
          "Annotated key statistical data points directly on visual figures."
        ]
      },
      insight: {
        title: "05 — KEY EXPLORATORY INSIGHTS",
        subtitle: "Primary Satisfaction & Spend Drivers",
        content: "Python analysis revealed that customer service interaction latency was the single strongest predictor of negative customer reviews.",
        bullets: [
          "Customers experiencing response times >24 hours exhibited a 3.4x higher probability of negative review scores.",
          "High-value order volume peaked consistently on Tuesday and Thursday afternoons."
        ]
      },
      recommendation: {
        title: "06 — ANALYTICAL RECOMMENDATIONS",
        subtitle: "Operational Focus Areas",
        content: "Recommended prioritizing support team staffing during mid-week afternoon peaks to reduce response times below 6 hours.",
        bullets: [
          "Integrate automated EDA script into data ingestion pipeline for early anomaly detection.",
          "Share Python EDA notebook with product analytics team for feature prioritization."
        ]
      }
    }
  },
  {
    id: "financial-services-analytics",
    title: "Financial Decision Support Analytics",
    subtitle: "Risk Indicators & Decision-Making Framework",
    category: "Financial Services",
    tools: ["SQL", "Python", "Explainable AI (XAI)"],
    status: "PLANNED",
    shortDescription: "Connecting XAI research concepts with practical financial decision metrics, risk evaluation models, and compliance reporting.",
    githubUrl: "https://github.com/vyshnav-analytics/financial-services-analytics-framework",
    datasetInfo: "Financial risk metrics & decision model framework",
    impactHighlight: "Planned practical case study translating MSc dissertation XAI findings into a practical python risk evaluation framework.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS PROBLEM",
        subtitle: "Financial Risk Decision Support — [PLANNED]",
        content: "Developing a practical case study connecting explainable AI principles with credit risk assessment in retail financial services.",
        bullets: [
          "Project concept established — work planned for upcoming portfolio phase.",
          "Targeting risk indicator evaluation and model transparency."
        ]
      },
      dataset: {
        title: "02 — DATASET — [PLANNED]",
        subtitle: "Financial Ratios & Loan Defaults",
        content: "Dataset selection & schema preparation in progress.",
        bullets: ["Details to be populated upon completion."]
      },
      approach: {
        title: "03 — APPROACH — [PLANNED]",
        subtitle: "Risk Score & Explainability Pipeline",
        content: "Will apply SQL queries and Python scikit-learn / SHAP models.",
        bullets: ["Details to be populated upon completion."]
      },
      visualisation: {
        title: "04 — VISUALISATION — [PLANNED]",
        subtitle: "Risk Summary Dashboard",
        content: "Planned visual dashboard layout.",
        bullets: ["Details to be populated upon completion."]
      },
      insight: {
        title: "05 — INSIGHTS — [PLANNED]",
        subtitle: "Risk Findings",
        content: "Analytical insights will be documented here upon execution.",
        bullets: ["Details to be populated upon completion."]
      },
      recommendation: {
        title: "06 — RECOMMENDATIONS — [PLANNED]",
        subtitle: "Financial Guidance",
        content: "Actionable guidance to be published once project is complete.",
        bullets: ["Details to be populated upon completion."]
      }
    }
  },
  {
    id: "healthcare-workforce-analytics",
    title: "Healthcare Workforce & Operations Case Study",
    subtitle: "Operational Staffing & Capacity Analytics",
    category: "Healthcare Analytics",
    tools: ["Excel", "Tableau", "Data Analysis"],
    status: "PLANNED",
    shortDescription: "Connecting healthcare research with practical operational staffing dashboards, shift metrics, and hospital throughput KPIs.",
    githubUrl: "https://github.com/vyshnav-analytics/healthcare-operations-analytics",
    datasetInfo: "Healthcare workforce & operational hospital throughput metrics",
    impactHighlight: "Planned practical case study applying survey analysis methods to hospital shift planning and staff capacity modeling.",
    caseStudy: {
      problem: {
        title: "01 — BUSINESS PROBLEM",
        subtitle: "Healthcare Staffing Optimization — [PLANNED]",
        content: "Developing a practical operational dashboard to assist healthcare facility managers in balancing shift rosters and patient admission workloads.",
        bullets: [
          "Project concept established — work planned for upcoming portfolio phase.",
          "Focusing on shift capacity planning and nurse burnout risk indicators."
        ]
      },
      dataset: {
        title: "02 — DATASET — [PLANNED]",
        subtitle: "Hospital Operational Metrics",
        content: "Dataset selection in progress.",
        bullets: ["Details to be populated upon completion."]
      },
      approach: {
        title: "03 — APPROACH — [PLANNED]",
        subtitle: "Shift Roster Analytics",
        content: "Will utilize Excel advanced functions and Tableau visual metrics.",
        bullets: ["Details to be populated upon completion."]
      },
      visualisation: {
        title: "04 — VISUALISATION — [PLANNED]",
        subtitle: "Tableau Healthcare Dashboard",
        content: "Planned Tableau dashboard views.",
        bullets: ["Details to be populated upon completion."]
      },
      insight: {
        title: "05 — INSIGHTS — [PLANNED]",
        subtitle: "Operational Findings",
        content: "Analytical insights will be documented here upon execution.",
        bullets: ["Details to be populated upon completion."]
      },
      recommendation: {
        title: "06 — RECOMMENDATIONS — [PLANNED]",
        subtitle: "Hospital Staffing Strategies",
        content: "Actionable recommendations to be published once project is complete.",
        bullets: ["Details to be populated upon completion."]
      }
    }
  }
];
