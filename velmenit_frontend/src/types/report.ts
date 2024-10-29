export interface salesCategory {
    category: string;
    totalRevenue: number;
}

export interface topSellingProduct {
    productID: string;
    productName: string;
    quantitySold: number;
}

export interface customerSatisfaction {
    averageRating: number;
}

export interface userActivity {
    newUsersLastMonth: number;
}

export interface Report {
    totalSales: number;
    customerSatisfaction: customerSatisfaction;
    salesByCategory: salesCategory[];
    topSellingProducts: topSellingProduct[];
    userActivity: userActivity;

}