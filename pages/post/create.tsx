import PostLayout from '../../src/components/layouts/PostLayout'
import { Typography, TextField, Box, Button } from '@mui/material'
import QuillTextField from '../../src/components/TextField/QuillTextField'
import { DateTimePicker } from '@mui/x-date-pickers'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs'

function SideBarContent() {
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
        sx={{ mt: 4, mb: 2 }}
      />
      <TextField
        fullWidth
        label="Slug"
        size="small"
        id="fullWidth"
        sx={{ mb: 2 }}
      />
      <DateTimePicker
        label="Publish"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} sx={{ mb: 2 }} fullWidth/>
        )}
      />
      <Button fullWidth variant="contained">Submit</Button>
    </Box>
  )
}

export default function PostCreate() {
  return (
    <PostLayout enableToggle={false} sideBarContent={<SideBarContent />}>
      <TextField fullWidth label="Title" id="fullWidth" sx={{ mt: 2, mb: 4 }} />
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Body
      </Typography>
      <QuillTextField style={{ height: '500px' }} />
    </PostLayout>
  )
}
