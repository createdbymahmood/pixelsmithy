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
  SnowUI: {
    index: '/snow-ui/dashboard',
    projects: {
      index: '/snow-ui/dashboard/projects',
      overview: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/overview', {projectId}),
      targets: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/targets', {projectId}),
      budget: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/budget', {projectId}),
      users: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/users', {projectId}),
      files: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/files', {projectId}),
      activity: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/activity', {projectId}),
      settings: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/settings', {projectId}),
    },
    account: {
      index: '/snow-ui/dashboard/account',
      overview: '/snow-ui/dashboard/account/overview',
      settings: '/snow-ui/dashboard/account/settings',
      security: '/snow-ui/dashboard/account/security',
      billing: '/snow-ui/dashboard/account/billing',
      statements: '/snow-ui/dashboard/account/statements',
      referrals: '/snow-ui/dashboard/account/referrals',
      apiKey: '/snow-ui/dashboard/account/api-keys',
      logs: '/snow-ui/dashboard/account/logs',
    },
    email: {
      index: '/snow-ui/dashboard/email/inbox',
      inbox: (emailId: string) =>
        urlCat('/snow-ui/dashboard/email/inbox/:emailId', {emailId}),
      compose: '/snow-ui/dashboard/email/compose',
      sent: '/snow-ui/dashboard/email/sent',
      draft: '/snow-ui/dashboard/email/draft',
      spam: '/snow-ui/dashboard/email/spam',
      trash: '/snow-ui/dashboard/email/trash',
      archive: '/snow-ui/dashboard/email/archive',
    },
    userProfile: (userId: string) =>
      urlCat('/snow-ui/dashboard/user-profile/:userId', {userId}),
    emailTemplate: '/snow-ui/email-template',
    chat: '/snow-ui/dashboard/chat',
    authentication: {
      forgotPassword: '/snow-ui/authentication/forgot-password',
      signUp: '/snow-ui/authentication/sign-up',
      signIn: '/snow-ui/authentication/sign-in',
      verification: '/snow-ui/authentication/verification',
      resetPassword: '/snow-ui/authentication/reset-password',
      accountSetup: {
        accountInfo: '/snow-ui/authentication/account-setup/account-info',
        billingDetails: '/snow-ui/authentication/account-setup/billing-details',
        creditCardSetup:
          '/snow-ui/authentication/account-setup/credit-card-setup',
        accountTypeSelection:
          '/snow-ui/authentication/account-setup/account-type-selection',
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
}
export const applications = [
  {
    id: 1,
    title: 'Job Location',
    description: 'A dashboard page',
    href: urls.JobLocation.index,
  },
  {
    id: 2,
    title: 'Snow UI',
    description: 'Design system and UI Kit',
    href: urls.SnowUI.index,
  },
  {
    id: 3,
    title: 'Modernize',
    description: 'Dashboard UI Kit',
    href: urls.Modernize.dashboard.index,
  },
]
