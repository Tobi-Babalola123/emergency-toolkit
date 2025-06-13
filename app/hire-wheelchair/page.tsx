const HireWheelchairPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Hire a Wheelchair</h1>
      <p className="mb-4">
        Welcome to our wheelchair hire service. We offer a range of wheelchairs to suit your needs, whether it's for
        short-term or long-term use.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Wheelchair Options</h2>
        <p>We have a variety of wheelchairs available, including:</p>
        <ul className="list-disc list-inside">
          <li>Standard Wheelchairs</li>
          <li>Lightweight Wheelchairs</li>
          <li>Electric Wheelchairs</li>
          <li>Bariatric Wheelchairs</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How to Hire</h2>
        <ol className="list-decimal list-inside">
          <li>Browse our selection of wheelchairs.</li>
          <li>Select the wheelchair that meets your needs.</li>
          <li>Choose your rental period.</li>
          <li>Provide your contact and delivery information.</li>
          <li>Make your payment.</li>
          <li>We will deliver the wheelchair to your specified location.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
        <p>
          Our wheelchair hire prices vary depending on the type of wheelchair and the rental period. Please contact us
          for a quote.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>If you have any questions or would like to book a wheelchair, please contact us:</p>
        <p>Email: hire@example.com</p>
        <p>Phone: 01234 567890</p>
      </section>
    </div>
  )
}

export default HireWheelchairPage
