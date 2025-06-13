"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import { FaBookOpen, FaLeaf, FaHandsHelping } from "react-icons/fa"; // or any icons you prefer
import {
  FaTools,
  FaClipboardList,
  FaRegFileAlt,
  FaDonate,
  FaGift,
  FaShoppingBag,
  FaRegCreditCard,
  FaMobileAlt,
} from "react-icons/fa";
import {
  FaFire,
  FaSadTear,
  FaHandHoldingMedical,
  FaFistRaised,
  FaBrain,
  FaBriefcase,
  FaWind,
  FaGlobeAsia,
} from "react-icons/fa";
import { Menu, X, Search, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative h-auto md:min-h-[70vh] lg:min-h-[70vh] w-full overflow-hidden">
        {/* VIDEO for Desktop */}
        <div className="hidden md:block absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/crisisaid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* IMAGE for Mobile */}
        <div className="block md:hidden">
          <Image
            src="/victim.webp"
            alt="Emergency Aid"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CARD CONTENT */}
        <div className="relative z-10 mb-4 flex flex-col md:absolute md:top-0 md:left-0 md:h-full md:flex md:items-start md:justify-center md:pl-10 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white p-6 md:max-w-md shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            In an emergency, every second counts
          </h1>
          <p className="mb-6 text-base md:text-lg">
            Know what to do, stay calm, act fast, and help yourself or someone
            else. From emotional crises to physical emergencies, we’ve got you
            covered.
          </p>
          <Link href="/first-aid-toolkit">
            <button className="bg-white text-teal-600 px-6 py-3 font-semibold hover:bg-coral-200 flex items-center transition-transform duration-300 hover:scale-105">
              ACCESS TOOLKIT
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* Gaza Crisis Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gaza Crisis Left */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-gray-600 uppercase tracking-wide">
                  PANIC ATTACK?
                </span>
              </div>
              <Image
                src="/panic3.webp?height=200&width=400"
                alt="Gaza crisis"
                width={400}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-4">
                Here’s what to do when it hits: stay grounded, breathe, and get
                help.
              </h2>
              <button className="bg-red-600 text-white px-6 py-2 font-semibold hover:bg-red-700">
                LEARN STEPS
              </button>
            </div>

            {/* Gaza Crisis Right */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-gray-600 uppercase tracking-wide">
                  DOMESTIC ABUSE SITUATION?
                </span>
              </div>
              <Image
                src="/domestic.webp?height=200&width=400"
                alt="Gaza health system"
                width={400}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-4">
                Your safety matters. Find safe steps to take and where to turn.
              </h2>
              <button className="bg-red-600 text-white px-6 py-2 font-semibold hover:bg-red-700">
                GET HELP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Give and Get Help Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Give and get help
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700 text-white p-6">
              <h3 className="text-lg font-semibold mb-3">Spread Awareness</h3>
              <p className="text-sm">
                Share a link, post about it — help someone in silence find
                support.
              </p>
            </div>
            <div className="bg-slate-700 text-white p-6">
              <h3 className="text-lg font-semibold mb-3">
                Volunteer Info Contributors
              </h3>
              <p className="text-sm">
                Join our growing list of people helping curate helpful, verified
                guides.
              </p>
            </div>
            <div className="bg-slate-700 text-white p-6">
              <h3 className="text-lg font-semibold mb-3">Submit a Story</h3>
              <p className="text-sm">
                Share what worked for you in a crisis — you could save a life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">What we do</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">
                In Your Moment of Need
              </h3>
              <p className="text-gray-600">
                From emotional breakdowns to financial emergencies, we help you
                act wisely and quickly.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Support Others</h3>
              <p className="text-gray-600">
                If you’re in a position to help, explore resources to guide and
                support others in crisis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Appeals Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <FaGlobeAsia className="w-5 h-5 text-green-600" />
            Our Toolkits: Real-Life Crisis Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Link
                href="#"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <FaGlobeAsia className="w-4 h-4 mr-2" />
                Myanmar Earthquake Appeal
              </Link>
              <Link
                href="#"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <FaFire className="w-4 h-4 mr-2" />
                Fire Outbreak
              </Link>
              <Link
                href="#"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <FaSadTear className="w-4 h-4 mr-2" />
                Grief & Loss
              </Link>
              <Link
                href="#"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <FaHandHoldingMedical className="w-4 h-4 mr-2" />
                First Aid Basics
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="#"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <FaFistRaised className="w-4 h-4 mr-2" />
                Abuse & Domestic Violence
              </Link>
              <Link
                href="#"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <FaBrain className="w-4 h-4 mr-2" />
                Mental Health Crisis
              </Link>
              <Link
                href="#"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <FaBriefcase className="w-4 h-4 mr-2" />
                Job Loss
              </Link>
              <Link
                href="#"
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                <FaWind className="w-4 h-4 mr-2" />
                Natural Disasters
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Red Section - Bargains and Gifts */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <FaTools className="w-5 h-5" />
            Download or Save Emergency Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaClipboardList className="w-4 h-4 mr-2" />
                Printable Checklists
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaRegFileAlt className="w-4 h-4 mr-2" />
                Quick-Action Cards
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaDonate className="w-4 h-4 mr-2" />
                Donate to a charity shop
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaGift className="w-4 h-4 mr-2" />
                Explore our Kindness Gifted range
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaShoppingBag className="w-4 h-4 mr-2" />
                Shop pre-loved online
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaRegCreditCard className="w-4 h-4 mr-2" />
                Buy a charity shop gift card
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaMobileAlt className="w-4 h-4 mr-2" />
                Phone Background Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teal Section - First Aid */}
      <section className="py-12 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Learn, Act, Save
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaBookOpen className="w-4 h-4 mr-2" />
                What to Say in a Crisis
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaLeaf className="w-4 h-4 mr-2" />
                Grounding Techniques You Can Practice Now
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <FaHandsHelping className="w-4 h-4 mr-2" />
                How to Help Someone Having a Panic Attack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gray Section - Wellbeing */}
      <section className="py-12 bg-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Take Care of Yourself
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Breathing & Grounding Tools
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                When to Call for Help
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Talking to Someone Safely
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Five ways to improve your wellbeing
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Let's talk about loneliness
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Coping with stress
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Blue Section - Get Help */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Get Help or Know Where to Turn
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Find a hotline (country-specific)
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                What to do in an emergency
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Safe places near you (PDF/download)
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Signal for help (in silent situations)
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Help for refugees
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-200 flex items-center"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                What to do in an emergency
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
