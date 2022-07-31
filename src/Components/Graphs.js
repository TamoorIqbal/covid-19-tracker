import React, { useEffect, useState } from 'react';
import { fetchDailyData } from './Api';

// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Bar ,Line} from 'react-chartjs-2';
import { height } from '@mui/system';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,

  BarElement,
//   PointElement,
//   Line,
  Title,
  Tooltip,
  Legend
);



const Graphs = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();

    }, [])

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Active',
                        borderColor: 'blue',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }
                        , {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null


    )
    console.log(confirmed, recovered, deaths)
    const barChart = (
        confirmed, recovered, deaths
            ? (
                <Bar
                    data={{
                        labels: ['Active', 'Recovered', 'Deaths'],
                        datasets: [
                            {
                                label: "People",
                                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                data: [confirmed.value, recovered.value, deaths.value],
                            }
                        ],
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }}
                />
            ) : null
    );

    return (
        <div style={{height:'80%',width:'80%', margin:'50px auto'}}>
            {country ? barChart : lineChart}
          
           
        </div>
    )
}

export default Graphs;