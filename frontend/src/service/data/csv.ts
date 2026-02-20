import api from "..";

export interface CsvDataResponse {
  message: string;
  columns: string[];
  data: Record<string, string>[];
}

export const getCsvData = async (body: FormData) => {
  const response = await api.post<CsvDataResponse>("/csv/upload", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
