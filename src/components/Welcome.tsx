

const Welcome = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-6">
    <img
      src="https://beertoday.co.uk/wp-content/uploads/2021/07/Allsopps-pint-glass.jpg"
      alt="Welcome to Beer Lovers"
      className="w-full max-w-md rounded-lg shadow-lg"
    />
    <h1 className="text-4xl font-bold text-yellow-900">
      Welcome Beer Enthusiasts!
    </h1>
    <p className="text-lg text-gray-700">
      Discover new beers, find your favorites, and explore the world of craft brewing with us.
    </p>
  </div>
  )
}

export default Welcome
