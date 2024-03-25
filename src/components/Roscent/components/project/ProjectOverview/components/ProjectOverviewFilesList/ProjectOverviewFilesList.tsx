import {Button, Card, Group, rem, Stack, Text, Title} from '@mantine/core'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {DownloadSimple, Upload, X} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {get} from 'lodash-es'
import {Fragment} from 'react'

import {iconMap} from '@roscent/utils/icons'

import styles from './ProjectOverviewFilesList.module.scss'

interface FileItem {
  name: string
  info: string
  type: 'img' | 'pdf' | 'xlsx'
}

function FileItem({info, name, type}: FileItem) {
  const Icon = get(iconMap, type, Fragment)

  return (
    <Group className={styles.file} gap='sm' w='100%'>
      <Group align='center' className={styles.iconWrapper} justify='center'>
        <Icon size={16} />
      </Group>

      <Stack gap='0'>
        <Text size='xs'>{name}</Text>
        <Text className={styles.fileInfo} size='xs'>
          {info}
        </Text>
      </Stack>

      <DownloadSimple className={clsx(styles.download, 'icon-size-md')} />
    </Group>
  )
}

export const files: FileItem[] = [
  {
    name: 'Project tech requirements.pdf',
    info: '5.6 MB / Just now / Karina Clark',
    type: 'pdf',
  },
  {
    name: 'Dashboard-design.jpg',
    info: '2.3 MB / 59 minutes ago / Marcus Blake',
    type: 'img',
  },
  {
    name: 'Completed Project Stylings.pdf',
    info: '4.6 MB / 12 hours ago / Terry Barry',
    type: 'pdf',
  },
  {
    name: 'Create Project Wireframes.xls',
    info: '1.2 MB / Today, 11:59 AM / Roth Bloom',
    type: 'xlsx',
  },
  {
    name: 'Project tech requirements.pdf',
    info: '2.8 MB / Yesterday / Natali Craig',
    type: 'pdf',
  },
]

function FilesList() {
  const content = files.map((file) => {
    return <FileItem key={`${file.name}-${file.info}`} {...file} />
  })

  return <Stack>{content}</Stack>
}

function FileDropzone() {
  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      className={clsx(styles.dropzone)}
      maxSize={5 * 1024 ** 2}
      onDrop={(_files) => console.log('accepted files', _files)}
      onReject={(_files) => console.log('rejected files', _files)}
    >
      <Group
        className={styles.dropzoneArea}
        gap='xs'
        justify='center'
        style={{pointerEvents: 'none'}}
      >
        <Dropzone.Accept>
          <Upload
            style={{
              width: rem(52),
              height: rem(52),
              color: 'var(--mantine-color-blue-6)',
            }}
            weight='light'
          />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <X
            style={{
              width: rem(52),
              height: rem(52),
              color: 'var(--mantine-color-red-6)',
            }}
            weight='light'
          />
        </Dropzone.Reject>

        <Text className={styles.dropzoneInstruction} size='xs'>
          Drop files here or upload files
        </Text>

        <Button
          className={styles.dropzoneUploadButton}
          size='xs'
          variant='subtle'
        >
          Upload
        </Button>
      </Group>
    </Dropzone>
  )
}

export function ProjectOverviewFilesList() {
  return (
    <Stack component={Card} gap='lg'>
      <Title order={5}>Latest Files</Title>
      <FilesList />
      <FileDropzone />
    </Stack>
  )
}
