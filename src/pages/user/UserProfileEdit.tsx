import { Button, Select } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import { useLocation } from "react-router-dom";
import { UserType } from "./UserType";
import { useMemo } from "react";

const UserProfileEdit = () => {
  const location = useLocation();
  const userData = location.state as UserType;
  console.log(userData);

  const age = useMemo(() => {
      if (userData?.dateOfBirth) {
        const birthDate = new Date(userData.dateOfBirth);
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
    }, [userData?.dateOfBirth]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6">
        <Card className="p-6 shadow-lg rounded-2xl bg-white">
          {/* Profile Header */}
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16 bg-gray-300" />
            <div className="flex-1 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
            </div>
          </div>

          {/* Form Inputs - Label & Input on the Same Line */}
          <div className="mt-4 grid gap-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-600 w-1/3">
                Age:
              </label>
              <div className="w-2/3">{age}</div>
              {/* <Input type="number" value={userData.age} className="w-2/3 disabled" /> */}
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-600 w-1/3">
                Gender:
              </label>
              <Select
                className="w-2/3"
                label="Age"
                sx={{
                  height: 32,
                }}
                value={userData.gender === "Male" ? 1 : 2}
              >
                <MenuItem
                  value={1}
                  sx={{
                    height: 32,
                  }}
                >
                  Male
                </MenuItem>
                <MenuItem
                  value={2}
                  sx={{
                    height: 32,
                  }}
                >
                  Female
                </MenuItem>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-600 w-1/3">
                Weight (kg):
              </label>
              <Input type="number" value={userData.weight} className="w-2/3" />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-600 w-1/3">
                Height (cm):
              </label>
              <Input type="number" value={userData.height} className="w-2/3" />
            </div>
          </div>
          <div className="mt-10">
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              color="success"
            >
              Save
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserProfileEdit;
