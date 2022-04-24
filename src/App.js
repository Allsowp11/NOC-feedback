export const App = () => {
  const formHandler = (event) => {
    event.preventDefault();
    const elements = event.target.elements
    const isim = elements.isim.value
    const soyisim = elements.soyisim.value
    const email = elements.email.value
    const problem = elements.problem.value
    window.open(
      `mailto:tahiryusufeser@nonofficialcompany.com?body=${encodeURIComponent(
          `Non-Official Company geri dönüş \nİsim: ${isim}\nSoyisim: ${soyisim}\nEmail: ${email}\n Geri_Dönüş: ${problem}`,
      )}`,
  );
  } 


  return(
  <div className="selection:bg-[#2a324b] selection:text-[#5064a9] 2xl:pt-24 xl:pt-8 pt-12">
    <div className=" inset-x-0 py-3 px-4 flex lg:flex-row lg:space-x-16 space-y-10 items-center lg:space-y-0 flex-col justify-center bg-[#f7eee5]">
        <img onClick={() => window.open("https://nonofficialcompany.com", "_blank")} className="hover:cursor-pointer hover:bg-[#cac2bb] rounded-full h-16 flex items-center" id="arrow" src="/arrow.svg" alt="" style={{transform : "rotate(-90deg)"}}/>
        <img src="/logo.png" alt="logo" className=" lg:w-[300px] lg:h-[105px] w-[200px] h-[70px] " />
    </div>
    <form onSubmit={formHandler} className=" xl:px-96 lg:px-40 md:px-10 px-5 w-full flex flex-col space-y-6 items-center justify-center md:pt-10 pt-4 ">
      <input
        type="text"
        name="isim"
        placeholder=" İsminiz"
        className="shadow-lg h-8 p-2 w-full rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b]"
        required
      />
      <input 
        type="text"  
        name="soyisim"
        placeholder=" Soyisminiz" 
        className="shadow-lg h-8 p-2 w-full rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b]"
        required
      />
      <input type="email"  
      placeholder=" example@example.com" 
      className="shadow-lg h-8 p-2 w-full rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b] "
      name="email"
      required
      />
      <textarea placeholder="yaşadığınız sorunu belirtiniz..."  className="shadow-xl w-full h-full bg-[#8da0ff] placeholder-white text-white rounded-lg p-4 border-[#8da0ff] border-2 focus:outline-none focus:border-[#2a324b]"
        rows="5" cols="10" name="problem" required style={{resize : "none",}}>
      </textarea>
      <button 
      className="rounded-full w-full text-white bg-[#8da0ff] py-3 border-2 border-[#8da0ff] hover:border-[#2a324b]">
        Gönder
      </button>
    </form>
  </div>
);

}
