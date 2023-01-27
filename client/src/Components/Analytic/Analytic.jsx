import React from 'react';
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';


import { PieChart, Pie, Cell} from 'recharts';


const pdata=[];



const getPork = async ()=>
{
    let result= await fetch('http://localhost:4500/').then((res)=>res.json()).then(data => console.log(data))
    // result= await result.json();
    console.log("shaurya");
    // pdata=result;
}




function Analytic() {
    const [user, setUser] = React.useState([]);
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    const CustomTooltip = ({ active, payload, label }) => {
        if(active)
        {
            return (
                <div
              className="custom-tooltip"
              style={{
                 backgroundColor: "#ffff",
                 padding: "5px",
                 border: "1px solid #cccc"
              }}
           >
              <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
           </div>
            )
        }
    }
    const fetchData = () => {
      return fetch("http://localhost:5000/")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }
    React.useEffect(() => {
      fetchData();
    },[])
	return (
		<>
			<h1 className="text-heading">
				Line Chart Using Rechart
			</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={user} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="price"
						stroke="black" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
            <PieChart width={700} height={700}>
          <Pie data={user} dataKey="price" namekey="name" outerRadius={250} fill="red" >
          {user.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index %     COLORS.length]}
            />
         ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend/>
        </PieChart>
            
		</>
	);
}

export default Analytic;
