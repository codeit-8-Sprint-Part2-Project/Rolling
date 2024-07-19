import { useState } from "react";

const useDeleteData = (baseUrl: string) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const deleteData = async (endpoint: string, id: string) => {
    setIsDeleting(true);
    setDeleteError(null);

    try {
      const response = await fetch(`${baseUrl}/${endpoint}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete 요청 실패");
      }

      return true; // 삭제 성공
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      setDeleteError(errorMessage);
      console.error("Delete 실패:", errorMessage);
      return false; // 삭제 실패
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteData, isDeleting, deleteError };
};

export default useDeleteData;
