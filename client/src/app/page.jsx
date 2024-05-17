import Link from "next/link";

export default function Home() {
  return (
    <main className="px-10 py-10 flex">
      <div className="w-2/4 bg-blue-400 h-screen p-10 rounded-lg">
        <h1 className="text-white font-bold text">AmanWater</h1>
      </div>
      <div className="px-10 py-28 w-2/4">
        <div>
          <h2 className="text-xl font-bold">Login</h2>
          <p className="">Enter Your Information to Login</p>
        </div>
        <div className="mt-10 w-full ">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="m@gmail.com" className="px-5 py-1 border-2 rounded w-3/4	" />
          </div>
          <div>
            <div className="flex mt-5 gap-2">
              <label htmlFor="password">Password</label>
              <p>Forgot your Email ?</p>
            </div>
            <input type="password" placeholder="Password (8 or more characters)" className="px-5 py-1 border-2 rounded w-3/4	" />
          </div>
          <div className="cursor-pointer mt-5 w-3/4 bg-blue-400 text-center text-white rounded py-1">
            <Link href="/Dashboard">Login</Link>
          </div>
        </div>
      </div>
    </main >
  );
}

