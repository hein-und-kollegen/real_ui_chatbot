import { ContentType } from "@/types"
import { FC } from "react"
import { TabsTrigger } from "../ui/tabs"
import { WithTooltip } from "../ui/with-tooltip"

interface SidebarSwitchItemProps {
  contentType: ContentType
  icon: React.ReactNode
  onContentTypeChange: (contentType: ContentType) => void
}

const translationMap = {
  chats: "Chats",
  presets: "Voreinstellungen",
  prompts: "Aufforderungen",
  files: "Dateien",
  collections: "Sammlungen",
  assistants: "Assistenten",
  tools: "Werkzeuge",
  models: "Modelle",
};

export const SidebarSwitchItem: FC<SidebarSwitchItemProps> = ({
  contentType,
  icon,
  onContentTypeChange
}) => {
  const translatedContentType = translationMap[contentType];

  return (
    <WithTooltip
      display={
        <div>{translatedContentType[0].toUpperCase() + translatedContentType.substring(1)}</div>
      }
      trigger={
        <TabsTrigger
          className="hover:opacity-90"
          value={contentType}
          onClick={() => onContentTypeChange(contentType as ContentType)}
        >
          {icon}
        </TabsTrigger>
      }
    />
  )
}
