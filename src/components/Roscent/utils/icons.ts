import type {IconProps} from '@phosphor-icons/react'
import {FileJpg, FilePdf, FileXls} from '@phosphor-icons/react/dist/ssr'

type FileItemType = 'img' | 'pdf' | 'xlsx'

export const iconMap: Record<FileItemType, React.FC<IconProps>> = {
  img: FileJpg,
  pdf: FilePdf,
  xlsx: FileXls,
}
