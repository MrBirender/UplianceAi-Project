import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useSpring, animated } from "react-spring";

interface CounterHistory {
  name: string;
  count: number;
}

const Dashboard: React.FC = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  // Get counter value from Redux store
  const counter = useSelector((state: RootState) => state.counter.count);

  interface User {
    name: string;
    email: string;
    id: string;
  }

  const user: User = JSON.parse(localStorage.getItem("user") || "{}") || {
    name: "John Doe",
    email: "johndoe@example.com",
    id: "USR12345"
  };

  // Maintain counter history from local storage
  const [counterHistory, setCounterHistory] = useState<CounterHistory[]>(() => {
    const savedHistory = JSON.parse(localStorage.getItem("counterHistory") || "[]");
    return Array.isArray(savedHistory) ? savedHistory : [];
  });

  // Update counter history whenever the counter changes
  useEffect(() => {
    if (counterHistory.length === 0 || counterHistory[counterHistory.length - 1].count !== counter) {
      const newEntry = { name: (counterHistory.length + 1).toString(), count: counter };
      const updatedHistory = [...counterHistory, newEntry];
      setCounterHistory(updatedHistory);
      localStorage.setItem("counterHistory", JSON.stringify(updatedHistory));
    }
  }, [counter]);

  return (
    <animated.div style={fadeIn}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* User Profile Card */}
        <Card style={{ width: "300px", padding: "10px" }}>
          <CardContent>
            <Typography variant="h6">User Profile</Typography>
            <Typography>Name: {user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>ID: {user.id}</Typography>
          </CardContent>
        </Card>

        {/* Counter Trend Chart */}
        <Card style={{ flex: 1, padding: "10px" }}>
          <CardContent>
            <Typography variant="h6">Counter Trend</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={counterHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </animated.div>
  );
};

export default Dashboard;
