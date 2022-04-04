// import { Tooltip } from 'bootstrap';
import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis ,} from 'recharts';
import './DashBoard.css'

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
        
         <div className="container">
              <div className="row mt-5 ">
                <div className="col-lg-6 ">
                      <h4 className='text-center mb-3'>MONTH WITH SELL</h4>

                    
                      <LineChart className='' width={600} height={350} data={data}>
                                        <Tooltip></Tooltip>
                                         
                                         <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                                          <YAxis dataKey="sell"></YAxis>
                                                <XAxis dataKey="month"></XAxis>
                                               <Line dataKey='sell'></Line>
                                                <Tooltip></Tooltip>
                                                <Legend></Legend>
                                                
                                               
                                                
                                     </LineChart> 


                
                </div>
                <div className="col-lg-6">
                      <h4 className='text-center mb-3'>INVERSMENT VS REVINIEW</h4>
                <ComposedChart width={630} height={350} data={data}>
                             <XAxis dataKey="month" />
                                                 <YAxis />
                                                <Tooltip />
                                                <Legend />
                              <CartesianGrid stroke="#f5f5f5" />
                  <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                  <Bar dataKey="month" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="investment" stroke="#ff7300" />
                        </ComposedChart> 

                </div>
          </div>
         </div>
                  
      
      );
};

export default Dashboard;