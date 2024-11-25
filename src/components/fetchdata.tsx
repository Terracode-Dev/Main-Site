import React, { useState, useEffect } from "react";
import { db } from "@/firbase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";

interface ContactSubmission {
  id: string;
  nameData: string;
  emailData: string;
  messageData: string;
  services: string[];
  createdAt: Timestamp; // Firebase Timestamp
  isRead: boolean;
}

interface Column {
  key: keyof ContactSubmission | "actions";
  label: string;
  width?: string;
  render?: (submission: ContactSubmission) => React.ReactNode;
}

const ContactSubmissions: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const columns: Column[] = [
    { key: "nameData", label: "Name", width: "15%" },
    { key: "emailData", label: "Email", width: "20%" },
    {
      key: "services",
      label: "Services",
      width: "15%",
      render: (submission: ContactSubmission) => (
        <div className="max-w-xs truncate">
          {submission.services.join(", ")}
        </div>
      ),
    },
    {
      key: "messageData",
      label: "Message",
      width: "25%",
      render: (submission: ContactSubmission) => (
        <div className="max-w-xs truncate" title={submission.messageData}>
          {submission.messageData}
        </div>
      ),
    },
    {
      key: "createdAt",
      label: "Date",
      width: "15%",
      render: (submission: ContactSubmission) => formatDate(submission.createdAt),
    },
    {
      key: "actions",
      label: "Actions",
      width: "10%",
      render: (submission: ContactSubmission) => (
        <button
          onClick={() => handleMarkAsRead(submission.id, submission.isRead)}
          className={`px-3 py-1 rounded-full text-sm ${
            submission.isRead
              ? "border border-orange-400 text-orange-400"
              : "bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] text-white"
          }`}
        >
          {submission.isRead ? "Mark Unread" : "Mark Read"}
        </button>
      ),
    },
  ];

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const submissionsData: ContactSubmission[] = querySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      ) as ContactSubmission[];

      setSubmissions(submissionsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleMarkAsRead = async (
    submissionId: string,
    currentStatus: boolean
  ) => {
    try {
      const submissionRef = doc(db, "orders", submissionId);
      await updateDoc(submissionRef, {
        isRead: !currentStatus,
      });
    } catch (error) {
      console.error("Error updating read status:", error);
    }
  };

  const filteredSubmissions = submissions.filter((submission) => {
    if (filter === "unread") return !submission.isRead;
    if (filter === "read") return submission.isRead;
    return true;
  });

  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            src="/Group 1.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <h2 className="text-xl sm:text-2xl font-semibold">Contact Submissions</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full ${
              filter === "all"
                ? "bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] text-white"
                : "border border-orange-400 text-orange-400"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`px-4 py-2 rounded-full ${
              filter === "unread"
                ? "bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] text-white"
                : "border border-orange-400 text-orange-400"
            }`}
          >
            Unread
          </button>
          <button
            onClick={() => setFilter("read")}
            className={`px-4 py-2 rounded-full ${
              filter === "read"
                ? "bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] text-white"
                : "border border-orange-400 text-orange-400"
            }`}
          >
            Read
          </button>
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    style={{ width: column.width }}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.map((submission) => (
                <tr
                  key={submission.id}
                  className={`${
                    submission.isRead ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors duration-200`}
                >
                  {columns.map((column) => (
                    <td
                      key={`${submission.id}-${column.key}`}
                      className="px-6 py-4 whitespace-nowrap text-sm"
                    >
                      {column.render
                        ? column.render(submission)
                        : column.key !== "actions"
                        ? String(submission[column.key])
                        : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {filteredSubmissions.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No submissions found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;
