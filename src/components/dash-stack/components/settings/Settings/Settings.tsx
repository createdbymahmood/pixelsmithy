'use client'
import {
  Avatar,
  Button,
  Card,
  Group,
  Input,
  rem,
  Stack,
  Text,
  Textarea,
} from '@mantine/core'
import {Image} from '@phosphor-icons/react/dist/ssr'

import {PageHeader} from '@dash-stack/components'

function UploadLogo() {
  return (
    <Stack align='center' gap='sm'>
      <Avatar size={rem(80)}>
        <Image />
      </Avatar>
      <Text c='primary' fw='700' size='sm'>
        Upload Logo
      </Text>
    </Stack>
  )
}

const inputWidth = rem(360)

function FormView() {
  return (
    <Card p='xl'>
      <Stack align='center' gap={rem(60)}>
        <UploadLogo />
        <Group gap={rem(60)} justify='center' w='100%' wrap='nowrap'>
          <Input.Wrapper label='Site Name' size='md' w={inputWidth}>
            <Input
              placeholder='Enter your first name'
              size='md'
              value='Bright Web'
            />
          </Input.Wrapper>

          <Input.Wrapper label='Copy Right' size='md' w={inputWidth}>
            <Input size='md' value='All rights Reserved@brightweb' />
          </Input.Wrapper>
        </Group>

        <Group
          align='flex-start'
          gap={rem(60)}
          justify='center'
          w='100%'
          wrap='nowrap'
        >
          <Stack>
            <Input.Wrapper label='SEO Title' size='md' w={inputWidth}>
              <Input size='md' value='Bright web is a hybrid dashboard' />
            </Input.Wrapper>

            <Input.Wrapper label='SEO Keywords' size='md' w={inputWidth}>
              <Input size='md' value='CEO' />
            </Input.Wrapper>
          </Stack>

          <Textarea
            h='100%'
            label='SEO Description'
            rows={6}
            size='md'
            value='Bright web is a hybrid dashboard'
            w={inputWidth}
          />
        </Group>

        <Button color='primary.4' radius='md' size='lg' w={rem(274)}>
          Save
        </Button>
      </Stack>
    </Card>
  )
}

export function Settings() {
  return (
    <Stack gap='md' pb='md'>
      <PageHeader>General Settings</PageHeader>
      <FormView />
    </Stack>
  )
}
