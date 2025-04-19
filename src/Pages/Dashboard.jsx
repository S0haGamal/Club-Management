import React, { useEffect, useRef } from 'react';
import Sidebar from '../Components/Sidebar'; 
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const chartRef = useRef(); 
  const navigate = useNavigate()

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Membership Growth',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const recentTransactions = [
        { id: 1, name: 'John Doe', amount: '$50', date: '2023-04-01' },
        { id: 2, name: 'Jane Smith', amount: '$500', date: '2023-03-15' },
    ];

    useEffect(() => {
        const chartInstance = chartRef.current;

        return () => {
            if (chartInstance) {
                chartInstance.destroy(); 
            }
        };
    }, []);

    const handleLogout = () => {
        console.log('User logged out');
        navigate("/");
        localStorage.removeItem("user")

    };

    return (
        <div className="d-flex flex-row" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="col-2" style={{ paddingRight: '20px' }}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="col-10" style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                    <Button variant="contained" color="error" onClick={handleLogout}>
                        Log Out
                    </Button>
                </div>

                <h1 style={{ marginBottom: '20px' }}>Dashboard</h1>
                <p>Welcome to the dashboard!</p>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '20px' }}>Quick Actions</h3>
                    <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Add Member</Button>
                    <Button variant="contained" color="secondary">View Transactions</Button>
                </div>

                <div className="row" style={{ marginBottom: '20px' }}>
                    <div className="col-3" style={{ padding: '10px' }}>
                        <Card style={{ padding: '20px', textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="h5">Total Members</Typography>
                                <Typography variant="h2" style={{ color: '#1976d2' }}>150</Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-3" style={{ padding: '10px' }}>
                        <Card style={{ padding: '20px', textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="h5">Soha</Typography>
                                <Typography variant="h2" style={{ color: '#1976d2' }}>150</Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-3" style={{ padding: '10px' }}>
                        <Card style={{ padding: '20px', textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="h5">Total Revenue</Typography>
                                <Typography variant="h2" style={{ color: '#388e3c' }}>$3,000</Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-3" style={{ padding: '10px' }}>
                        <Card style={{ padding: '20px', textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="h5">Subscriptions</Typography>
                                <Typography variant="h2" style={{ color: '#d32f2f' }}>130</Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Chart */}
                {/* <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: '20px' }}>Membership Growth Chart</h3>
                    <Line ref={chartRef} data={data} />
                </div> */}

<div className='container' style={{ display:'flex' ,marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
<div className='col-6'>
<div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: '20px' }}>Membership Growth Chart</h3>
                    <Line ref={chartRef} data={data} />
                </div>
</div>

<div className='col-6'>
<div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: '20px' }}>Membership Growth Chart</h3>
                    <Line ref={chartRef} data={data} />
                </div>
</div>
</div>
                <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: '20px' }}>Recent Transactions</h3>
                    <table className="table" style={{ width: '100%', textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentTransactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td>{transaction.name}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                

                {/* <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '20px' }}>Quick Actions</h3>
                    <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Add Member</Button>
                    <Button variant="contained" color="secondary">View Transactions</Button>
                </div> */}
            </div>
        </div>
    );
};

export default Dashboard;