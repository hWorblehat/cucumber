import { IAttachmentsProps } from '../gherkin/Attachments'
import MessageToComponentMappingContext from '../../contexts/MessageToComponentMappingContext'
import React from 'react'

const CustomizableAttachments: React.FunctionComponent<IAttachmentsProps> = ({
  attachments,
}) => {
  const messageToComponent = React.useContext(MessageToComponentMappingContext)
  const AttachmentsComponent = messageToComponent.attachments

  return <AttachmentsComponent attachments={attachments} />
}

export default CustomizableAttachments
