import dynamic from 'next/dynamic'
import { Dispatch, SetStateAction, useMemo } from 'react'

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

export default function QuillTextField(props: {
  style?: Object
  value: string
  setValue: Dispatch<SetStateAction<string>>
}) {
  const QuillNoSSRWrapper = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  )
  return (
    <QuillNoSSRWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      id="editor"
      value={props.value}
      onChange={props.setValue}
      style={props.style}
    />
  )
}
