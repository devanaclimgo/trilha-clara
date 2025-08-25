"use client";
import { useState } from "react";
import Image from 'next/image'

export default function DonationSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full flex justify-center py-10 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold text-muted-foreground">Apoie este projeto 💖</h2>
        <p className="text-muted-foreground mt-2">
          Se a Trilha Clara está ajudando você, considere apoiar com qualquer valor.
          Isso nos dá energia pra continuar!
        </p>

        <div className="mt-6 flex flex-col gap-3">
          {/* Botão Pix */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-full gradient-trilha rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-medium py-3"
          >
            Apoiar via Pix
          </button>
        </div>
      </div>

      {/* Modal Pix */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-gray-800">Chave Pix</h3>
            <p className="text-gray-600 mt-1">Escaneie o QR Code ou copie a chave abaixo:</p>

            {/* rever imagem QR code */}
            <Image
              src="/pix-qrcode.png"
              width={20}
              height={20}
              alt="QR Code Pix"
              className="mx-auto my-4 w-40 h-40 border rounded-lg"
            />

            {/* Chave Pix */}
            <div className="bg-gray-100 p-2 rounded-lg text-sm font-mono break-all">
              anaclimgo@gmail.com
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
