import { useState, useEffect } from "react"
import { Report } from "../types/report";
import TopStats from "../components/dashboard/TopStats";
import SalesCategory from "../components/dashboard/SalesCategory";
import TopSelling from "../components/dashboard/TopSelling";

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Dashboard = () => {
    const [report, setReport] = useState<Report>()

    const fetchReport = async () => {
        fetch('http://localhost:2000/api/v1/dashboard/report').then((response) => {
            return response.json()
        }).then((data) => {
            setReport(data.data)
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        fetchReport()
    }, [])

    const exportToPDF = () => {
        const input = document.getElementById('report-container');
        if (input) {
            html2canvas(input).then((canvas: HTMLCanvasElement) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 190;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
                pdf.save('report.pdf');
            });
        }
    };

    return (
        <div className="flex flex-col items-center mb-4">
            <div id="report-container" className="w-full max-w-[1100px]">
                {report && (
                    <TopStats totalSales={report.totalSales} customerSatisfaction={report.customerSatisfaction} userActivity={report.userActivity} />
                )}
                {report && (
                    <SalesCategory salesCategory={report.salesByCategory} />
                )}
                {
                    report && (
                        <TopSelling topSellingProducts={report.topSellingProducts} />
                    )
                }


            </div>
            <button onClick={exportToPDF} className="mx-auto bg-blue-600 py-3 px-5 hover:bg-blue-700 transition-all duration-150 rounded-full text-white font-semibold hover:scale-105 ">Export as PDF</button>
        </div>
    )
}

export default Dashboard
