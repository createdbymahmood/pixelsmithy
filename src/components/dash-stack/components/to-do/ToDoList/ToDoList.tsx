'use client'

import {
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  Input,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {Star, Trash, XCircle} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {Fragment} from 'react'

import {PageHeader} from '@dash-stack/components'

import styles from './ToDoList.module.scss'

function Header({state}: {state: UseTodoListStateReturnValue}) {
  const label = state.formShown ? 'Save' : 'Add new task'
  return (
    <Group justify='space-between'>
      <PageHeader>To-Do List</PageHeader>

      <Button
        color='primary.4'
        radius='md'
        size='md'
        onClick={state.onCreateTaskClick}
      >
        {label}
      </Button>
    </Group>
  )
}

interface ToDo {
  title: string
  starred: boolean
}

const todos: ToDo[] = [
  {
    title: 'Meeting with CEO',
    starred: false,
  },
]

interface ToDoListItemProps extends ToDo {}

const iconProps = {
  className: clsx('icon-size-xl', 'cursor-pointer'),
  color: 'var(--mantine-color-gray-5)',
  weight: 'light',
} as const

function ToDoListItem(props: ToDoListItemProps) {
  const [isStarred, {toggle: toggleStar}] = useDisclosure(false)
  const [isChecked, {toggle: toggleChecked}] = useDisclosure(false)

  const actions = isChecked ? (
    <Box
      component={Trash}
      ml='auto'
      {...iconProps}
      color='var(--mantine-color-gray-3)'
    />
  ) : (
    <Fragment>
      <Box
        component={Star}
        ml='auto'
        {...iconProps}
        color={isStarred ? 'var(--mantine-color-yellow-5)' : iconProps.color}
        weight={isStarred ? 'fill' : iconProps.weight}
        onClick={toggleStar}
      />
      <XCircle {...iconProps} />
    </Fragment>
  )

  const label = (
    <Text component='label' fw='600' htmlFor='checkbox'>
      {props.title}
    </Text>
  )

  return (
    <Card className={clsx(styles.todo, {[styles.checked]: isChecked})} p='md'>
      <Group>
        <Checkbox
          classNames={{input: styles.checkbox}}
          color='primary.4'
          id='checkbox'
          label={label}
          radius='md'
          size='lg'
          onChange={toggleChecked}
        />

        {actions}
      </Group>
    </Card>
  )
}

function List() {
  const content = todos.map((todo) => {
    return <ToDoListItem {...todo} key={todo.title} />
  })

  return <Stack>{content}</Stack>
}

type UseTodoListStateReturnValue = ReturnType<typeof useTodoListState>

function useTodoListState() {
  const [formShown, handlers] = useDisclosure(false)

  const onCreateTaskClick = handlers.toggle
  return {onCreateTaskClick, formShown}
}

function AddTaskFormView() {
  return (
    <Card p='md'>
      <Input maw={rem(435)} placeholder='Write Your task name here' />
    </Card>
  )
}

export function ToDoList() {
  const state = useTodoListState()
  return (
    <Stack gap='md' pb='md'>
      <Header state={state} />
      {state.formShown ? <AddTaskFormView /> : null}
      <List />
    </Stack>
  )
}
