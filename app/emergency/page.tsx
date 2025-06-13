"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const EmergencyPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Emergency Resources</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Immediate Assistance</h2>
        <p>If you are in immediate danger, please call 911 or your local emergency number.</p>
        <ul className="list-disc pl-5">
          <li>Police: 911</li>
          <li>Fire Department: 911</li>
          <li>Ambulance: 911</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Mental Health Resources</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Suicide Prevention Lifeline</AccordionTrigger>
            <AccordionContent>
              <p>
                The National Suicide Prevention Lifeline provides 24/7, free and confidential support for people in
                distress, prevention and crisis resources for you or your loved ones, and best practices for
                professionals.
              </p>
              <p>Call or text 988 anytime in the US and Canada.</p>
              <a
                href="https://988lifeline.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Crisis Text Line</AccordionTrigger>
            <AccordionContent>
              <p>Text HOME to 741741 from anywhere in the US, anytime, about any type of crisis.</p>
              <a
                href="https://www.crisistextline.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </AccordionContent>
          </AccordionItem>
          {/* Add more mental health resources here */}
        </Accordion>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Other Resources</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>Domestic Violence Resources</AccordionTrigger>
            <AccordionContent>
              <p>Information and support for victims of domestic violence.</p>
              <a href="#" className="text-blue-500 hover:underline">
                Find Resources
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Substance Abuse Resources</AccordionTrigger>
            <AccordionContent>
              <p>Information and support for individuals struggling with substance abuse.</p>
              <a href="#" className="text-blue-500 hover:underline">
                Find Resources
              </a>
            </AccordionContent>
          </AccordionItem>
          {/* Add more resources here */}
        </Accordion>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Get Involved</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Get Involved</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Donate</DropdownMenuItem>
            <DropdownMenuItem>Volunteer</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Fundraising</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Fundraising and events</DropdownMenuItem>
            <DropdownMenuItem>Partner with us</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Teaching</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Teaching resources</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Jobs</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Jobs</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  )
}

export default EmergencyPage
