import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../common';

export const report = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {

        res.status(200).json({
            status: 'success',
            data: {
                "totalSales": 125000,
                "topSellingProducts": [
                    {
                        "productID": "p1",
                        "productName": "Wireless Headphones",
                        "quantitySold": 300
                    },
                    {
                        "productID": "p2",
                        "productName": "Smartphone",
                        "quantitySold": 250
                    },
                    {
                        "productID": "p3",
                        "productName": "Laptop",
                        "quantitySold": 200
                    },
                    {
                        "productID": "p4",
                        "productName": "Smartwatch",
                        "quantitySold": 150
                    },
                    {
                        "productID": "p5",
                        "productName": "Tablet",
                        "quantitySold": 120
                    }
                ],
                "userActivity": {
                    "newUsersLastMonth": 45
                },
                "customerSatisfaction": {
                    "averageRating": 4.2
                },
                "salesByCategory": [
                    {
                        "category": "Electronics",
                        "totalRevenue": 90000
                    },
                    {
                        "category": "Accessories",
                        "totalRevenue": 20000
                    },
                    {
                        "category": "Home Appliances",
                        "totalRevenue": 15000
                    }
                ]
            },
        });
    }
);