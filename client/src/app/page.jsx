

export default function Home() {
  return (
   <main className="px-10 py-10 flex">
    <div className="w-2/4 bg-blue-200 h-screen p-10 rounded-lg">
      <h1 className="text-white font-bold text">AmanWater</h1>
    </div>
    <div className="px-10">
      <div>
        <h2>Login</h2>
        <p>Enter Your Information to Login</p>
      </div>
      <div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" placeholder="m@gmail.com"/>
        </div>
        <div>
          <div className="flex">
            <label htmlFor="password">Password</label>
            <p>Forgot your Email ?</p>
          </div>
          <input type="password" placeholder="Password (8 or more characters)"/>
        </div>
        <input type="button" value={"Sign In"}/>
      </div>
    </div>
   </main>
  );
}

