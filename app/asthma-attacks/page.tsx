"use client";

import React from "react";
import Image from "next/image";

export default function AsthmaAttackPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Page Header */}
      <section className="bg-green-700 py-12 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">
          First aid for an asthma attack
        </h1>
        <p className="text-lg">
          Learn about first aid for someone experiencing an asthma attack,
          including signs and symptoms and what to do in an emergency
        </p>
      </section>

      {/* What is asthma */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">What is asthma?</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <p>
            Asthma is a medical condition that affects the lungs. The tubes that
            carry air in and out of the lungs become sensitive, inflamed or
            tight. People become short of breath or feel like it is hard to
            breathe.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Asthma Explanation"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Signs and symptoms */}
      <section className="py-12 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Signs and symptoms of an asthma attack
          </h2>
          <p className="mb-2">
            You may notice some or all of the following if the person is having
            an attack:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Wheezing or difficulty breathing</li>
            <li>Unable to talk in full sentences</li>
            <li>Increased anxiety or distress and rapid breathing</li>
            <li>They may have an inhaler and try to use it</li>
          </ul>
        </div>
      </section>

      {/* First aid steps */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">
          First aid steps for someone having an asthma attack
        </h2>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>
            Help them sit in a comfortable position and stay calm. Sitting
            upright is generally best.
          </li>
          <li>
            Reassure them. If the attack becomes severe or they don’t recover,
            call 999.
          </li>
        </ol>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="First Aid Asthma Step 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="First Aid Asthma Step 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Frequently asked questions about asthma first aid
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                What kind of medication will someone with asthma use?
              </h3>
              <p>
                Someone who has asthma will normally have an inhaler that helps
                them breathe easier. It usually contains medication that makes
                the muscles relax and widen their airways.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">What does an inhaler look like?</h3>
              <p>
                It’s often blue or pink in plastic case and shaped like a tube.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">How do you use an inhaler?</h3>
              <p>
                The person may need to take slow deep breaths in through the
                mouthpiece. Give them time and space.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">When is it a major emergency?</h3>
              <ul className="list-disc list-inside mt-1">
                <li>They cannot talk, eat, or breathe</li>
                <li>Their lips are turning blue</li>
                <li>They appear drowsy or collapse</li>
                <li>You cannot find their inhaler</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">You might also want to:</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-semibold mb-2">
              Access first aid advice easily
            </h3>
            <p className="mb-2">
              Download the toolkit app for fast access to advice and guidance.
            </p>
            <a href="#" className="text-green-700 font-medium underline">
              Download first aid app
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-semibold mb-2">
              Get support for managing your wellbeing
            </h3>
            <p className="mb-2">
              Tips to manage your wellbeing when helping others.
            </p>
            <a href="#" className="text-green-700 font-medium underline">
              Support your wellbeing
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Try a first aid course</h3>
            <p className="mb-2">
              Learn more about first aid in hands-on sessions or online courses.
            </p>
            <a href="#" className="text-green-700 font-medium underline">
              Book a first aid course
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-10">
        <p className="font-semibold text-lg">
          Do you have a question about this guide?
        </p>
        <a href="#" className="text-blue-600 underline">
          Contact us
        </a>
      </section>
    </main>
  );
}
