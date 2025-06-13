const SupportAtHomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Support at Home</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
        <p>
          We offer a range of services to support individuals in maintaining their independence and well-being at home.
        </p>
        <ul>
          <li>Personal Care</li>
          <li>Home Help</li>
          <li>Companionship</li>
          <li>Respite Care</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Who We Help</h2>
        <p>
          Our services are designed for individuals who may need assistance due to age, illness, disability, or other
          circumstances.
        </p>
        <ul>
          <li>Seniors</li>
          <li>Individuals with disabilities</li>
          <li>Those recovering from illness or surgery</li>
          <li>Caregivers in need of respite</li>
        </ul>
      </section>

      <section className="mb-8">
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
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>If you would like to learn more about our support at home services, please contact us.</p>
        <p>Email: support@example.com</p>
        <p>Phone: 555-123-4567</p>
      </section>
    </div>
  )
}

export default SupportAtHomePage
