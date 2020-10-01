import Attachment, { IAttachmentProps } from '../gherkin/Attachment'
import MessageToComponentMappingContext from '../../contexts/MessageToComponentMappingContext'
import React from 'react'

const CustomizableAttachment: React.FunctionComponent<IAttachmentProps> = ({
  attachment,
}) => {
  const messageToComponent = React.useContext(MessageToComponentMappingContext)
  const AttachmentComponent = messageToComponent?.attachment ?? Attachment

  return <AttachmentComponent attachment={attachment} />
}

export default CustomizableAttachment