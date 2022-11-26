import PostLayout from '../../components/layouts/PostLayout'
import { Typography, TextField, Box, Button } from '@mui/material'
import QuillTextField from '../../components/TextField/QuillTextField'
import { DateTimePicker } from '@mui/x-date-pickers'
import React, { SetStateAction, Dispatch, useEffect } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import axios from 'axios'
import ReactQuill, { Quill } from 'react-quill'
import { parseCookies } from 'src/utils/helper'
import { EventHandler } from 'react'
import AuthorizationWrapper from 'src/components/Wrapper/AuthorizationWrapper'
import { NextRequest, NextResponse } from 'next/server'
import { Radio } from '@mui/material'
import { Checkbox } from '@mui/material'
import { FormControlLabel } from '@mui/material'

function SideBarContent(props: {
  slug: string
  summary: string
  isPublish: boolean
  setSlug: React.Dispatch<React.SetStateAction<string>>
  setSummary: React.Dispatch<React.SetStateAction<string>>
  setPublish: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit: () => void
}) {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54')
  )
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Typography variant="h3">Advance</Typography>
      <TextField
        fullWidth
        label="Summary"
        id="fullWidth"
        value={props.summary}
        multiline
        rows={4}
        onChange={(e) => {
          props.setSummary(e.target.value)
        }}
        sx={{ mt: 4, mb: 2 }}
      />
      <TextField
        fullWidth
        label="Slug"
        size="small"
        id="fullWidth"
        value={props.slug}
        onChange={(e) => {
          props.setSlug(e.target.value)
        }}
        sx={{ mb: 2 }}
      />
      <DateTimePicker
        label="Publish"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} sx={{ mb: 2 }} fullWidth size="small" />
        )}
      />
      <FormControlLabel
        control={<Checkbox />}
        onChange={() => props.setPublish(!props.isPublish)}
        label="Publish"
      />
      <Button
        fullWidth
        variant="contained"
        onClick={() => props.handleSubmit()}
      >
        Submit
      </Button>
    </Box>
  )
}

export default function PostCreate(props: { authorization: string }) {
  const { authorization } = props
  const [title, setTitle] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')
  const [summary, setSummary] = React.useState<string>('')
  const [slug, setSlug] = React.useState<string>('')
  const [isPublish, setPublish] = React.useState<boolean>(false)

  const handleSubmit = () => {
    console.log({
      title: title,
      content: content,
      summary: summary,
      slug: slug,
      published: isPublish,
    })
    axios
      .post(
        'http://localhost:3000/posts/create',
        {
          title: title,
          content: content,
          summary: summary,
          slug: slug,
          published: isPublish,
        },
        {
          headers: {
            authorization: authorization,
          },
        }
      )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  return (
    // <AuthorizationWrapper authorization={authorization}>
    <PostLayout
      enableToggle={false}
      sideBarContent={
        <SideBarContent
          slug={slug}
          summary={summary}
          isPublish={isPublish}
          setSummary={setSummary}
          setSlug={setSlug}
          setPublish={setPublish}
          handleSubmit={handleSubmit}
        />
      }
    >
      <TextField
        fullWidth
        label="Title"
        id="fullWidth"
        multiline
        rows={2}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        sx={{ mt: 2, mb: 4 }}
      />
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Body
      </Typography>
      <QuillTextField
        style={{ height: '500px' }}
        value={content}
        setValue={setContent}
      />
    </PostLayout>
    // </AuthorizationWrapper>
  )
}

PostCreate.getInitialProps = async (context: { req: any; res: any }) => {
  const { req, res } = context
  const data = parseCookies(req)
  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: '/' })
      res.end()
    }
  }
  return {
    authorization: data && data.user,
  }
}
