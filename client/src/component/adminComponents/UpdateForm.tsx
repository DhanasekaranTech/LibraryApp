import React, { useState } from "react";
import api from "../../api/api";

type UpdateUserBookFormProps = {
  UBID: number;
  startdate: string;
  enddate: string;
  onUpdate: () => void;
  onClose: () => void;
};

const UpdateUserBookForm: React.FC<UpdateUserBookFormProps> = ({
  UBID,
  startdate,
  enddate,
  onUpdate,
  onClose,
}) => {
  const [startDate, setStartDate] = useState<string>(startdate);
  const [endDate, setEndDate] = useState<string>(enddate);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await api.patch(
        `/admin/updateUB/${UBID}`,
        {
          startdate: startDate,
          enddate: endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );

      if (response.status === 200) {
        onUpdate();
        onClose();
      } else {
        setError(response.data.message || "Failed to update record");
      }
    } catch (error) {
      setError("An error occurred while updating the record");
      console.error("Error updating record", error);
    }
  };

  return (
    <div className="update-form bg-light w-25 p-4 mb-2 shadow-lg p-3 mb-2 bg-body rounded-3">
      <h2>Update User Book</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label className="form-label">Start Date</label>
        <input
          className="form-control "
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label ">End Date</label>
        <input
          className="form-control "
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary btn-sm mt-2 mb-2"
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        className="btn btn-danger btn-sm mt-2 ms-2 mb-2"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdateUserBookForm;
