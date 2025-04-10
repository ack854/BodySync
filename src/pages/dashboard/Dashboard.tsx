import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { HeartPulse, Flame, Footprints, User } from "lucide-react";
import { Card } from "../components/ui/Cards";
import Drawer from "../components/ui/Drawer";
import { motion } from "framer-motion";
import "../../App.css"

const healthData = [
  { day: "Mon", steps: 5000, calories: 220, heartRate: 75 },
  { day: "Tue", steps: 7000, calories: 280, heartRate: 78 },
  { day: "Wed", steps: 6500, calories: 260, heartRate: 76 },
  { day: "Thu", steps: 8000, calories: 300, heartRate: 80 },
  { day: "Fri", steps: 7500, calories: 290, heartRate: 77 },
  { day: "Sat", steps: 9000, calories: 320, heartRate: 82 },
  { day: "Sun", steps: 10000, calories: 350, heartRate: 85 },
];

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="p-4 sm:p-6 bg-gray-100 min-h-screen app-wrapper">
        {/* Flexbox to align items properly */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white mb-4 text-center sm:text-left">
            Dashboard
          </h2>
          <User
            className="w-8 h-8 bg-[#117092] rounded-[42px] text-white cursor-pointer"
            onClick={() => setIsOpen(true)}
          />{" "}
          {/* Icon aligned to the end */}
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Card className="p-4 flex items-center gap-4">
              <HeartPulse className="text-red-500 w-10 h-10" />
              <div>
                <p className="text-gray-600 text-sm sm:text-base">Heart Rate</p>
                <h3 className="text-lg sm:text-xl font-semibold">75 bpm</h3>
              </div>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Card className="p-4 flex items-center gap-4">
              <Flame className="text-orange-500 w-10 h-10" />
              <div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Calories Burned
                </p>
                <h3 className="text-lg sm:text-xl font-semibold">280 kcal</h3>
              </div>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Card className="p-4 flex items-center gap-4">
              <Footprints className="text-blue-500 w-10 h-10" />
              <div>
                <p className="text-gray-600 text-sm sm:text-base">Steps</p>
                <h3 className="text-lg sm:text-xl font-semibold">7,000</h3>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-lg shadow p-4 mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center sm:text-left">
            Weekly Health Trends
          </h3>
          <div className="w-full h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="steps"
                  stroke="#3182ce"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="calories"
                  stroke="#f56565"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
