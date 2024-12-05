import React from 'react';

export default function NotFound() {
    return (
        <div className="flex flex-col gap-2 items-center justify-center align-center w-screen h-screen">
            <h1 className="font-bold text-[7rem] text-[#617ff3]">404</h1>
            <p className="font-bold text-[1.6rem]">Oops! Página não encontrada.</p>
            <div className="font-thin text-[1.2rem] tracking-[-1px] mb-5">
                A página que você está procurando não existe ou foi movida.
            </div>
            <a
                href="/"
                className="font-bold text-[1.2rem] text-[#fff] bg-[#617ff3] px-[40px] py-3 rounded"
            >
                Voltar para a página inicial
            </a>
        </div>
    );
}
