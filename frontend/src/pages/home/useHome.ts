import { useState } from "react";
import { getCsvData } from "../../service/data/csv";
import { toast } from "react-toastify";

export const useHome = () => {
  const [loading, setLoading] = useState(false);
  const [csvData, setCsvData] = useState<Record<string, string>[]>([]);
  const [csvColumns, setCsvColumns] = useState<string[]>([]);
  const [selectedColumn, setSelectedColumn] = useState<string>("");

  const handleCsvUpload = async (file: File) => {
    setLoading(true);
    setSelectedColumn("");
    setCsvData([]);
    setCsvColumns([]);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const data = await getCsvData(formData);

      if (data) {
        setCsvData(data.data);
        setCsvColumns(data.columns);
        toast.success(data.message);
      } else {
        toast.error("Failed to upload CSV.");
      }
    } catch (error) {
      toast.error("Failed to upload CSV. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectedColumn = (column: string) => {
    setSelectedColumn(column);
  };

  const onSubmit = () => {
    if (!selectedColumn) {
      toast.error("Please select a column.");
      return;
    }

    toast.success("Form submitted successfully!");
  };

  return {
    loading,
    csvData,
    handleCsvUpload,
    csvColumns,
    selectedColumn,
    handleSelectedColumn,
    onSubmit,
  };
};
