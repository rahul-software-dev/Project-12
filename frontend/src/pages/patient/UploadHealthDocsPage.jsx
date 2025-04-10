import React from 'react';
import FileUploadButton from '../../components/uploads/FileUploadButton';
import UploadedFileList from '../../components/uploads/UploadedFileList';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const UploadHealthDocsPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar role="patient" />
      <main className="dashboard-content">
        <h2>Upload Medical Documents</h2>
        <FileUploadButton />
        <UploadedFileList />
      </main>
    </>
  );
};

export default UploadHealthDocsPage;