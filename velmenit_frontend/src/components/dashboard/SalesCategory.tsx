import { salesCategory } from '../../types/report';
import ReactApexChart from 'react-apexcharts';

interface SalesCategoryProps {
    salesCategory: salesCategory[];
}

const SalesCategory: React.FC<SalesCategoryProps> = ({ salesCategory }) => {
    const series = salesCategory.map(category => category.totalRevenue);

    const options = {
        chart: {
            type: 'donut' as const,
            height: '100%', // Set height to fill the container
        },
        colors: ['#008FFB', '#00E396', '#FEB019'],
        dataLabels: {
            enabled: true,
        },
        legend: {
            show: true,
            position: 'bottom' as const,
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (val: number) => `$${val}`,
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%', // You can adjust this based on your design
                },
            },
        },
        labels: salesCategory.map(category => category.category),
        responsive: [
            {
                breakpoint: 600, // Adjust settings for small screens
                options: {
                    plotOptions: {
                        pie: {
                            donut: {
                                size: '50%', // Adjust donut size for smaller screens
                            },
                        },
                    },
                    legend: {
                        position: 'right', // Move legend to the right on smaller screens
                    },
                },
            },
        ],
    };

    return (
        <div className='p-4 md:p-10'> {/* Adjust padding for different screen sizes */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">Sales by Category</h1>
            <div style={{ width: '100%', height: '350px' }}> {/* Set a height for the container */}
                <ReactApexChart options={options} series={series} type="donut" height="100%" />
            </div>
        </div>
    );
};

export default SalesCategory;
