export const listRelations: { [key: string]: string[] } = {
  workspaces: ["documents"],
  languages: ["lessonObjectives"],
  lessonObjectives:["bookTitles"]
};
