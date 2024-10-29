import { customerSatisfaction, userActivity } from "../../types/report";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import { TbActivity } from "react-icons/tb";

interface TopStatsProps {
    totalSales: number;
    customerSatisfaction: customerSatisfaction;
    userActivity: userActivity;
}

const TopStats: React.FC<TopStatsProps> = ({ totalSales, customerSatisfaction, userActivity }) => {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-gray-700 mb-5">Top Stats</h1>

            <div className=" flex flex-wrap w-full items-center gap-10 justify-center">
                <StatsCard title="Total Sales" value={totalSales} growth={10} icon={<MdOutlineAttachMoney />} />
                <StatsCard title="Customer Satisfaction" value={customerSatisfaction.averageRating} growth={10} icon={<MdOutlineSentimentVerySatisfied />} />
                <StatsCard title="User Activity" value={userActivity.newUsersLastMonth} growth={-10} icon={<TbActivity />} />
            </div>
        </div>
    )
}

const StatsCard = ({ title, value, growth, icon }: {
    title: string, value: number, growth: number;
    icon: any;
}) => {
    return (
        <div className="shadow-xl hover:scale-105 hover:shadow-2xl p-5 border rounded-xl gap-4 flex-grow justify-center flex items-center w-[300px] max-w-[300px]">
            <div className="text-blue-600 text-6xl">

                {icon}
            </div>

            <div className=" flex flex-col gap-1 ">
                <h2 className="text-lg text-gray-500 font-semibold">{title}</h2>
                <h1 className="font-bold text-3xl">{value}</h1>
                <div className="flex gap-2 items-center">
                    {growth > 0 ? <FaArrowTrendUp className="text-green-500" /> : <FaArrowTrendDown className="text-red-500" />}
                    <span className={`${growth > 0 ? 'text-green-500' : 'text-red-500'}`}>{growth > 0 ? growth : growth * -1}%</span>
                    <span> from last</span>
                </div>

            </div>
        </div>
    )
}

export default TopStats
