import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Sample data for charts
  const applicationData = [
    { name: 'Jan', applications: 12 },
    { name: 'Feb', applications: 19 },
    { name: 'Mar', applications: 8 },
    { name: 'Apr', applications: 15 },
    { name: 'May', applications: 11 },
    { name: 'Jun', applications: 6 },
  ];

  const matchData = [
    { name: 'Excellent', value: 24 },
    { name: 'Good', value: 13 },
    { name: 'Fair', value: 18 },
    { name: 'Poor', value: 5 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">AutoApply Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Applications</h3>
          <p className="text-3xl font-bold text-blue-600">142</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Matches Found</h3>
          <p className="text-3xl font-bold text-green-600">87</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Success Rate</h3>
          <p className="text-3xl font-bold text-purple-600">68%</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Interviews</h3>
          <p className="text-3xl font-bold text-yellow-600">24</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Applications Over Time</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="applications" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Match Quality Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;