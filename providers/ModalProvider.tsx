"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import SubscribeModal from "@/components/SusbcribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import { useEffect, useState } from "react";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </div>
  );
};

export default ModalProvider;
