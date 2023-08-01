import React from "react";
import ReactToPrint from "react-to-print";

const DownloadButton = ({ componentRef }) => {
  return (
    <ReactToPrint
      trigger={() => {
        return <button>Download</button>;
      }}
      content={() => componentRef.current}
    />
  );
};

export default DownloadButton;
