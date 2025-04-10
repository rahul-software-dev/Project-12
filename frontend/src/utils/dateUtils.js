export const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString();
  
  export const calculateAge = (dob) => {
    const diff = Date.now() - new Date(dob).getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  };
  
  export const relativeTime = (dateStr) => {
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };