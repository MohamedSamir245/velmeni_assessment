import { topSellingProduct } from '../../types/report';
import ReactApexChart from 'react-apexcharts';

interface TopSellingProps {
    topSellingProducts: topSellingProduct[];
}

const TopSelling: React.FC<TopSellingProps> = ({ topSellingProducts }) => {
    const series = [
        {
            name: 'Total Revenue',
            data: topSellingProducts.map(product => product.quantitySold),
        },
    ];

    const options = {
        chart: {
            type: 'bar' as const,
            height: '100%', // Use 100% to fill the parent container
        },
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
        plotOptions: {
            bar: {
                columnWidth: '20%',
                distributed: true,
            },
        },
        dataLabels: {
            enabled: true,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: topSellingProducts.map(product => product.productName),
            labels: {
                style: {
                    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
                    fontSize: '14px', // Adjust font size for responsiveness
                },
            },
        },
        responsive: [
            {
                breakpoint: 600, // Adjust settings for small screens
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '50%', // Adjust column width for smaller screens
                        },
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '12px', // Smaller font size
                            },
                        },
                    },
                },
            },
        ],
    };

    return (
        <div className='p-4 md:p-10'> {/* Adjust padding for different screen sizes */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">Top Selling Products</h1>
            <div style={{ width: '100%', height: '350px' }}> {/* Set a height for the container */}
                <ReactApexChart options={options} series={series} type="bar" height="100%" />
            </div>
        </div>
    );
};

export default TopSelling;
