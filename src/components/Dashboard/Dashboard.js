import { Tooltip } from 'bootstrap';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
      const data = [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ]
      return (
            <div className="dashBoad">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-6">
                                    <div className="sell-rechart">
                                          <h5 className='text-center'>Month Wish sell</h5>

                                          <LineChart width={500} height={350} data={data}>
                                          <Tooltip></Tooltip>
                                         
                                                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                                                <YAxis dataKey="sell"></YAxis>
                                                <XAxis dataKey="month"></XAxis>
                                                <Line dataKey='sell'></Line>
                                                <Legend></Legend>
                                               
                                                
                                          </LineChart>

                                    </div>



                              </div>
                              <div className="col-lg-6"></div>
                              <div className="inversment-recahrt">
                              <BarChart width={730} height={250} data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey={'mont'} />
                                     <YAxis dataKey={"investment"} />
                                     
                                    {/* <Tooltip /> */}
                                    {/* <Legend /> */}
                                    <Bar  fill="#8884d8" />
                               <Bar dataKey="uv" fill="#82ca9d" />
                                    </BarChart>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Dashboard;