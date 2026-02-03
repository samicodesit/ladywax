"use client";

interface SaveButtonProps {
  onClick: () => void;
  loading: boolean;
  saved: boolean;
}

export default function SaveButton({ onClick, loading, saved }: SaveButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={`px-6 py-3 rounded-lg font-medium transition min-h-[44px] min-w-[120px] ${
        saved
          ? "bg-green-600 text-white"
          : "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
      }`}
    >
      {loading ? "Saving..." : saved ? "Saved!" : "Save Changes"}
    </button>
  );
}
