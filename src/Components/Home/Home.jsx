function Home(){
    return(<>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
         I'm your pocket assistant. Let's hit the gym!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>);
}

export default Home;