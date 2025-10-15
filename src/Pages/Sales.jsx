import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./Sales.css";

const yearlyData = [
  { year: "FY 2022-23", total: 10580.47 },
  { year: "FY 2023-24", total: 86561.302 },
  { year: "FY 2024-25", total: 85220.825 },
];

const monthWiseData = [
  { month: "Jan 23", sales: 1820.577 },
  { month: "Feb 23", sales: 3822.114 },
  { month: "Mar 23", sales: 4937.779 },
  { month: "Apr 23", sales: 5478.28 },
  { month: "May 23", sales: 5084.607 },
  { month: "Jun 23", sales: 4433.22 },
  { month: "Jul 23", sales: 4163.03 },
  { month: "Aug 23", sales: 5403.164 },
  { month: "Sep 23", sales: 5349.11 },
  { month: "Oct 23", sales: 6164.12 },
  { month: "Nov 23", sales: 8372.47 },
  { month: "Dec 23", sales: 11204.912 },
  { month: "Jan 24", sales: 11114.705 },
  { month: "Feb 24", sales: 9618.332 },
  { month: "Mar 24", sales: 10175.352 },
  { month: "Apr 24", sales: 6537.606 },
  { month: "May 24", sales: 6167.26 },
  { month: "Jun 24", sales: 5364.33 },
  { month: "Jul 24", sales: 5375.801 },
  { month: "Aug 24", sales: 5631.734 },
  { month: "Sep 24", sales: 5473.467 },
  { month: "Oct 24", sales: 6367.755 },
  { month: "Nov 24", sales: 8234.928 },
  { month: "Dec 24", sales: 9431.302 },
  { month: "Jan 25", sales: 9536.301 },
  { month: "Feb 25", sales: 7947.281 },
  { month: "Mar 25", sales: 9153.06 },
  { month: "Apr 25", sales: 6264.568 },
];

const fy22_23 = [
  { month: "Jan 23", sales: 1820.577 },
  { month: "Feb 23", sales: 3822.114 },
  { month: "Mar 23", sales: 4937.779 },
];

const fy23_24 = [
  { month: "Apr 23", sales: 5478.28 },
  { month: "May 23", sales: 5084.607 },
  { month: "Jun 23", sales: 4433.22 },
  { month: "Jul 23", sales: 4163.03 },
  { month: "Aug 23", sales: 5403.164 },
  { month: "Sep 23", sales: 5349.11 },
  { month: "Oct 23", sales: 6164.12 },
  { month: "Nov 23", sales: 8372.47 },
  { month: "Dec 23", sales: 11204.912 },
  { month: "Jan 24", sales: 11114.705 },
  { month: "Feb 24", sales: 9618.332 },
  { month: "Mar 24", sales: 10175.352 },
];

const fy24_25 = [
  { month: "Apr 24", sales: 6537.606 },
  { month: "May 24", sales: 6167.26 },
  { month: "Jun 24", sales: 5364.33 },
  { month: "Jul 24", sales: 5375.801 },
  { month: "Aug 24", sales: 5631.734 },
  { month: "Sep 24", sales: 5473.467 },
  { month: "Oct 24", sales: 6367.755 },
  { month: "Nov 24", sales: 8234.928 },
  { month: "Dec 24", sales: 9431.302 },
  { month: "Jan 25", sales: 9536.301 },
  { month: "Feb 25", sales: 7947.281 },
  { month: "Mar 25", sales: 9153.06 },
  { month: "Apr 25", sales: 6264.568 },
];

const fyMonthWiseData = [
  {
    month: "Apr",
    "FY 22-23": 0,
    "FY 23-24": 5478.28,
    "FY 24-25": 6537.606,
  },
  {
    month: "May",
    "FY 22-23": 0,
    "FY 23-24": 5084.607,
    "FY 24-25": 6167.26,
  },
  {
    month: "Jun",
    "FY 22-23": 0,
    "FY 23-24": 4433.22,
    "FY 24-25": 5364.33,
  },
  {
    month: "Jul",
    "FY 22-23": 0,
    "FY 23-24": 4163.03,
    "FY 24-25": 5375.801,
  },
  {
    month: "Aug",
    "FY 22-23": 0,
    "FY 23-24": 5403.164,
    "FY 24-25": 5631.734,
  },
  {
    month: "Sep",
    "FY 22-23": 0,
    "FY 23-24": 5349.11,
    "FY 24-25": 5473.467,
  },
  {
    month: "Oct",
    "FY 22-23": 0,
    "FY 23-24": 6164.12,
    "FY 24-25": 6367.755,
  },
  {
    month: "Nov",
    "FY 22-23": 0,
    "FY 23-24": 8372.47,
    "FY 24-25": 8234.928,
  },
  {
    month: "Dec",
    "FY 22-23": 0,
    "FY 23-24": 11204.912,
    "FY 24-25": 9431.302,
  },
  {
    month: "Jan",
    "FY 22-23": 1820.577,
    "FY 23-24": 11114.705,
    "FY 24-25": 9536.301,
  },
  {
    month: "Feb",
    "FY 22-23": 3822.114,
    "FY 23-24": 9618.332,
    "FY 24-25": 7947.281,
  },
  {
    month: "Mar",
    "FY 22-23": 4937.779,
    "FY 23-24": 10175.352,
    "FY 24-25": 9153.06,
  },
];

const LineChartBlock = ({ title, data }) => (
  <div className="chart-block">
    <h3>{title}</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Sales = () => {
  return (
    <div className="sales-card">
      <h2 className="sales-title">Sales Dashboard (in KL)</h2>

      <div className="chart-grid">
        <div className="chart-block">
          <h3>FY-wise Total Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-block">
          <h3>Month-wise Overall Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthWiseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#0077cc" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-block wide">
          <h3>Grouped Month-wise Sales by FY</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fyMonthWiseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="FY 22-23" fill="#8884d8" />
              <Bar dataKey="FY 23-24" fill="#82ca9d" />
              <Bar dataKey="FY 24-25" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <LineChartBlock title="FY 2022–23 Monthly Sales" data={fy22_23} />
        <LineChartBlock title="FY 2023–24 Monthly Sales" data={fy23_24} />
        <LineChartBlock title="FY 2024–25 Monthly Sales" data={fy24_25} />
      </div>
    </div>
  );
};

export default Sales;
