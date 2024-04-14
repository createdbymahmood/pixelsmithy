export const applicants = [
  {
    id: '1323addd-a4ac-4dd2-8de2-6f934969a0f1',
    fullName: 'Jake Gyll',
    score: 0,
    hiringStage: 'interview',
    appliedDate: '13 July, 2021',
    jobRole: 'Designer',
  },
  {
    id: '0cf96f1c-62c9-4e3f-97b0-4a2e8fa2bf6b',
    fullName: 'Cyndy Lillibridge',
    score: 4.5,
    hiringStage: 'shortlisted',
    appliedDate: '12 July, 2021',
    jobRole: 'Golang Dev',
  },
]

export type Applicant = (typeof applicants)[0]
