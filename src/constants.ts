import type {MantineColorScheme} from '@mantine/core'
import urlCat from 'urlcat'

export const defaultThemeColorScheme: MantineColorScheme = 'light'
export const defaultDateFormat = 'DD MMMM YYYY'
export const defaultLoadingScreenDelayMS = 500
export const dateTimeFormat = 'MMM D, hh:mm A'
export const urls = {
  JobLocation: {
    index: '/job-location',
  },
  roscent: {
    index: '/roscent/dashboard',
    projects: {
      index: '/roscent/dashboard/projects',
      overview: (projectId: string) =>
        urlCat('/roscent/dashboard/projects/:projectId/overview', {projectId}),
      targets: (projectId: string) =>
        urlCat('/roscent/dashboard/projects/:projectId/targets', {projectId}),
      budget: (projectId: string) =>
        urlCat('/roscent/dashboard/projects/:projectId/budget', {projectId}),
      users: (projectId: string) =>
        urlCat('/roscent/dashboard/projects/:projectId/users', {projectId}),
      files: (projectId: string) =>
        urlCat('/roscent/dashboard/projects/:projectId/files', {projectId}),
      activity: (projectId: string) =>
        urlCat('/roscent/dashboard/projects/:projectId/activity', {projectId}),
      settings: (projectId: string) =>
        urlCat('/roscent/dashboard/projects/:projectId/settings', {projectId}),
    },
    account: {
      index: '/roscent/dashboard/account',
      overview: '/roscent/dashboard/account/overview',
      settings: '/roscent/dashboard/account/settings',
      security: '/roscent/dashboard/account/security',
      billing: '/roscent/dashboard/account/billing',
      statements: '/roscent/dashboard/account/statements',
      referrals: '/roscent/dashboard/account/referrals',
      apiKey: '/roscent/dashboard/account/api-keys',
      logs: '/roscent/dashboard/account/logs',
    },
    email: {
      index: '/roscent/dashboard/email/inbox',
      inbox: (emailId: string) =>
        urlCat('/roscent/dashboard/email/inbox/:emailId', {emailId}),
      compose: '/roscent/dashboard/email/compose',
      sent: '/roscent/dashboard/email/sent',
      draft: '/roscent/dashboard/email/draft',
      spam: '/roscent/dashboard/email/spam',
      trash: '/roscent/dashboard/email/trash',
      archive: '/roscent/dashboard/email/archive',
    },
    userProfile: (userId: string) =>
      urlCat('/roscent/dashboard/user-profile/:userId', {userId}),
    emailTemplate: '/roscent/email-template',
    chat: '/roscent/dashboard/chat',
    authentication: {
      forgotPassword: '/roscent/authentication/forgot-password',
      signUp: '/roscent/authentication/sign-up',
      signIn: '/roscent/authentication/sign-in',
      verification: '/roscent/authentication/verification',
      resetPassword: '/roscent/authentication/reset-password',
      accountSetup: {
        accountInfo: '/roscent/authentication/account-setup/account-info',
        billingDetails: '/roscent/authentication/account-setup/billing-details',
        creditCardSetup:
          '/roscent/authentication/account-setup/credit-card-setup',
        accountTypeSelection:
          '/roscent/authentication/account-setup/account-type-selection',
      },
    },
  },
  Modernize: {
    index: '/modernize',
    dashboard: {
      index: '/modernize/dashboard',
      orders: '/modernize/dashboard/orders',
      products: {
        index: '/modernize/dashboard/products',
        add: '/modernize/dashboard/products/add',
      },
      categories: {
        index: '/modernize/dashboard/categories',
        add: '/modernize/dashboard/categories/add',
      },
      customers: {
        index: '/modernize/dashboard/customers',
        add: '/modernize/dashboard/customers/add',

        list: {
          all: '/modernize/dashboard/customers/list/all',
          new: '/modernize/dashboard/customers/list/new',
          returning: '/modernize/dashboard/customers/list/returning',
          fromEurope: '/modernize/dashboard/customers/list/from-europe',
        },
        info: (customerId: string) =>
          urlCat('/modernize/dashboard/customers/info/:customerId', {
            customerId,
          }),
      },
      reports: {
        index: '/modernize/dashboard/reports',
      },
      coupons: {
        index: '/modernize/dashboard/coupons',
        create: '/modernize/dashboard/coupons/create',

        list: {
          all: '/modernize/dashboard/coupons/list/all',
          active: '/modernize/dashboard/coupons/list/active',
          expired: '/modernize/dashboard/coupons/list/expired',
        },
      },
      knowledgeBase: {
        index: '/modernize/dashboard/knowledge-base',
        article: (articleId: string) =>
          urlCat('/modernize/dashboard/knowledge-base/article/:articleId', {
            articleId,
          }),
      },
      inbox: '/modernize/dashboard/inbox',
      settings: {
        index: '/modernize/dashboard/settings',
        profile: '/modernize/dashboard/settings/profile',
        notifications: '/modernize/dashboard/settings/notifications',
      },
      pricing: '/modernize/dashboard/pricing',
    },

    authentication: {
      signUp: '/modernize/authentication/sign-up',
      signIn: '/modernize/authentication/sign-in',
      forgotPassword: '/modernize/authentication/forgot-password',
      emailConfirmation: '/modernize/authentication/email-confirmation',
      registrationComplete: '/modernize/authentication/registration-complete',
    },
  },
  DashStack: {
    index: '/dash-stack',
    dashboard: {
      index: '/dash-stack/dashboard',

      products: {
        index: '/dash-stack/dashboard/products',
        stock: '/dash-stack/dashboard/product-stock',
      },
      favorites: '/dash-stack/dashboard/favorites',
      inbox: {
        index: '/dash-stack/dashboard/inbox',
        starred: '/dash-stack/dashboard/inbox/starred',
        sent: '/dash-stack/dashboard/inbox/sent',
        draft: '/dash-stack/dashboard/inbox/draft',
        spam: '/dash-stack/dashboard/inbox/spam',
        important: '/dash-stack/dashboard/inbox/important',
        bin: '/dash-stack/dashboard/inbox/bin',

        chat: (userId: string) =>
          urlCat('/dash-stack/dashboard/inbox/:userId', {userId}),
      },
      pricing: '/dash-stack/dashboard/pricing',
      contacts: {
        index: '/dash-stack/dashboard/contacts',
        add: '/dash-stack/dashboard/contacts/add',
      },
      toDo: '/dash-stack/dashboard/to-do',
      team: {
        index: '/dash-stack/dashboard/team',
        add: '/dash-stack/dashboard/team/add',
      },
      settings: '/dash-stack/dashboard/settings',
      orders: '/dash-stack/dashboard/orders',
    },
    authentication: {
      signIn: '/dash-stack/authentication/sign-in',
      signUp: '/dash-stack/authentication/sign-up',
    },
  },
  Flights: {
    index: '/flights',
  },
  JobHuntly: {
    index: '/job-huntly',
    applicant: {
      dashboard: {
        index: '/job-huntly/applicant/dashboard',
        home: '/job-huntly/applicant/dashboard/home',
        chat: '/job-huntly/applicant/dashboard/chat',
        applications: {
          index: '/job-huntly/applicant/dashboard/applications',
          all: '/job-huntly/applicant/dashboard/applications/all',
          inReview: '/job-huntly/applicant/dashboard/applications/in-review',
          interviewing:
            '/job-huntly/applicant/dashboard/applications/interviewing',
          assessment: '/job-huntly/applicant/dashboard/applications/assessment',
          offered: '/job-huntly/applicant/dashboard/applications/offered',
          hired: '/job-huntly/applicant/dashboard/applications/hired',
        },
        jobs: '/job-huntly/applicant/dashboard/jobs',
        job: (jobId: string) =>
          urlCat('/job-huntly/applicant/dashboard/jobs/:jobId', {jobId}),
        companies: '/job-huntly/applicant/dashboard/companies',
        profile: '/job-huntly/applicant/dashboard/profile',
        settings: {
          index: '/job-huntly/applicant/dashboard/settings',
          profile: '/job-huntly/applicant/dashboard/settings/my-profile',
          login: '/job-huntly/applicant/dashboard/settings/login-details',
          notifications:
            '/job-huntly/applicant/dashboard/settings/notifications',
        },
        helpCenter: {
          index: '/job-huntly/applicant/dashboard/help-center',
        },
      },
    },
    company: {
      dashboard: {
        index: '/job-huntly/company/dashboard',
        home: '/job-huntly/company/dashboard/home',
        chat: '/job-huntly/company/dashboard/chat',
        companyProfile: '/job-huntly/company/dashboard/company-profile',

        applicants: {
          all: '/job-huntly/company/dashboard/all-applicants',
          details: (applicantId: string) =>
            urlCat(
              '/job-huntly/company/dashboard/all-applicants/:applicantId',
              {
                applicantId,
              },
            ),

          profile: (applicantId: string) =>
            urlCat(
              '/job-huntly/company/dashboard/all-applicants/:applicantId/profile',
              {applicantId},
            ),
          resume: (applicantId: string) =>
            urlCat(
              '/job-huntly/company/dashboard/all-applicants/:applicantId/resume',
              {applicantId},
            ),

          hiringProgress: (applicantId: string) =>
            urlCat(
              '/job-huntly/company/dashboard/all-applicants/:applicantId/hiring-progress',
              {applicantId},
            ),
          interviewSchedule: (applicantId: string) =>
            urlCat(
              '/job-huntly/company/dashboard/all-applicants/:applicantId/interview-schedule',
              {applicantId},
            ),
        },

        jobs: {
          listing: '/job-huntly/company/dashboard/job-listing',
          applicants: (jobId: string) =>
            urlCat(
              '/job-huntly/company/dashboard/job-listing/:jobId/applicants',
              {jobId},
            ),
          details: (jobId: string) =>
            urlCat('/job-huntly/company/dashboard/job-listing/:jobId/details', {
              jobId,
            }),
          analytics: (jobId: string) =>
            urlCat(
              '/job-huntly/company/dashboard/job-listing/:jobId/analytics',
              {
                jobId,
              },
            ),
        },
      },
    },
    landing: '/job-huntly/landing',
  },
}
export const applications = [
  {
    id: 1,
    title: 'Job Location',
    description: 'A Simple Job Search Page',
    href: urls.JobLocation.index,
  },
  {
    id: 2,
    title: 'Roscent',
    description: 'Design System and UI Kit',
    href: urls.roscent.index,
    info: 'Desktop version',
  },
  {
    id: 3,
    title: 'Modernize',
    description: 'Dashboard UI Kit',
    href: urls.Modernize.dashboard.index,
    info: 'Desktop version',
  },
  {
    id: 4,
    title: 'DashStack',
    description: 'Dashboard UI Kit',
    href: urls.DashStack.dashboard.index,
    info: 'Desktop version',
  },
  {
    id: 5,
    title: 'Flights',
    description: 'Flight Schedule App',
    href: urls.Flights.index,
    info: 'Mobile Version Only, But also viewable on desktop',
  },
]
