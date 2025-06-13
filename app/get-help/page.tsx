import Link from "next/link"

export default function GetHelp() {
  return (
    <div>
      <div className="relative group">
        <button className="text-gray-800 hover:text-red-600">Get involved</button>
        <div
          className="fixed left-0 right-0 mx-auto top-[104px] w-[70vw] bg-white shadow-lg hidden group-hover:block z-50"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="px-8 py-8 grid grid-cols-3 gap-8">
            <div>
              <ul className="space-y-6">
                <li>
                  <Link href="#" className="text-gray-800 hover:text-red-600">
                    Get involved
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-800 hover:text-red-600">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-800 hover:text-red-600">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-6">
                <li>
                  <Link href="#" className="text-gray-800 hover:text-red-600">
                    Fundraising and events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-800 hover:text-red-600">
                    Partner with us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-800 hover:text-red-600">
                    Teaching resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-6">
                <li>
                  <Link href="#" className="text-gray-800 hover:text-red-600">
                    Jobs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
