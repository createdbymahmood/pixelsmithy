This application supports typesafe routing for NextJS using the `declarative-routing` system.

# What is `declarative-routing`?

Declarative Routes is a system for typesafe routing in React. It uses a combination of TypeScript and a custom routing system to ensure that your routes are always in sync with your code. You'll never have to worry about broken links or missing routes again.

In NextJS applications, Declarative Routes also handles API routes, so you'll have typesafe input and output from all of your APIs. In addition to `fetch` functions that are written for you automatically.

# Route List

Here are the routes of the application:

| Route | Verb | Route Name | Using It |
| ----- | ---- | ---- | ---- |
| `/dash-stack/authentication/sign-in` | - | `DashstackAuthenticationSignin` | `<DashstackAuthenticationSignin.Link>` |
| `/dash-stack/authentication/sign-up` | - | `DashstackAuthenticationSignup` | `<DashstackAuthenticationSignup.Link>` |
| `/dash-stack/dashboard/contacts/add` | - | `DashstackDashboardContactsAdd` | `<DashstackDashboardContactsAdd.Link>` |
| `/dash-stack/dashboard/contacts` | - | `DashstackDashboardContacts` | `<DashstackDashboardContacts.Link>` |
| `/dash-stack/dashboard/favorites` | - | `DashstackDashboardFavorites` | `<DashstackDashboardFavorites.Link>` |
| `/dash-stack/dashboard/inbox/[userId]` | - | `DashstackDashboardInboxUserId` | `<DashstackDashboardInboxUserId.Link>` |
| `/dash-stack/dashboard/inbox/bin` | - | `DashstackDashboardInboxBin` | `<DashstackDashboardInboxBin.Link>` |
| `/dash-stack/dashboard/inbox/draft` | - | `DashstackDashboardInboxDraft` | `<DashstackDashboardInboxDraft.Link>` |
| `/dash-stack/dashboard/inbox/important` | - | `DashstackDashboardInboxImportant` | `<DashstackDashboardInboxImportant.Link>` |
| `/dash-stack/dashboard/inbox` | - | `DashstackDashboardInbox` | `<DashstackDashboardInbox.Link>` |
| `/dash-stack/dashboard/inbox/sent` | - | `DashstackDashboardInboxSent` | `<DashstackDashboardInboxSent.Link>` |
| `/dash-stack/dashboard/inbox/spam` | - | `DashstackDashboardInboxSpam` | `<DashstackDashboardInboxSpam.Link>` |
| `/dash-stack/dashboard/inbox/starred` | - | `DashstackDashboardInboxStarred` | `<DashstackDashboardInboxStarred.Link>` |
| `/dash-stack/dashboard/orders` | - | `DashstackDashboardOrders` | `<DashstackDashboardOrders.Link>` |
| `/dash-stack/dashboard` | - | `DashstackDashboard` | `<DashstackDashboard.Link>` |
| `/dash-stack/dashboard/pricing` | - | `DashstackDashboardPricing` | `<DashstackDashboardPricing.Link>` |
| `/dash-stack/dashboard/product-stock` | - | `DashstackDashboardProductstock` | `<DashstackDashboardProductstock.Link>` |
| `/dash-stack/dashboard/products` | - | `DashstackDashboardProducts` | `<DashstackDashboardProducts.Link>` |
| `/dash-stack/dashboard/settings` | - | `DashstackDashboardSettings` | `<DashstackDashboardSettings.Link>` |
| `/dash-stack/dashboard/team/add` | - | `DashstackDashboardTeamAdd` | `<DashstackDashboardTeamAdd.Link>` |
| `/dash-stack/dashboard/team` | - | `DashstackDashboardTeam` | `<DashstackDashboardTeam.Link>` |
| `/dash-stack/dashboard/to-do` | - | `DashstackDashboardTodo` | `<DashstackDashboardTodo.Link>` |
| `/dash-stack` | - | `Dashstack` | `<Dashstack.Link>` |
| `/flights` | - | `Flights` | `<Flights.Link>` |
| `/job-huntly/applicant/dashboard/applications/all` | - | `JobhuntlyApplicantDashboardApplicationsAll` | `<JobhuntlyApplicantDashboardApplicationsAll.Link>` |
| `/job-huntly/applicant/dashboard/applications/assessment` | - | `JobhuntlyApplicantDashboardApplicationsAssessment` | `<JobhuntlyApplicantDashboardApplicationsAssessment.Link>` |
| `/job-huntly/applicant/dashboard/applications/hired` | - | `JobhuntlyApplicantDashboardApplicationsHired` | `<JobhuntlyApplicantDashboardApplicationsHired.Link>` |
| `/job-huntly/applicant/dashboard/applications/in-review` | - | `JobhuntlyApplicantDashboardApplicationsInreview` | `<JobhuntlyApplicantDashboardApplicationsInreview.Link>` |
| `/job-huntly/applicant/dashboard/applications/interviewing` | - | `JobhuntlyApplicantDashboardApplicationsInterviewing` | `<JobhuntlyApplicantDashboardApplicationsInterviewing.Link>` |
| `/job-huntly/applicant/dashboard/applications/offered` | - | `JobhuntlyApplicantDashboardApplicationsOffered` | `<JobhuntlyApplicantDashboardApplicationsOffered.Link>` |
| `/job-huntly/applicant/dashboard/applications` | - | `JobhuntlyApplicantDashboardApplications` | `<JobhuntlyApplicantDashboardApplications.Link>` |
| `/job-huntly/applicant/dashboard/chat` | - | `JobhuntlyApplicantDashboardChat` | `<JobhuntlyApplicantDashboardChat.Link>` |
| `/job-huntly/applicant/dashboard/companies` | - | `JobhuntlyApplicantDashboardCompanies` | `<JobhuntlyApplicantDashboardCompanies.Link>` |
| `/job-huntly/applicant/dashboard/help-center` | - | `JobhuntlyApplicantDashboardHelpcenter` | `<JobhuntlyApplicantDashboardHelpcenter.Link>` |
| `/job-huntly/applicant/dashboard/home` | - | `JobhuntlyApplicantDashboardHome` | `<JobhuntlyApplicantDashboardHome.Link>` |
| `/job-huntly/applicant/dashboard/jobs/[jobId]` | - | `JobhuntlyApplicantDashboardJobsJobId` | `<JobhuntlyApplicantDashboardJobsJobId.Link>` |
| `/job-huntly/applicant/dashboard/jobs` | - | `JobhuntlyApplicantDashboardJobs` | `<JobhuntlyApplicantDashboardJobs.Link>` |
| `/job-huntly/applicant/dashboard` | - | `JobhuntlyApplicantDashboard` | `<JobhuntlyApplicantDashboard.Link>` |
| `/job-huntly/applicant/dashboard/profile` | - | `JobhuntlyApplicantDashboardProfile` | `<JobhuntlyApplicantDashboardProfile.Link>` |
| `/job-huntly/applicant/dashboard/settings/login-details` | - | `JobhuntlyApplicantDashboardSettingsLogindetails` | `<JobhuntlyApplicantDashboardSettingsLogindetails.Link>` |
| `/job-huntly/applicant/dashboard/settings/my-profile` | - | `JobhuntlyApplicantDashboardSettingsMyprofile` | `<JobhuntlyApplicantDashboardSettingsMyprofile.Link>` |
| `/job-huntly/applicant/dashboard/settings/notifications` | - | `JobhuntlyApplicantDashboardSettingsNotifications` | `<JobhuntlyApplicantDashboardSettingsNotifications.Link>` |
| `/job-huntly/applicant/dashboard/settings` | - | `JobhuntlyApplicantDashboardSettings` | `<JobhuntlyApplicantDashboardSettings.Link>` |
| `/job-huntly/applicant` | - | `JobhuntlyApplicant` | `<JobhuntlyApplicant.Link>` |
| `/job-huntly/company/dashboard/applicants/[applicantId]/hiring-progress` | - | `JobhuntlyCompanyDashboardApplicantsApplicantIdHiringprogress` | `<JobhuntlyCompanyDashboardApplicantsApplicantIdHiringprogress.Link>` |
| `/job-huntly/company/dashboard/applicants/[applicantId]/interview-schedule` | - | `JobhuntlyCompanyDashboardApplicantsApplicantIdInterviewschedule` | `<JobhuntlyCompanyDashboardApplicantsApplicantIdInterviewschedule.Link>` |
| `/job-huntly/company/dashboard/applicants/[applicantId]` | - | `JobhuntlyCompanyDashboardApplicantsApplicantId` | `<JobhuntlyCompanyDashboardApplicantsApplicantId.Link>` |
| `/job-huntly/company/dashboard/applicants/[applicantId]/profile` | - | `JobhuntlyCompanyDashboardApplicantsApplicantIdProfile` | `<JobhuntlyCompanyDashboardApplicantsApplicantIdProfile.Link>` |
| `/job-huntly/company/dashboard/applicants/[applicantId]/resume` | - | `JobhuntlyCompanyDashboardApplicantsApplicantIdResume` | `<JobhuntlyCompanyDashboardApplicantsApplicantIdResume.Link>` |
| `/job-huntly/company/dashboard/applicants` | - | `JobhuntlyCompanyDashboardApplicants` | `<JobhuntlyCompanyDashboardApplicants.Link>` |
| `/job-huntly/company/dashboard/chat` | - | `JobhuntlyCompanyDashboardChat` | `<JobhuntlyCompanyDashboardChat.Link>` |
| `/job-huntly/company/dashboard/company-profile` | - | `JobhuntlyCompanyDashboardCompanyprofile` | `<JobhuntlyCompanyDashboardCompanyprofile.Link>` |
| `/job-huntly/company/dashboard/home` | - | `JobhuntlyCompanyDashboardHome` | `<JobhuntlyCompanyDashboardHome.Link>` |
| `/job-huntly/company/dashboard/jobs/[jobId]/analytics` | - | `JobhuntlyCompanyDashboardJobsJobIdAnalytics` | `<JobhuntlyCompanyDashboardJobsJobIdAnalytics.Link>` |
| `/job-huntly/company/dashboard/jobs/[jobId]/applicants` | - | `JobhuntlyCompanyDashboardJobsJobIdApplicants` | `<JobhuntlyCompanyDashboardJobsJobIdApplicants.Link>` |
| `/job-huntly/company/dashboard/jobs/[jobId]/details` | - | `JobhuntlyCompanyDashboardJobsJobIdDetails` | `<JobhuntlyCompanyDashboardJobsJobIdDetails.Link>` |
| `/job-huntly/company/dashboard/jobs/[jobId]` | - | `JobhuntlyCompanyDashboardJobsJobId` | `<JobhuntlyCompanyDashboardJobsJobId.Link>` |
| `/job-huntly/company/dashboard/jobs/create` | - | `JobhuntlyCompanyDashboardJobsCreate` | `<JobhuntlyCompanyDashboardJobsCreate.Link>` |
| `/job-huntly/company/dashboard/jobs` | - | `JobhuntlyCompanyDashboardJobs` | `<JobhuntlyCompanyDashboardJobs.Link>` |
| `/job-huntly/company/dashboard` | - | `JobhuntlyCompanyDashboard` | `<JobhuntlyCompanyDashboard.Link>` |
| `/job-huntly/company/dashboard/settings/overview` | - | `JobhuntlyCompanyDashboardSettingsOverview` | `<JobhuntlyCompanyDashboardSettingsOverview.Link>` |
| `/job-huntly/company/dashboard/settings` | - | `JobhuntlyCompanyDashboardSettings` | `<JobhuntlyCompanyDashboardSettings.Link>` |
| `/job-huntly/company/dashboard/settings/social-links` | - | `JobhuntlyCompanyDashboardSettingsSociallinks` | `<JobhuntlyCompanyDashboardSettingsSociallinks.Link>` |
| `/job-huntly/company/dashboard/settings/team` | - | `JobhuntlyCompanyDashboardSettingsTeam` | `<JobhuntlyCompanyDashboardSettingsTeam.Link>` |
| `/job-huntly/company` | - | `JobhuntlyCompany` | `<JobhuntlyCompany.Link>` |
| `/job-huntly/landing` | - | `JobhuntlyLanding` | `<JobhuntlyLanding.Link>` |
| `/job-huntly` | - | `Jobhuntly` | `<Jobhuntly.Link>` |
| `/job-location` | - | `Joblocation` | `<Joblocation.Link>` |
| `/modernize/authentication/email-confirmation` | - | `ModernizeAuthenticationEmailconfirmation` | `<ModernizeAuthenticationEmailconfirmation.Link>` |
| `/modernize/authentication/forgot-password` | - | `ModernizeAuthenticationForgotpassword` | `<ModernizeAuthenticationForgotpassword.Link>` |
| `/modernize/authentication/registration-complete` | - | `ModernizeAuthenticationRegistrationcomplete` | `<ModernizeAuthenticationRegistrationcomplete.Link>` |
| `/modernize/authentication/sign-in` | - | `ModernizeAuthenticationSignin` | `<ModernizeAuthenticationSignin.Link>` |
| `/modernize/authentication/sign-up` | - | `ModernizeAuthenticationSignup` | `<ModernizeAuthenticationSignup.Link>` |
| `/modernize/dashboard/categories/add` | - | `ModernizeDashboardCategoriesAdd` | `<ModernizeDashboardCategoriesAdd.Link>` |
| `/modernize/dashboard/categories` | - | `ModernizeDashboardCategories` | `<ModernizeDashboardCategories.Link>` |
| `/modernize/dashboard/coupons/create` | - | `ModernizeDashboardCouponsCreate` | `<ModernizeDashboardCouponsCreate.Link>` |
| `/modernize/dashboard/coupons/list/active` | - | `ModernizeDashboardCouponsListActive` | `<ModernizeDashboardCouponsListActive.Link>` |
| `/modernize/dashboard/coupons/list/all` | - | `ModernizeDashboardCouponsListAll` | `<ModernizeDashboardCouponsListAll.Link>` |
| `/modernize/dashboard/coupons/list/expired` | - | `ModernizeDashboardCouponsListExpired` | `<ModernizeDashboardCouponsListExpired.Link>` |
| `/modernize/dashboard/coupons` | - | `ModernizeDashboardCoupons` | `<ModernizeDashboardCoupons.Link>` |
| `/modernize/dashboard/customers/add` | - | `ModernizeDashboardCustomersAdd` | `<ModernizeDashboardCustomersAdd.Link>` |
| `/modernize/dashboard/customers/info/[id]` | - | `ModernizeDashboardCustomersInfoId` | `<ModernizeDashboardCustomersInfoId.Link>` |
| `/modernize/dashboard/customers/list/all` | - | `ModernizeDashboardCustomersListAll` | `<ModernizeDashboardCustomersListAll.Link>` |
| `/modernize/dashboard/customers/list/from-europe` | - | `ModernizeDashboardCustomersListFromeurope` | `<ModernizeDashboardCustomersListFromeurope.Link>` |
| `/modernize/dashboard/customers/list/new` | - | `ModernizeDashboardCustomersListNew` | `<ModernizeDashboardCustomersListNew.Link>` |
| `/modernize/dashboard/customers/list/returning` | - | `ModernizeDashboardCustomersListReturning` | `<ModernizeDashboardCustomersListReturning.Link>` |
| `/modernize/dashboard/customers` | - | `ModernizeDashboardCustomers` | `<ModernizeDashboardCustomers.Link>` |
| `/modernize/dashboard/inbox` | - | `ModernizeDashboardInbox` | `<ModernizeDashboardInbox.Link>` |
| `/modernize/dashboard/knowledge-base/article/[articleId]` | - | `ModernizeDashboardKnowledgebaseArticleArticleId` | `<ModernizeDashboardKnowledgebaseArticleArticleId.Link>` |
| `/modernize/dashboard/knowledge-base` | - | `ModernizeDashboardKnowledgebase` | `<ModernizeDashboardKnowledgebase.Link>` |
| `/modernize/dashboard/orders` | - | `ModernizeDashboardOrders` | `<ModernizeDashboardOrders.Link>` |
| `/modernize/dashboard` | - | `ModernizeDashboard` | `<ModernizeDashboard.Link>` |
| `/modernize/dashboard/pricing` | - | `ModernizeDashboardPricing` | `<ModernizeDashboardPricing.Link>` |
| `/modernize/dashboard/products/add` | - | `ModernizeDashboardProductsAdd` | `<ModernizeDashboardProductsAdd.Link>` |
| `/modernize/dashboard/products` | - | `ModernizeDashboardProducts` | `<ModernizeDashboardProducts.Link>` |
| `/modernize/dashboard/reports` | - | `ModernizeDashboardReports` | `<ModernizeDashboardReports.Link>` |
| `/modernize/dashboard/settings/notifications` | - | `ModernizeDashboardSettingsNotifications` | `<ModernizeDashboardSettingsNotifications.Link>` |
| `/modernize/dashboard/settings` | - | `ModernizeDashboardSettings` | `<ModernizeDashboardSettings.Link>` |
| `/modernize/dashboard/settings/profile` | - | `ModernizeDashboardSettingsProfile` | `<ModernizeDashboardSettingsProfile.Link>` |
| `/modernize` | - | `Modernize` | `<Modernize.Link>` |
| `/` | - | `Home` | `<Home.Link>` |
| `/roscent/authentication/account-setup/account-info` | - | `RoscentAuthenticationAccountsetupAccountinfo` | `<RoscentAuthenticationAccountsetupAccountinfo.Link>` |
| `/roscent/authentication/account-setup/account-type-selection` | - | `RoscentAuthenticationAccountsetupAccounttypeselection` | `<RoscentAuthenticationAccountsetupAccounttypeselection.Link>` |
| `/roscent/authentication/account-setup/billing-details` | - | `RoscentAuthenticationAccountsetupBillingdetails` | `<RoscentAuthenticationAccountsetupBillingdetails.Link>` |
| `/roscent/authentication/account-setup/credit-card-setup` | - | `RoscentAuthenticationAccountsetupCreditcardsetup` | `<RoscentAuthenticationAccountsetupCreditcardsetup.Link>` |
| `/roscent/authentication/forgot-password` | - | `RoscentAuthenticationForgotpassword` | `<RoscentAuthenticationForgotpassword.Link>` |
| `/roscent/authentication/reset-password` | - | `RoscentAuthenticationResetpassword` | `<RoscentAuthenticationResetpassword.Link>` |
| `/roscent/authentication/sign-in` | - | `RoscentAuthenticationSignin` | `<RoscentAuthenticationSignin.Link>` |
| `/roscent/authentication/sign-up` | - | `RoscentAuthenticationSignup` | `<RoscentAuthenticationSignup.Link>` |
| `/roscent/authentication/verification` | - | `RoscentAuthenticationVerification` | `<RoscentAuthenticationVerification.Link>` |
| `/roscent/dashboard/account/api-keys` | - | `RoscentDashboardAccountApikeys` | `<RoscentDashboardAccountApikeys.Link>` |
| `/roscent/dashboard/account/billing` | - | `RoscentDashboardAccountBilling` | `<RoscentDashboardAccountBilling.Link>` |
| `/roscent/dashboard/account/logs` | - | `RoscentDashboardAccountLogs` | `<RoscentDashboardAccountLogs.Link>` |
| `/roscent/dashboard/account/overview` | - | `RoscentDashboardAccountOverview` | `<RoscentDashboardAccountOverview.Link>` |
| `/roscent/dashboard/account` | - | `RoscentDashboardAccount` | `<RoscentDashboardAccount.Link>` |
| `/roscent/dashboard/account/referrals` | - | `RoscentDashboardAccountReferrals` | `<RoscentDashboardAccountReferrals.Link>` |
| `/roscent/dashboard/account/security` | - | `RoscentDashboardAccountSecurity` | `<RoscentDashboardAccountSecurity.Link>` |
| `/roscent/dashboard/account/settings` | - | `RoscentDashboardAccountSettings` | `<RoscentDashboardAccountSettings.Link>` |
| `/roscent/dashboard/account/statements` | - | `RoscentDashboardAccountStatements` | `<RoscentDashboardAccountStatements.Link>` |
| `/roscent/dashboard/chat` | - | `RoscentDashboardChat` | `<RoscentDashboardChat.Link>` |
| `/roscent/dashboard/email/archive` | - | `RoscentDashboardEmailArchive` | `<RoscentDashboardEmailArchive.Link>` |
| `/roscent/dashboard/email/compose` | - | `RoscentDashboardEmailCompose` | `<RoscentDashboardEmailCompose.Link>` |
| `/roscent/dashboard/email/draft` | - | `RoscentDashboardEmailDraft` | `<RoscentDashboardEmailDraft.Link>` |
| `/roscent/dashboard/email/inbox/[id]` | - | `RoscentDashboardEmailInboxId` | `<RoscentDashboardEmailInboxId.Link>` |
| `/roscent/dashboard/email` | - | `RoscentDashboardEmail` | `<RoscentDashboardEmail.Link>` |
| `/roscent/dashboard/email/sent` | - | `RoscentDashboardEmailSent` | `<RoscentDashboardEmailSent.Link>` |
| `/roscent/dashboard/email/spam` | - | `RoscentDashboardEmailSpam` | `<RoscentDashboardEmailSpam.Link>` |
| `/roscent/dashboard/email/trash` | - | `RoscentDashboardEmailTrash` | `<RoscentDashboardEmailTrash.Link>` |
| `/roscent/dashboard` | - | `RoscentDashboard` | `<RoscentDashboard.Link>` |
| `/roscent/dashboard/projects/[id]/activity` | - | `RoscentDashboardProjectsIdActivity` | `<RoscentDashboardProjectsIdActivity.Link>` |
| `/roscent/dashboard/projects/[id]/budget` | - | `RoscentDashboardProjectsIdBudget` | `<RoscentDashboardProjectsIdBudget.Link>` |
| `/roscent/dashboard/projects/[id]/files` | - | `RoscentDashboardProjectsIdFiles` | `<RoscentDashboardProjectsIdFiles.Link>` |
| `/roscent/dashboard/projects/[id]/overview` | - | `RoscentDashboardProjectsIdOverview` | `<RoscentDashboardProjectsIdOverview.Link>` |
| `/roscent/dashboard/projects/[id]` | - | `RoscentDashboardProjectsId` | `<RoscentDashboardProjectsId.Link>` |
| `/roscent/dashboard/projects/[id]/settings` | - | `RoscentDashboardProjectsIdSettings` | `<RoscentDashboardProjectsIdSettings.Link>` |
| `/roscent/dashboard/projects/[id]/targets` | - | `RoscentDashboardProjectsIdTargets` | `<RoscentDashboardProjectsIdTargets.Link>` |
| `/roscent/dashboard/projects/[id]/users` | - | `RoscentDashboardProjectsIdUsers` | `<RoscentDashboardProjectsIdUsers.Link>` |
| `/roscent/dashboard/projects` | - | `RoscentDashboardProjects` | `<RoscentDashboardProjects.Link>` |
| `/roscent/dashboard/user-profile/[id]` | - | `RoscentDashboardUserprofileId` | `<RoscentDashboardUserprofileId.Link>` |
| `/roscent/dashboard/user-profile` | - | `RoscentDashboardUserprofile` | `<RoscentDashboardUserprofile.Link>` |
| `/roscent/email-template` | - | `RoscentEmailtemplate` | `<RoscentEmailtemplate.Link>` |
| `/roscent` | - | `Roscent` | `<Roscent.Link>` |

To use the routes, you can import them from `@/routes` and use them in your code.

# Using the routes in your application

For pages, use the `Link` component (built on top of `next/link`) to link to other pages. For example:

```tsx
import { ProductDetail } from "@/routes";

return (
  <ProductDetail.Link productId={"abc123"}>Product abc123</ProductDetail.Link>
);
```

This is the equivalent of doing `<Link href="/product/abc123">Product abc123</Link>` but with typesafety. And you never have to remember the URL. If the route moves, the typesafe route will be updated automatically.

For APIs, use the exported `fetch` wrapping functions. For example:

```tsx
import { useEffect } from "react";
import { getProductInfo } from "@/routes";

useEffect(() => {
  // Parameters are typed to the input of the API
  getProductInfo({ productId: "abc123" }).then((data) => {
    // Data is typed to the result of the API
    console.log(data);
  });
}, []);
```

This is the equivalent of doing `fetch('/api/product/abc123')` but with typesafety, and you never have to remember the URL. If the API moves, the typesafe route will be updated automatically.

## Using typed hooks

The system provides three typed hooks to use in your application `usePush`, `useParams`, and `useSearchParams`.

* `usePush` wraps the NextJS `useRouter` hook and returns a typed version of the `push` function.
* `useParams` wraps `useNextParams` and returns the typed parameters for the route.
* `useSearchParams` wraps `useNextSearchParams` and returns the typed search parameters for the route.

For each hook you give the route to get the appropriate data back.

```ts
import { Search } from "@/routes";
import { useSearchParams } from "@/routes/hooks";

export default MyClientComponent() {
  const searchParams = useSearchParams(Search);
  return <div>{searchParams.query}</div>;
}
```

We had to extract the hooks into a seperate module because NextJS would not allow the routes to include hooks directly if
they were used by React Server Components (RSCs).

# Configure declarative-routing

After running `npx declarative-routing init`, you don't need to configure anything to use it.
However, you may want to customize some options to change the behavior of route generation.

You can edit `declarative-routing.config.json` in the root of your project. The following options are available:

- `mode`: choose between `react-router`, `nextjs` or `qwikcity`. It is automatically picked on init based on the project type.
- `routes`: the directory where the routes are defined. It is picked from the initial wizard (and defaults to `./src/components/declarativeRoutes`).
- `importPathPrefix`: the path prefix to add to the import path of the self-generated route objects, in order to be able to resolve them. It defaults to `@/app`.

# When your routes change

You'll need to run `bun dr:build` to update the generated files. This will update the types and the `@/routes` module to reflect the changes.

The way the system works the `.info.ts` files are link to the `@/routes/index.ts` file. So changing the Zod schemas for the routes does **NOT** require a rebuild. You need to run the build command when:

- You change the name of the route in the `.info.ts` file
- You change the location of the route (e.g. `/product` to `/products`)
- You change the parameters of the route (e.g. `/product/[id]` to `/product/[productId]`)
- You add or remove routes
- You add or remove verbs from API routes (e.g. adding `POST` to an existing route)

You can also run the build command in watch mode using `bun dr:build:watch` but we don't recommend using that unless you are changing routes a lot. It's a neat party trick to change a route directory name and to watch the links automagically change with hot module reloading, but routes really don't change that much.

# Finishing your setup

Post setup there are some additional tasks that you need to complete to completely typesafe your routes. We've compiled a handy check list so you can keep track of your progress.

- [ ] `/dash-stack/authentication/sign-in/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/authentication/sign-in` to `<DashstackAuthenticationSignin.Link>`
- [ ] `/dash-stack/authentication/sign-up/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/authentication/sign-up` to `<DashstackAuthenticationSignup.Link>`
- [ ] `/dash-stack/dashboard/contacts/add/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/contacts/add` to `<DashstackDashboardContactsAdd.Link>`
- [ ] `/dash-stack/dashboard/contacts/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/contacts` to `<DashstackDashboardContacts.Link>`
- [ ] `/dash-stack/dashboard/favorites/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/favorites` to `<DashstackDashboardFavorites.Link>`
- [ ] `/dash-stack/dashboard/inbox/[userId]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/inbox/[userId]` to `<DashstackDashboardInboxUserId.Link>`
- [ ] Convert `params` typing in `/dash-stack/dashboard/inbox/[userId]/page.ts` to `z.infer<>`
- [ ] `/dash-stack/dashboard/inbox/bin/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/inbox/bin` to `<DashstackDashboardInboxBin.Link>`
- [ ] `/dash-stack/dashboard/inbox/draft/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/inbox/draft` to `<DashstackDashboardInboxDraft.Link>`
- [ ] `/dash-stack/dashboard/inbox/important/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/inbox/important` to `<DashstackDashboardInboxImportant.Link>`
- [ ] `/dash-stack/dashboard/inbox/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/inbox` to `<DashstackDashboardInbox.Link>`
- [ ] `/dash-stack/dashboard/inbox/sent/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/inbox/sent` to `<DashstackDashboardInboxSent.Link>`
- [ ] `/dash-stack/dashboard/inbox/spam/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/inbox/spam` to `<DashstackDashboardInboxSpam.Link>`
- [ ] `/dash-stack/dashboard/inbox/starred/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/inbox/starred` to `<DashstackDashboardInboxStarred.Link>`
- [ ] `/dash-stack/dashboard/orders/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/orders` to `<DashstackDashboardOrders.Link>`
- [ ] `/dash-stack/dashboard/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard` to `<DashstackDashboard.Link>`
- [ ] `/dash-stack/dashboard/pricing/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/pricing` to `<DashstackDashboardPricing.Link>`
- [ ] `/dash-stack/dashboard/product-stock/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/product-stock` to `<DashstackDashboardProductstock.Link>`
- [ ] `/dash-stack/dashboard/products/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/products` to `<DashstackDashboardProducts.Link>`
- [ ] `/dash-stack/dashboard/settings/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/settings` to `<DashstackDashboardSettings.Link>`
- [ ] `/dash-stack/dashboard/team/add/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/team/add` to `<DashstackDashboardTeamAdd.Link>`
- [ ] `/dash-stack/dashboard/team/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/team` to `<DashstackDashboardTeam.Link>`
- [ ] `/dash-stack/dashboard/to-do/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack/dashboard/to-do` to `<DashstackDashboardTodo.Link>`
- [ ] `/dash-stack/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/dash-stack` to `<Dashstack.Link>`
- [ ] `/flights/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/flights` to `<Flights.Link>`
- [ ] `/job-huntly/applicant/dashboard/applications/all/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/applications/all` to `<JobhuntlyApplicantDashboardApplicationsAll.Link>`
- [ ] `/job-huntly/applicant/dashboard/applications/assessment/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/applications/assessment` to `<JobhuntlyApplicantDashboardApplicationsAssessment.Link>`
- [ ] `/job-huntly/applicant/dashboard/applications/hired/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/applications/hired` to `<JobhuntlyApplicantDashboardApplicationsHired.Link>`
- [ ] `/job-huntly/applicant/dashboard/applications/in-review/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/applications/in-review` to `<JobhuntlyApplicantDashboardApplicationsInreview.Link>`
- [ ] `/job-huntly/applicant/dashboard/applications/interviewing/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/applications/interviewing` to `<JobhuntlyApplicantDashboardApplicationsInterviewing.Link>`
- [ ] `/job-huntly/applicant/dashboard/applications/offered/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/applications/offered` to `<JobhuntlyApplicantDashboardApplicationsOffered.Link>`
- [ ] `/job-huntly/applicant/dashboard/applications/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/applications` to `<JobhuntlyApplicantDashboardApplications.Link>`
- [ ] `/job-huntly/applicant/dashboard/chat/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/chat` to `<JobhuntlyApplicantDashboardChat.Link>`
- [ ] `/job-huntly/applicant/dashboard/companies/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/companies` to `<JobhuntlyApplicantDashboardCompanies.Link>`
- [ ] `/job-huntly/applicant/dashboard/help-center/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/help-center` to `<JobhuntlyApplicantDashboardHelpcenter.Link>`
- [ ] `/job-huntly/applicant/dashboard/home/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/home` to `<JobhuntlyApplicantDashboardHome.Link>`
- [ ] `/job-huntly/applicant/dashboard/jobs/[jobId]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/jobs/[jobId]` to `<JobhuntlyApplicantDashboardJobsJobId.Link>`
- [ ] Convert `params` typing in `/job-huntly/applicant/dashboard/jobs/[jobId]/page.ts` to `z.infer<>`
- [ ] `/job-huntly/applicant/dashboard/jobs/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/jobs` to `<JobhuntlyApplicantDashboardJobs.Link>`
- [ ] `/job-huntly/applicant/dashboard/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard` to `<JobhuntlyApplicantDashboard.Link>`
- [ ] `/job-huntly/applicant/dashboard/profile/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/profile` to `<JobhuntlyApplicantDashboardProfile.Link>`
- [ ] `/job-huntly/applicant/dashboard/settings/login-details/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/settings/login-details` to `<JobhuntlyApplicantDashboardSettingsLogindetails.Link>`
- [ ] `/job-huntly/applicant/dashboard/settings/my-profile/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/settings/my-profile` to `<JobhuntlyApplicantDashboardSettingsMyprofile.Link>`
- [ ] `/job-huntly/applicant/dashboard/settings/notifications/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/settings/notifications` to `<JobhuntlyApplicantDashboardSettingsNotifications.Link>`
- [ ] `/job-huntly/applicant/dashboard/settings/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant/dashboard/settings` to `<JobhuntlyApplicantDashboardSettings.Link>`
- [ ] `/job-huntly/applicant/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/applicant` to `<JobhuntlyApplicant.Link>`
- [ ] `/job-huntly/company/dashboard/applicants/[applicantId]/hiring-progress/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/applicants/[applicantId]/hiring-progress` to `<JobhuntlyCompanyDashboardApplicantsApplicantIdHiringprogress.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/applicants/[applicantId]/hiring-progress/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/applicants/[applicantId]/interview-schedule/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/applicants/[applicantId]/interview-schedule` to `<JobhuntlyCompanyDashboardApplicantsApplicantIdInterviewschedule.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/applicants/[applicantId]/interview-schedule/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/applicants/[applicantId]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/applicants/[applicantId]` to `<JobhuntlyCompanyDashboardApplicantsApplicantId.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/applicants/[applicantId]/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/applicants/[applicantId]/profile/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/applicants/[applicantId]/profile` to `<JobhuntlyCompanyDashboardApplicantsApplicantIdProfile.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/applicants/[applicantId]/profile/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/applicants/[applicantId]/resume/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/applicants/[applicantId]/resume` to `<JobhuntlyCompanyDashboardApplicantsApplicantIdResume.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/applicants/[applicantId]/resume/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/applicants/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/applicants` to `<JobhuntlyCompanyDashboardApplicants.Link>`
- [ ] `/job-huntly/company/dashboard/chat/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/chat` to `<JobhuntlyCompanyDashboardChat.Link>`
- [ ] `/job-huntly/company/dashboard/company-profile/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/company-profile` to `<JobhuntlyCompanyDashboardCompanyprofile.Link>`
- [ ] `/job-huntly/company/dashboard/home/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/home` to `<JobhuntlyCompanyDashboardHome.Link>`
- [ ] `/job-huntly/company/dashboard/jobs/[jobId]/analytics/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/jobs/[jobId]/analytics` to `<JobhuntlyCompanyDashboardJobsJobIdAnalytics.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/jobs/[jobId]/analytics/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/jobs/[jobId]/applicants/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/jobs/[jobId]/applicants` to `<JobhuntlyCompanyDashboardJobsJobIdApplicants.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/jobs/[jobId]/applicants/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/jobs/[jobId]/details/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/jobs/[jobId]/details` to `<JobhuntlyCompanyDashboardJobsJobIdDetails.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/jobs/[jobId]/details/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/jobs/[jobId]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/jobs/[jobId]` to `<JobhuntlyCompanyDashboardJobsJobId.Link>`
- [ ] Convert `params` typing in `/job-huntly/company/dashboard/jobs/[jobId]/page.ts` to `z.infer<>`
- [ ] `/job-huntly/company/dashboard/jobs/create/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/jobs/create` to `<JobhuntlyCompanyDashboardJobsCreate.Link>`
- [ ] `/job-huntly/company/dashboard/jobs/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/jobs` to `<JobhuntlyCompanyDashboardJobs.Link>`
- [ ] `/job-huntly/company/dashboard/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard` to `<JobhuntlyCompanyDashboard.Link>`
- [ ] `/job-huntly/company/dashboard/settings/overview/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/settings/overview` to `<JobhuntlyCompanyDashboardSettingsOverview.Link>`
- [ ] `/job-huntly/company/dashboard/settings/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/settings` to `<JobhuntlyCompanyDashboardSettings.Link>`
- [ ] `/job-huntly/company/dashboard/settings/social-links/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/settings/social-links` to `<JobhuntlyCompanyDashboardSettingsSociallinks.Link>`
- [ ] `/job-huntly/company/dashboard/settings/team/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company/dashboard/settings/team` to `<JobhuntlyCompanyDashboardSettingsTeam.Link>`
- [ ] `/job-huntly/company/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/company` to `<JobhuntlyCompany.Link>`
- [ ] `/job-huntly/landing/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly/landing` to `<JobhuntlyLanding.Link>`
- [ ] `/job-huntly/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-huntly` to `<Jobhuntly.Link>`
- [ ] `/job-location/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/job-location` to `<Joblocation.Link>`
- [ ] `/modernize/authentication/email-confirmation/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/authentication/email-confirmation` to `<ModernizeAuthenticationEmailconfirmation.Link>`
- [ ] `/modernize/authentication/forgot-password/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/authentication/forgot-password` to `<ModernizeAuthenticationForgotpassword.Link>`
- [ ] `/modernize/authentication/registration-complete/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/authentication/registration-complete` to `<ModernizeAuthenticationRegistrationcomplete.Link>`
- [ ] `/modernize/authentication/sign-in/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/authentication/sign-in` to `<ModernizeAuthenticationSignin.Link>`
- [ ] `/modernize/authentication/sign-up/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/authentication/sign-up` to `<ModernizeAuthenticationSignup.Link>`
- [ ] `/modernize/dashboard/categories/add/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/categories/add` to `<ModernizeDashboardCategoriesAdd.Link>`
- [ ] `/modernize/dashboard/categories/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/categories` to `<ModernizeDashboardCategories.Link>`
- [ ] `/modernize/dashboard/coupons/create/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/coupons/create` to `<ModernizeDashboardCouponsCreate.Link>`
- [ ] `/modernize/dashboard/coupons/list/active/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/coupons/list/active` to `<ModernizeDashboardCouponsListActive.Link>`
- [ ] `/modernize/dashboard/coupons/list/all/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/coupons/list/all` to `<ModernizeDashboardCouponsListAll.Link>`
- [ ] `/modernize/dashboard/coupons/list/expired/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/coupons/list/expired` to `<ModernizeDashboardCouponsListExpired.Link>`
- [ ] `/modernize/dashboard/coupons/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/coupons` to `<ModernizeDashboardCoupons.Link>`
- [ ] `/modernize/dashboard/customers/add/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/customers/add` to `<ModernizeDashboardCustomersAdd.Link>`
- [ ] `/modernize/dashboard/customers/info/[id]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/customers/info/[id]` to `<ModernizeDashboardCustomersInfoId.Link>`
- [ ] Convert `params` typing in `/modernize/dashboard/customers/info/[id]/page.ts` to `z.infer<>`
- [ ] `/modernize/dashboard/customers/list/all/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/customers/list/all` to `<ModernizeDashboardCustomersListAll.Link>`
- [ ] `/modernize/dashboard/customers/list/from-europe/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/customers/list/from-europe` to `<ModernizeDashboardCustomersListFromeurope.Link>`
- [ ] `/modernize/dashboard/customers/list/new/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/customers/list/new` to `<ModernizeDashboardCustomersListNew.Link>`
- [ ] `/modernize/dashboard/customers/list/returning/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/customers/list/returning` to `<ModernizeDashboardCustomersListReturning.Link>`
- [ ] `/modernize/dashboard/customers/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/customers` to `<ModernizeDashboardCustomers.Link>`
- [ ] `/modernize/dashboard/inbox/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/inbox` to `<ModernizeDashboardInbox.Link>`
- [ ] `/modernize/dashboard/knowledge-base/article/[articleId]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/knowledge-base/article/[articleId]` to `<ModernizeDashboardKnowledgebaseArticleArticleId.Link>`
- [ ] Convert `params` typing in `/modernize/dashboard/knowledge-base/article/[articleId]/page.ts` to `z.infer<>`
- [ ] `/modernize/dashboard/knowledge-base/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/knowledge-base` to `<ModernizeDashboardKnowledgebase.Link>`
- [ ] `/modernize/dashboard/orders/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/orders` to `<ModernizeDashboardOrders.Link>`
- [ ] `/modernize/dashboard/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard` to `<ModernizeDashboard.Link>`
- [ ] `/modernize/dashboard/pricing/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/pricing` to `<ModernizeDashboardPricing.Link>`
- [ ] `/modernize/dashboard/products/add/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/products/add` to `<ModernizeDashboardProductsAdd.Link>`
- [ ] `/modernize/dashboard/products/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/products` to `<ModernizeDashboardProducts.Link>`
- [ ] `/modernize/dashboard/reports/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/reports` to `<ModernizeDashboardReports.Link>`
- [ ] `/modernize/dashboard/settings/notifications/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/settings/notifications` to `<ModernizeDashboardSettingsNotifications.Link>`
- [ ] `/modernize/dashboard/settings/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/settings` to `<ModernizeDashboardSettings.Link>`
- [ ] `/modernize/dashboard/settings/profile/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize/dashboard/settings/profile` to `<ModernizeDashboardSettingsProfile.Link>`
- [ ] `/modernize/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/modernize` to `<Modernize.Link>`
- [ ] `/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/` to `<Home.Link>`
- [ ] `/roscent/authentication/account-setup/account-info/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/account-setup/account-info` to `<RoscentAuthenticationAccountsetupAccountinfo.Link>`
- [ ] `/roscent/authentication/account-setup/account-type-selection/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/account-setup/account-type-selection` to `<RoscentAuthenticationAccountsetupAccounttypeselection.Link>`
- [ ] `/roscent/authentication/account-setup/billing-details/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/account-setup/billing-details` to `<RoscentAuthenticationAccountsetupBillingdetails.Link>`
- [ ] `/roscent/authentication/account-setup/credit-card-setup/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/account-setup/credit-card-setup` to `<RoscentAuthenticationAccountsetupCreditcardsetup.Link>`
- [ ] `/roscent/authentication/forgot-password/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/forgot-password` to `<RoscentAuthenticationForgotpassword.Link>`
- [ ] `/roscent/authentication/reset-password/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/reset-password` to `<RoscentAuthenticationResetpassword.Link>`
- [ ] `/roscent/authentication/sign-in/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/sign-in` to `<RoscentAuthenticationSignin.Link>`
- [ ] `/roscent/authentication/sign-up/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/sign-up` to `<RoscentAuthenticationSignup.Link>`
- [ ] `/roscent/authentication/verification/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/authentication/verification` to `<RoscentAuthenticationVerification.Link>`
- [ ] `/roscent/dashboard/account/api-keys/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account/api-keys` to `<RoscentDashboardAccountApikeys.Link>`
- [ ] `/roscent/dashboard/account/billing/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account/billing` to `<RoscentDashboardAccountBilling.Link>`
- [ ] `/roscent/dashboard/account/logs/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account/logs` to `<RoscentDashboardAccountLogs.Link>`
- [ ] `/roscent/dashboard/account/overview/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account/overview` to `<RoscentDashboardAccountOverview.Link>`
- [ ] `/roscent/dashboard/account/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account` to `<RoscentDashboardAccount.Link>`
- [ ] `/roscent/dashboard/account/referrals/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account/referrals` to `<RoscentDashboardAccountReferrals.Link>`
- [ ] `/roscent/dashboard/account/security/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account/security` to `<RoscentDashboardAccountSecurity.Link>`
- [ ] `/roscent/dashboard/account/settings/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account/settings` to `<RoscentDashboardAccountSettings.Link>`
- [ ] `/roscent/dashboard/account/statements/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/account/statements` to `<RoscentDashboardAccountStatements.Link>`
- [ ] `/roscent/dashboard/chat/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/chat` to `<RoscentDashboardChat.Link>`
- [ ] `/roscent/dashboard/email/archive/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/email/archive` to `<RoscentDashboardEmailArchive.Link>`
- [ ] `/roscent/dashboard/email/compose/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/email/compose` to `<RoscentDashboardEmailCompose.Link>`
- [ ] `/roscent/dashboard/email/draft/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/email/draft` to `<RoscentDashboardEmailDraft.Link>`
- [ ] `/roscent/dashboard/email/inbox/[id]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/email/inbox/[id]` to `<RoscentDashboardEmailInboxId.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/email/inbox/[id]/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/email/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/email` to `<RoscentDashboardEmail.Link>`
- [ ] `/roscent/dashboard/email/sent/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/email/sent` to `<RoscentDashboardEmailSent.Link>`
- [ ] `/roscent/dashboard/email/spam/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/email/spam` to `<RoscentDashboardEmailSpam.Link>`
- [ ] `/roscent/dashboard/email/trash/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/email/trash` to `<RoscentDashboardEmailTrash.Link>`
- [ ] `/roscent/dashboard/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard` to `<RoscentDashboard.Link>`
- [ ] `/roscent/dashboard/projects/[id]/activity/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects/[id]/activity` to `<RoscentDashboardProjectsIdActivity.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/projects/[id]/activity/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/projects/[id]/budget/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects/[id]/budget` to `<RoscentDashboardProjectsIdBudget.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/projects/[id]/budget/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/projects/[id]/files/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects/[id]/files` to `<RoscentDashboardProjectsIdFiles.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/projects/[id]/files/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/projects/[id]/overview/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects/[id]/overview` to `<RoscentDashboardProjectsIdOverview.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/projects/[id]/overview/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/projects/[id]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects/[id]` to `<RoscentDashboardProjectsId.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/projects/[id]/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/projects/[id]/settings/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects/[id]/settings` to `<RoscentDashboardProjectsIdSettings.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/projects/[id]/settings/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/projects/[id]/targets/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects/[id]/targets` to `<RoscentDashboardProjectsIdTargets.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/projects/[id]/targets/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/projects/[id]/users/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects/[id]/users` to `<RoscentDashboardProjectsIdUsers.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/projects/[id]/users/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/projects/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/projects` to `<RoscentDashboardProjects.Link>`
- [ ] `/roscent/dashboard/user-profile/[id]/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/user-profile/[id]` to `<RoscentDashboardUserprofileId.Link>`
- [ ] Convert `params` typing in `/roscent/dashboard/user-profile/[id]/page.ts` to `z.infer<>`
- [ ] `/roscent/dashboard/user-profile/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/dashboard/user-profile` to `<RoscentDashboardUserprofile.Link>`
- [ ] `/roscent/email-template/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent/email-template` to `<RoscentEmailtemplate.Link>`
- [ ] `/roscent/page.info.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/roscent` to `<Roscent.Link>`
Once you've got that done you can remove this section.

# Why is `makeRoute` copied into the `@/routes` module?

You **own** this routing system once you install it. And we anticipate as part of that ownership you'll want to customize the routing system. That's why we create a `makeRoute.tsx` file in the `@/routes` module. This file is a copy of the `makeRoute.tsx` file from the `declarative-routing` package. You can modify this file to change the behavior of the routing system.

For example, you might want to change the way `GET`, `POST`, `PUT`, and `DELETE` are handled. Or you might want to change the way the `Link` component works. You can do all of that by modifying the `makeRoute.tsx` file.

We do **NOT** recommend changing the parameters of `makeRoute`, `makeGetRoute`, `makePostRoute`, `makePutRoute`, or `makeDeleteRoute` functions because that would cause incompatibility with the `build` command of `declarative-routing`.

# Credit where credit is due

This system is based on the work in [Fix Next.JS Routing To Have Full Type-Safety](https://www.flightcontrol.dev/blog/fix-nextjs-routing-to-have-full-type-safety). However the original article had a significantly different interface and didn't cover API routes at all.
