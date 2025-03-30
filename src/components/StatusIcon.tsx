import { Icon, useToken } from '@chakra-ui/react'
import { Square } from 'lucide-react'
import React from 'react'

interface IProps {
  color: string
}

const StatusIcon: React.FC<IProps> = ({ color }) => {
  const iconColor = useToken('colors', [`${color}`])[0]

  return (
    <Icon size="sm">
      <Square fill={iconColor} />
    </Icon>
  )
}

export { StatusIcon }
