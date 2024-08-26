import { ContentType } from "@/types"
import { FC } from "react"
import { Input } from "../ui/input"

interface SidebarSearchProps {
  contentType: ContentType
  searchTerm: string
  setSearchTerm: Function
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

export const SidebarSearch: FC<SidebarSearchProps> = ({
  contentType,
  searchTerm,
  setSearchTerm
}) => {
  const translatedContentType = translationMap[contentType];

  return (
    <Input
      placeholder={`Suche ${translatedContentType}...`}
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}
