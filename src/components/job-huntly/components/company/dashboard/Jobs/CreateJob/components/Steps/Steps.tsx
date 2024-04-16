import type {MantineColor, StepperStepProps} from '@mantine/core'
import {Box, Stack, Stepper, Text} from '@mantine/core'
import {Briefcase, ClipboardText} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'
import React, {useState} from 'react'
import type {Falsey} from 'utility-types'

import {JobInformationForm} from '../JobInformationForm'
import styles from './Steps.module.scss'

type StepperStepState = Exclude<StepperStepProps['state'], Falsey>
const labelColorMap: Record<StepperStepState, MantineColor> = {
  stepInactive: 'neutrals.3',
  stepProgress: 'primary',
  stepCompleted: 'primary',
}

const descriptionColorMap: Record<StepperStepState, MantineColor> = {
  stepInactive: 'neutrals.3',
  stepProgress: 'neutrals.6',
  stepCompleted: 'neutrals.6',
}

interface StepProps extends StepperStepProps {
  label: string
  description: string
}

function Step({
  children,
  description: _description,
  label: _label,
  ...props
}: StepProps) {
  const labelColor = get(labelColorMap, props.state!)
  const descriptionColor = get(descriptionColorMap, props.state!)

  const icon = (
    <Box className='icon-size-lg' component={Briefcase} weight='bold' />
  )

  const label = <Text c={labelColor}>{_label}</Text>
  const description = (
    <Text c={descriptionColor} fw='600' size='lg'>
      {_description}
    </Text>
  )

  return (
    <Stepper.Step
      {...props}
      completedIcon={icon}
      description={description}
      icon={icon}
      label={label}
    >
      Salam
    </Stepper.Step>
  )
}

function JobInformationStep(props: StepperStepProps) {
  const icon = (
    <Box className='icon-size-lg' component={Briefcase} weight='bold' />
  )

  return (
    <Step
      {...props}
      completedIcon={icon}
      description='Job Information'
      icon={icon}
      label='Step 1/3'
    >
      <JobInformationForm />
    </Step>
  )
}

function JobDescriptionStep(props: StepperStepProps) {
  const icon = (
    <Box className='icon-size-lg' component={Briefcase} weight='bold' />
  )
  return (
    <Step
      {...props}
      completedIcon={icon}
      description='Job Description'
      icon={icon}
      label='Step 2/3'
    >
      Step 1 content: Create an account
    </Step>
  )
}

function PerksAndBenefitsStep(props: StepperStepProps) {
  const icon = (
    <Box className='icon-size-lg' component={ClipboardText} weight='bold' />
  )

  return (
    <Step
      {...props}
      completedIcon={icon}
      description='Perks & Benefit'
      icon={icon}
      label='Step 3/3'
    >
      Step 1 content: Create an account
    </Step>
  )
}

export function Steps() {
  const [active, setActive] = useState(0)

  return (
    <Stack>
      <Stepper
        active={active}
        classNames={styles}
        size='xl'
        styles={{
          separator: {
            background: 'secondary.0',
            height: '50px',
            width: '1px',
            flexGrow: 0,
            flexBasis: 1,
            margin: '0 auto',
          },
        }}
        onStepClick={setActive}
      >
        <JobInformationStep>
          <JobInformationForm />
        </JobInformationStep>

        <JobDescriptionStep />
        <PerksAndBenefitsStep />
      </Stepper>
    </Stack>
  )
}
