import Image from "next/image";

const Signin = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen overflow-hidden container mx-auto">


      <div className="
        w-full md:w-1/2
        bg-blue-50
        p-10 sm:p-16
        flex flex-col
        justify-center
      ">
        <h1 className="text-primary text-[28px] sm:text-[32px] font-krona mb-4">
          Noda
        </h1>

        <p className="text-secondary font-primary text-[16px] sm:text-[20px] opacity-[0.5]">
          Stop wasting time with unproductive meetings and
        </p>
        <p className="text-secondary font-primary text-[16px] sm:text-[20px] opacity-[0.5]">
          improve the way you collaborate
        </p>

        <div className="mt-10 sm:mt-16">
          <Image
            src="/talk.png"
            alt="signup-illustration"
            width={600}
            height={600}
            className="w-full max-w-[400px] sm:max-w-[500px] mx-auto"
          />
        </div>
      </div>

      
      <div className="
        w-full md:w-1/2
        bg-white
        flex flex-col
        justify-center
        items-center
        px-6 sm:px-10 lg:px-20
        py-16
      ">
        <h2 className="text-primary text-[22px] sm:text-[26px] font-bold mb-8 font-primary">
          Sign In
        </h2>

        <form className="flex flex-col items-center gap-8 w-full" autoComplete="off">

          
          <div className="relative w-[350px]">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder=" "
              className="
                block w-full
                px-3 pt-4 pb-2.5
                text-sm text-gray-900
                bg-transparent
                border border-gray-400 rounded-lg
                appearance-none
                focus:outline-none focus:ring-0 focus:border-blue-600
                peer font-primary
                autofill:bg-transparent
              "
            />
            <label
              htmlFor="username"
              className="
                absolute text-sm text-gray-500
                duration-300 transform -translate-y-4 scale-75
                top-2 z-10 bg-white px-2 start-3
                font-primary

                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:scale-100

                peer-focus:top-2
                peer-focus:-translate-y-4
                peer-focus:scale-75
                peer-focus:text-blue-800

                peer-autofill:top-2
                peer-autofill:-translate-y-4
                peer-autofill:scale-75
              "
            >
              Username
            </label>
          </div>

      
          <div className="relative w-[350px]">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder=" "
              className="
                block w-full
                px-3 pt-4 pb-2.5
                text-sm text-gray-900
                bg-transparent
                border border-gray-400 rounded-lg
                appearance-none
                focus:outline-none focus:ring-0 focus:border-blue-600
                peer font-primary
                autofill:bg-transparent
              "
            />
            <label
              htmlFor="password"
              className="
                absolute text-sm text-gray-500
                duration-300 transform -translate-y-4 scale-75
                top-2 z-10 bg-white px-2 start-3
                font-primary

                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:scale-100

                peer-focus:top-2
                peer-focus:-translate-y-4
                peer-focus:scale-75
                peer-focus:text-blue-600

                peer-autofill:top-2
                peer-autofill:-translate-y-4
                peer-autofill:scale-75
              "
            >
              Password
            </label>
          </div>

         
          <button
            type="submit"
            className="
              w-full max-w-[350px]
              bg-primary text-white
              py-3 rounded-lg
              font-primary font-semibold
              hover:opacity-90 transition
            "
          >
            Sign In
          </button>
        </form>

    
        <div className="flex items-center gap-4 text-gray-500 text-sm my-6 font-primary">
          <span className="w-26 h-px bg-gray-300"></span>
          <span>or Sign In with</span>
          <span className="w-26 h-px bg-gray-300"></span>
        </div>

   
        <div className="flex gap-6 mb-8 font-primary">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center shadow">
            <Image src="/apple.png" alt="Apple" width={24} height={24} />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center shadow">
            <Image src="/google.png" alt="Google" width={24} height={24} />
          </div>
        </div>

   
        <p className="text-gray-500 text-sm font-primary">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>

      <div className="hidden lg:block">
        <img src="/sideline.png" alt="Decorative Bottom" className="w-20 h-screen" />
      </div>

    </div>
  );
};

export default Signin;
