"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ToolkitPage() {
  return (
    <main className="font-sans">
      <Header />
      {/* Hero Banner */}
      <section className="bg-green-700 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Master Emergency Response Skills</h1>
        <p className="mt-2">
          Learn the essential tools and techniques to stay calm and take action
          in critical moments.
        </p>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Stay Prepared Anywhere</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Learn at your pace</li>
            <li>Accessible on all devices</li>
            <li>No prior experience needed</li>
            <li>Designed for all age groups</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Respond Safely and Smartly
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Know how to assess danger</li>
            <li>Stay calm under pressure</li>
            <li>Protect yourself while helping others</li>
          </ul>
        </div>
      </section>

      {/* Online Skills List */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Learn Key Emergency Response Skills
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {[
              "Asthma Attacks",
              "Panic Attacks",
              "Physical Injuries",
              "Burns & Scalds",
              "Choking",
              "Seizures",
              "Heart Attack",
              "Emotional Trauma",
              "Fainting",
              "Allergic Reaction",
            ].map((skill, idx) => {
              const slug = skill.toLowerCase().replace(/ & | /g, "-");

              return (
                <Link key={idx} href={`/skills/${slug}`}>
                  <div className="bg-white p-4 rounded shadow text-green-700 font-medium hover:underline hover:text-green-900 transition-colors duration-200 cursor-pointer">
                    {skill}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Ways to Learn */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Other Ways to Learn Emergency Response
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Other Ways to Learn and Practice",
              desc: "Real-life scenarios to watch and learn how to respond.",
              btn: "Watch the videos",
            },
            {
              title: "Interactive Quizzes",
              desc: "Test your emergency knowledge in real time.",
              btn: "Take a Quiz",
            },
            {
              title: "Community Workshops",
              desc: "Free, local workshops on emergency preparedness.",
              btn: " Find a Workshop",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4">{item.desc}</p>
              <button className="text-green-600 font-medium hover:underline">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Resources for Specific Groups */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Teach and support others
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">
                Emergency Skills for Children & Teens
              </h3>
              <p>
                Age-appropriate resources to teach younger ones how to stay
                safe.
              </p>
              <button className="mt-4 text-green-600 hover:underline font-medium">
                Teach Children
              </button>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">
                Emergency Teaching Kit for Schools
              </h3>
              <p>Printable kits and presentations for school programs.</p>
              <button className="mt-4 text-green-600 hover:underline font-medium">
                Download Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Help Others Stay Prepared</h2>
        <button className="bg-red-600 text-white py-3 px-6 rounded-xl hover:bg-red-700">
          SUPPORT EMERGENCY EDUCATION
        </button>
      </section>
      <Footer />
    </main>
  );
}
