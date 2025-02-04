import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { useSpring, animated } from "react-spring";

const Dashboard: React.FC = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  // Redux Counter
  const counter = useSelector((state: RootState) => state.counter.count);

  // Mock User Data
  const user = JSON.parse(localStorage.getItem("user") || "{}") || {
    name: "John Doe",
    email: "johndoe@example.com",
    id: "USR12345"
  };

  // Maintain counter history
  const [counterHistory, setCounterHistory] = useState(() => {
    const savedHistory = JSON.parse(localStorage.getItem("counterHistory") || "[]");
    return Array.isArray(savedHistory) ? savedHistory : [];
  });

  useEffect(() => {
    if (counterHistory.length === 0 || counterHistory[counterHistory.length - 1].count !== counter) {
      const newEntry = { name: (counterHistory.length + 1).toString(), count: counter };
      const updatedHistory = [...counterHistory, newEntry];
      setCounterHistory(updatedHistory);
      localStorage.setItem("counterHistory", JSON.stringify(updatedHistory));
    }
  }, [counter]);

  // Colors for Pie Chart
  const pieColors = ["#4a6fa5", "#82ca9d", "#ffc658"];

  return (
    <animated.div style={{ ...fadeIn, padding: "40px" }}>
      <Box sx={{ display: "flex", gap: "20px", height: "100%" }}>
        {/* Left Section: Profile & Line Graph (Fixed Width) */}
        <Box sx={{ flex: "0 0 30%", display: "flex", flexDirection: "column", gap: "20px" }}>
          <Card sx={{ padding: 2, backgroundColor: "#2c3e50", color: "#fff", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="inherit">User Profile</Typography>
              <Typography>Name: {user.name}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Typography>ID: {user.id}</Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: 400, backgroundColor: "#f5f8fd", boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" color="#4a6fa5">Counter Growth (Line Chart)</Typography>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={counterHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#4a6fa5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Box>

        {/* Right Section: Bar & Pie Charts (Full Width) */}
        <Box sx={{ flex: "1", display: "flex", flexDirection: "column", gap: "20px" }}>
          <Card sx={{ padding: 2, backgroundColor: "#f5f8fd", boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" color="#4a6fa5">Counter Trend (Bar Chart)</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={counterHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#4a6fa5" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card sx={{ padding: 2, backgroundColor: "#f5f8fd", boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" color="#4a6fa5">Distribution (Pie Chart)</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={counterHistory} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#4a6fa5" label>
                    {counterHistory.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </animated.div>
  );
};

export default Dashboard;
