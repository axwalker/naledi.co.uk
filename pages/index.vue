<template>
  <div>
    <!-- <span class="sm:hidden">xs</span>
    <span class="hidden sm:block md:hidden">sm</span>
    <span class="hidden md:block lg:hidden">md</span>
    <span class="hidden lg:block">lg</span> -->

    <!-- Leader -->
    <div class="relative">
      <main
        class="relative flex items-center px-4 pt-16 pb-10 mx-auto space-x-10 md:justify-center max-w-7xl sm:pt-12"
      >
        <div
          class="flex flex-col md:text-center md:items-center md:ml-6 md:w-7/12 lg:w-1/2"
        >
          <h1
            class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            <span class="block">Naledi Hollbruegge</span>
            <span class="block text-primary-500"> Analytics Consultant </span>
          </h1>
          <p class="max-w-md mt-3 text-base text-gray-500 md:mt-5 md:max-w-3xl">
            Collect, process, analyse and present data - from supporting every
            day business decisions to fuelling global change.
          </p>
          <div
            class="max-w-md mt-5 sm:flex md:justify-center md:mt-8 md:text-sm lg:text-base"
          >
            <div
              class="transform shadow rounded-3xl hover:-translate-x-0.5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <nuxt-link
                to="#portfolio"
                class="flex items-center justify-start w-full px-8 py-3 font-medium text-white border border-transparent rounded-3xl bg-primary-500 hover:bg-primary-500 md:py-4 md:text-lg md:px-10"
              >
                See my portfolio
              </nuxt-link>
            </div>
            <div
              class="mt-3 transform shadow rounded-3xl sm:mt-0 sm:ml-3 transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <nuxt-link
                to="#contact"
                class="flex items-center justify-start w-full px-8 py-3 font-medium bg-white border border-primary-100 rounded-3xl text-primary-600 md:py-4 md:text-lg md:px-10"
              >
                Get in touch
              </nuxt-link>
            </div>
          </div>
        </div>
      </main>

      <!-- Services -->
      <div id="services" class="relative pt-12 pb-24">
        <div class="w-full px-4 mx-auto sm:px-6 md:max-w-screen-xl lg:px-8">
          <div
            class="grid grid-cols-1 gap-10 text-left md:grid-cols-3 md:gap-20"
          >
            <div v-for="service in services" :key="service.name">
              <div>
                <img :src="service.image" class="w-32 h-32 -ml-4" />
                <div class="mt-5">
                  <h5
                    class="text-xl font-medium leading-6 text-left text-gray-900"
                  >
                    {{ service.name }}
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About me -->
    <div id="about-me" class="relative bg-primary-700">
      <div
        class="relative h-56 bg-primary-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
      >
        <img
          class="object-cover object-right w-full h-full"
          src="naledi.png"
          alt="Support team"
        />
        <div
          class="absolute top-0 bottom-0 left-0 right-0 opacity-25 bg-primary-500"
        ></div>
      </div>
      <div
        class="relative max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16"
      >
        <div class="md:ml-auto md:w-1/2 md:pl-10">
          <h2
            class="mt-2 text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10"
          >
            About me
          </h2>
          <p class="mt-3 leading-7 text-primary-50 text-md">
            I am Naledi, a consulting data analyst and social researcher
            passionate about working with organisations that want to make
            effective use of their data; from the first ideas around what you
            want to measure and how to capture data accurately, through data
            preparation, analysis and management, all the way to impactful
            presentation of insights. I can support each step of the process to
            enable your organisation in making evidence-driven decisions or
            share insights with new audiences. I also offer training in Tableau,
            Alteryx, CommCare, Research Methods and Data Literacy.
          </p>
          <p class="mt-3 leading-7 text-primary-50 text-md">
            I am available for short-term freelancing projects or on longer-term
            consulting contracts.
          </p>
        </div>
      </div>
    </div>

    <!-- Portfolio -->
    <div id="portfolio" class="pt-6 bg-white mt-14">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h3
            class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Portfolio
          </h3>
          <p class="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            A sample of my client work and personal projects
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap mt-14">
      <div
        v-for="project in projects"
        :key="project.image"
        :style="`background-image: url('${project.image}')`"
        class="w-full h-64 mx-4 my-2 bg-cover rounded-lg shadow-md sm:w-6/12 md:w-4/12 lg:w-3/12 sm:m-0 sm:shadow-none sm:rounded-none"
        @click="project.showCaption = true"
        @mouseover="project.showCaption = true"
        @mouseleave="project.showCaption = false"
      >
        <transition
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          enter-active-class="transition duration-150"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          leave-active-class="transition duration-300"
        >
          <div v-if="project.showCaption" class="relative w-full h-full">
            <a
              :href="project.href"
              target="_blank"
              class="absolute w-full h-full"
            >
              <div
                class="absolute w-full h-full rounded-lg bg-primary-700 opacity-90 sm:rounded-none"
              ></div>
              <div
                class="absolute z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center sm:px-6"
              >
                <h5 class="text-lg font-bold leading-6 text-white sm:text-2xl">
                  {{ project.client }}
                </h5>

                <p class="mt-2 text-base font-light leading-6 text-white">
                  {{ project.summary }}
                </p>
                <span
                  class="mt-5 text-white text-sm border border-solid px-4 py-1.5 rounded-md"
                >
                  View
                </span>
              </div>
            </a>
          </div>
        </transition>
      </div>
    </div>

    <!-- Contact -->
    <div id="contact" class="pt-20 bg-white">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h3
            class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Get in touch
          </h3>
          <p class="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            Send me a message and I'll get back to you as soon as possible
          </p>
        </div>
      </div>
    </div>

    <div class="my-8 sm:shadow-lg sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="px-4 py-8 bg-white sm:border sm:border-gray-100 sm:shadow sm:rounded-lg sm:px-10"
      >
        <form action="https://formspree.io/mlenykay" method="POST">
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Name
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="name"
                name="name"
                type="text"
                required
                class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="email"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Email address
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="email"
                name="_replyto"
                type="email"
                required
                class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="message"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Message
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              ></textarea>
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full shadow-sm rounded-3xl">
              <button
                type="submit"
                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-3xl bg-primary-500 hover:bg-primary-400 focus:outline-none focus:border-primary-400 focus:shadow-outline-primary active:bg-primary-400"
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          name: 'Collect',
          description:
            "I'm trained and highly experienced in questionnaire design, with a background in social psychology, and have worked with SNAP, Qualtrics, Commcare and Airtable to collect and process data.",
          image: '/collect.svg',
        },
        {
          name: 'Process',
          description:
            'I am an Alteryx Designer Advanced Certified analyst. I offer support on existing workflows, creation of new processes and training at all levels covering data transformation, unification, spatial and predictive analysis, and more.',
          image: '/process.svg',
        },
        {
          name: 'Visualise',
          description:
            'I am a Tableau Desktop Certified Professional who has worked with a diverse range of subjects. I have experience creating interactive tools and static infographics in Tableau that can be consumed online or in print.',
          image: '/visualise.svg',
        },
      ],

      projects: [
        {
          showCaption: false,
          client: 'Equal Measures 2030',
          summary: 'How well are countries meeting the needs of girls?',
          image: '1.jpg',
          href: 'https://data.em2030.org/key-groups/girls/',
        },
        {
          showCaption: false,
          client: 'Operation Fistula',
          summary:
            'Visualising estimates of obstetric fistula prevalence based on an academic research paper.',
          image: '2.jpg',
          href:
            'https://public.tableau.com/profile/operation.fistula6589#!/vizhome/EstimatedPrevalenceofObstetricFistulain19Sub-SaharanAfricanCountries/Estimateprevalence',
        },
        {
          showCaption: false,
          client: 'Personal Project',
          summary:
            'Using Mapbox and Tableau to raise awareness of migrant deaths. Awarded “Viz of the Day”.',
          image: '3.png',
          href:
            'https://public.tableau.com/profile/naledi.hollbruegge#!/vizhome/MigrantdeathsanddisappearancesintheMediterranean/MigrantsintheMediterranean',
        },
        {
          showCaption: false,
          client: 'Capgemini',
          summary:
            'Provided design and technical guidance to the team visualising the results of the IT-trends survey.',
          image: '4.jpg',
          href:
            'https://public.tableau.com/profile/capgeminide#!/vizhome/IT-Trends_2018/ITTrendsStory',
        },
        {
          showCaption: false,
          client: 'Operation Fistula',
          summary:
            'Alteryx macro that uses an API to extract data from Airtable.',
          image: '5.png',
          href:
            'https://nalediholly.wordpress.com/2019/02/07/airtable-and-alteryx/',
        },
        {
          showCaption: false,
          client: 'Direct Relief',
          summary:
            'Interactive tool to explore where clinical data collection about obstetric fistula is most successful. ',
          image: '6.png',
          href:
            'https://public.tableau.com/profile/operation.fistula6589#!/vizhome/Engagementinthefistulasector/Engagement',
        },
        {
          showCaption: false,
          client: 'Equal Measures 2030 ',
          summary:
            'Interactive visualisation exploring if countries are making progress towards more gender equality. ',
          image: '7.png',
          href:
            'https://data.em2030.org/2020-index-projections/data-explorer-global/',
        },
        {
          showCaption: false,
          client: 'Personal Project',
          summary:
            'Interactive tool to explore results from a survey looking at attitudes to discrimination.',
          image: '8.png',
          href:
            'https://public.tableau.com/profile/naledi.hollbruegge#!/vizhome/PerceptionsofdiscriminationintheUSin2014/Perceptionsofdiscriminationsurveyresults',
        },
        {
          showCaption: false,
          client: 'Personal Project',
          summary:
            'Mobile-optimised visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 67900 views to date.',
          image: '9.png',
          href:
            'https://public.tableau.com/profile/naledi.hollbruegge#!/vizhome/MakeoverMonday34Malaria/MalariainAfrica',
        },
        {
          showCaption: false,
          client: 'Personal Project',
          summary:
            'Visualisation of complex data around policy makers’ knowledge on gender issues. Featured in the book “Makeover Monday”. ',
          image: '10.png',
          href:
            'https://public.tableau.com/profile/naledi.hollbruegge#!/vizhome/Whatpolicymakersknowaboutwomensissues-MakeoverMonday102018/Whatdotheyknow',
        },
        {
          showCaption: false,
          client: 'Deloitte',
          summary:
            'An Alteryx macro that parses the XML of another workflow to extract a list of all tools utilised. ',
          image: '11.png',
          href:
            'https://gallery.alteryx.com/#!app/Extract-Alteryx-Tools-Macro/5aa941398a93373b041ae460',
        },
        {
          showCaption: false,
          client: 'Personal Project',
          summary:
            'Self-quantification project in which I recorded data about the books I read and presented these in an infographic style.',
          image: '12.png',
          href:
            'https://public.tableau.com/profile/naledi.hollbruegge#!/vizhome/MyYearInBooks/WhatIreadin2019',
        },
      ],
    }
  },
}
</script>
