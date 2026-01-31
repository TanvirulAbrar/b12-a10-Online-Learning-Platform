import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-purple-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-ping"></div>
        </div>
      </div>
      <p className="text-sm font-bold text-slate-500 dark:text-slate-400 animate-pulse uppercase tracking-widest">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
