const FamilyReunionPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Family Reunion</h1>
      <p className="mb-4">
        Welcome to the family reunion website! Here you can find all the information you need about the upcoming
        reunion.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Details</h2>
        <ul>
          <li>
            <strong>Date:</strong> July 15, 2024
          </li>
          <li>
            <strong>Location:</strong> Lakeside Park
          </li>
          <li>
            <strong>Time:</strong> 10:00 AM - 6:00 PM
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Activities</h2>
        <p>We have a variety of activities planned for the reunion, including:</p>
        <ul>
          <li>Games</li>
          <li>Food</li>
          <li>Music</li>
          <li>Catching up with family!</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
        <div className="dropdown">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">Get Involved</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li>
              <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Get involved
              </a>
            </li>
            <li>
              <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Donate
              </a>
            </li>
            <li>
              <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Volunteer
              </a>
            </li>
            <li>
              <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Fundraising and events
              </a>
            </li>
            <li>
              <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Partner with us
              </a>
            </li>
            <li>
              <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Teaching resources
              </a>
            </li>
            <li>
              <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Jobs
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">RSVP</h2>
        <p>Please RSVP by June 15, 2024, so we can get a headcount.</p>
        <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          RSVP Here
        </a>
      </section>
    </div>
  )
}

export default FamilyReunionPage
