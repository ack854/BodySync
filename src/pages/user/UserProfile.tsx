import { useCallback, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Pencil } from "lucide-react";
import { UserType } from "./UserType";

export default function UserProfile() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  // const fetchUser = useCallback(async () => {
  //   try {
  //     const response = await fetch("https://localhost:7139/api/User/1");
  //     const data = await response.json();
  //     console.log(data)
  //     setUserDetails(data);
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  const fetchUser = () => {
    const data = sessionStorage.getItem("user_data");
    if (data) {
      const userData = JSON.parse(data);
      setUserDetails(userData);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleEdit = useCallback(() => {
    if (userDetails) {
      navigate("/profile/edit", { state: userDetails });
    }
  }, [navigate, userDetails]);

  const age = useMemo(() => {
    if (userDetails?.dateOfBirth) {
      const birthDate = new Date(userDetails.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      console.log(age);
      return age;
    }
    return null;
  }, [userDetails?.dateOfBirth]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-red-500">
        Failed to load user.
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-6 space-y-6">
        {/* User Card */}
        <Card className="p-6 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between space-x-4">
            <Avatar className="w-16 h-16 bg-gray-300" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{userDetails.name}</h2>
              <p className="text-gray-500">
                Age: {age} | {userDetails.gender}
              </p>
              <p className="text-gray-500">
                Weight: {userDetails.weight} kg | Height: {userDetails.height}{" "}
                cm
              </p>
            </div>
            <Button variant="outlined" onClick={handleEdit}>
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Health Metrics */}
        <Card className="p-6 shadow-lg rounded-2xl">
          <h3 className="text-lg font-medium mb-4">Health Metrics</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium">Daily Steps</p>
              <p className="text-gray-700">10,000 steps</p>
            </div>
            <div>
              <p className="text-sm font-medium">Heart Rate</p>
              <p className="text-gray-700">72 bpm</p>
            </div>
            <div>
              <p className="text-sm font-medium">Sleep</p>
              <p className="text-gray-700">7h 30m</p>
            </div>
          </div>
        </Card>

        {/* Activity Summary */}
        <Card className="p-6 shadow-lg rounded-2xl">
          <h3 className="text-lg font-medium mb-4">Activity Summary</h3>
          <div className="space-y-2">
            <p className="text-gray-700">Calories Burned: 500 kcal</p>
            <p className="text-gray-700">Workouts Completed: 3</p>
            <p className="text-gray-700">Water Intake: 2.5L</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
