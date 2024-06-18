export const ChatIntro = ()=>{
    return(
        // chat intro 
        <div className="bg-[rgb(248,249,250)] flex flex-col items-center justify-center h-full border-b-[6px] border-[#4ADF83]">
            <img className="w-[250px] h-auto" src="https://whatsapp-clone-web.netlify.app/static/media/intro-connection-light.5690d473.jpg" alt="" />
            <h1 className="text-[32px] text-[#525252] font-normal mt-[30px]">Mantenha seu celular conectado</h1>
            <h2 className="text-[14px] text-[#777] mt-5 leading-[20px] text-center">O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi</h2>
        </div>
    )
}