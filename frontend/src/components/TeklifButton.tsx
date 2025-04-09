'use client';

import { useState } from 'react';
import TeklifModal from './TeklifModal';

interface TeklifButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function TeklifButton({ className, children }: TeklifButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={className}
      >
        {children}
      </button>
      <TeklifModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
} 