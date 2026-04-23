import { createContext, useContext, useState } from "react";

const EnquiryContext = createContext();

export function EnquiryProvider({ children }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  return (
    <EnquiryContext.Provider value={{ isEnquiryOpen, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  return useContext(EnquiryContext);
}