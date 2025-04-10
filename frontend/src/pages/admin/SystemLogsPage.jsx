import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';
import Loader from '../../components/common/Loader';

const SystemLogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('/api/admin/logs');
        const data = await response.json();
        setLogs(data);
      } catch (err) {
        console.error('Failed to fetch logs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar role="admin" />
      <main className="dashboard-content">
        <h2>System Logs</h2>
        {loading ? <Loader /> : (
          <div className="logs-container">
            {logs.map((log, index) => (
              <div key={index} className="log-entry">
                <strong>{log.timestamp}</strong>: {log.message}
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default SystemLogsPage;