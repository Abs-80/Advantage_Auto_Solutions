export interface ServiceInfo {
  id: string;
  titleKey: string;
  descKey: string;
  iconName: "Target" | "Users" | "GraduationCap";
}

export const servicesData: ServiceInfo[] = [
  {
    id: "consulting",
    titleKey: "service.consulting.title",
    descKey: "service.consulting.desc",
    iconName: "Target",
  },
  {
    id: "recruitment",
    titleKey: "service.recruitment.title",
    descKey: "service.recruitment.desc",
    iconName: "Users",
  },
  {
    id: "training",
    titleKey: "service.training.title",
    descKey: "service.training.desc",
    iconName: "GraduationCap",
  }
];
